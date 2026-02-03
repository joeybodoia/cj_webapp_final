import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT ? Number(process.env.PORT) : 5173;

const app = express();
app.set('trust proxy', true);

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
