import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT ? Number(process.env.PORT) : 5173;

const app = express();
app.set('trust proxy', true);

/**
 * IndexNow key file route (must be defined BEFORE the catch-all '*')
 * URL must be: https://dsoutdoorliving.com/a1a9280cc8504acf912bed7df8c61e4c.txt
 * Body must be exactly the key: a1a9280cc8504acf912bed7df8c61e4c
 */
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || process.env.INDEXNOW || '';
const INDEXNOW_KEY_FILENAME = 'a1a9280cc8504acf912bed7df8c61e4c.txt';
const INDEXNOW_KEY_VALUE = 'a1a9280cc8504acf912bed7df8c61e4c';

app.get(`/${INDEXNOW_KEY_FILENAME}`, (req, res) => {
  res.type('text/plain');

  // Prefer env var; fall back to the literal key so the route still works if env is misnamed.
  // (IndexNow validation expects the body to match the key in the filename.)
  const keyToServe = (INDEXNOW_KEY || INDEXNOW_KEY_VALUE).trim();

  // Hard guard: if someone misconfigured the env var to a different value, still serve the correct key.
  // This prevents accidental validation failures.
  if (keyToServe !== INDEXNOW_KEY_VALUE) {
    return res.send(INDEXNOW_KEY_VALUE);
  }

  return res.send(keyToServe);
});

/**
 * IndexNow submit endpoint (protected)
 * Call this from your deploy pipeline (or manually) to push updated URLs to IndexNow.
 *
 * Request:
 *   POST /internal/indexnow/submit
 *   Headers:
 *     x-internal-secret: <INDEXNOW_INTERNAL_SECRET>
 *     Content-Type: application/json
 *   Body:
 *     { "urlList": ["https://dsoutdoorliving.com/...", "..."] }
 */
app.use(express.json({ limit: '200kb' }));

app.post('/internal/indexnow/submit', async (req, res) => {
  try {
    const secret = req.get('x-internal-secret');
    if (
      !process.env.INDEXNOW_INTERNAL_SECRET ||
      secret !== process.env.INDEXNOW_INTERNAL_SECRET
    ) {
      return res.status(401).json({ error: 'unauthorized' });
    }

    const urlList = req.body?.urlList;
    if (!Array.isArray(urlList) || urlList.length === 0) {
      return res.status(400).json({ error: 'urlList must be a non-empty array' });
    }

    if (urlList.length > 10000) {
      return res.status(400).json({ error: 'IndexNow max 10,000 URLs per request' });
    }

    // Basic sanity filter: ensure strings + trim empties
    const cleanedUrlList = urlList
      .filter((u) => typeof u === 'string')
      .map((u) => u.trim())
      .filter(Boolean);

    if (cleanedUrlList.length === 0) {
      return res.status(400).json({ error: 'urlList must contain valid URL strings' });
    }

    const host = req.get('host'); // or hardcode "dsoutdoorliving.com" if you prefer
    const key = (process.env.INDEXNOW_KEY || '').trim();
    if (!key) {
      return res.status(500).json({ error: 'INDEXNOW_KEY not set' });
    }

    const keyLocation = `https://${host}/${key}.txt`;

    const payload = {
      host,
      key,
      keyLocation,
      urlList: cleanedUrlList
    };

    const r = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });

    const bodyText = await r.text().catch(() => '');
    return res.status(200).json({
      ok: r.ok,
      indexnowStatus: r.status,
      indexnowBody: bodyText
    });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
});

if (!isProd) {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(req.originalUrl, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const result = await render(url);

      if (result.redirect) {
        res.redirect(result.redirect.status, result.redirect.location);
        return;
      }

      const html = template.replace('<!--app-html-->', result.appHtml ?? '');
      if (result.headers) {
        Object.entries(result.headers).forEach(([key, value]) => {
          res.setHeader(key, value);
        });
      }

      res.status(result.statusCode ?? 200).end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error);
      res.status(500).end(String(error));
    }
  });
} else {
  app.use(
    express.static(path.resolve(__dirname, 'dist/client'), {
      index: false
    })
  );

  app.use('*', async (req, res) => {
    try {
      const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
      const template = fs.readFileSync(
        path.resolve(__dirname, 'dist/client/index.html'),
        'utf-8'
      );
      const { render } = await import('./dist/server/entry-server.js');
      const result = await render(url);

      if (result.redirect) {
        res.redirect(result.redirect.status, result.redirect.location);
        return;
      }

      const html = template.replace('<!--app-html-->', result.appHtml ?? '');
      if (result.headers) {
        Object.entries(result.headers).forEach(([key, value]) => {
          res.setHeader(key, value);
        });
      }

      res.status(result.statusCode ?? 200).end(html);
    } catch (error) {
      res.status(500).end(String(error));
    }
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
