import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'node:url';
import { getServerSupabase } from './server/supabase-server.js';
import { Resend } from 'resend';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT ? Number(process.env.PORT) : 5173;

const canonicalHost = process.env.CANONICAL_HOST || 'dsoutdoorliving.com';
const canonicalProtocol = process.env.CANONICAL_PROTOCOL || 'https';
const canonicalHostLower = String(canonicalHost).toLowerCase();

const app = express();
app.set('trust proxy', true);
app.use(compression({ threshold: 0 }));
app.use((req, res, next) => {
  res.setHeader('x-compression', 'on');
  next();
});

const escapeAttr = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');

const normalizePath = (pathname) => {
  let p = String(pathname || '/');

  // Collapse multiple slashes anywhere in path: //phoenix/// -> /phoenix/
  p = p.replace(/\/{2,}/g, '/');

  // Remove trailing slash except for root
  if (p.length > 1 && p.endsWith('/')) {
    p = p.replace(/\/+$/, '');
  }

  return p;
};

const getCanonicalBase = (req) => {
  if (!isProd) {
    const devHost = req.get('host');
    const devProtocol = req.protocol;
    return `${devProtocol}://${devHost}`;
  }
  return `${canonicalProtocol}://${canonicalHost}`;
};

const getRequestPathname = (req) => {
  try {
    const base = getCanonicalBase(req);
    const url = new URL(req.originalUrl || '/', base);
    return normalizePath(url.pathname);
  } catch {
    return normalizePath(req.path || '/');
  }
};

const getCanonicalUrl = (req) => {
  const base = getCanonicalBase(req);
  const pathname = getRequestPathname(req);
  return `${base}${pathname}`;
};

const prefetchProductTypes = new Map([
  ['/hot-tubs', 'Spa'],
  ['/swim-spas', 'Swim Spa'],
  ['/contrast-therapy-spas', 'Contrast Therapy Spa']
]);

const getInitialData = async (req) => {
  const pathname = getRequestPathname(req);
  const productType = prefetchProductTypes.get(pathname);

  if (!productType) {
    return null;
  }

  const supabase = getServerSupabase();
  if (!supabase) {
    if (process.env.SSR_PREFETCH_DEBUG === 'true') {
      console.log('[SSR Prefetch] supabase not configured');
    }
    return null;
  }

  const { data, error } = await supabase
    .from('inventory')
    .select('*')
    .eq('product_type', productType);

  if (error) {
    console.error('Failed to prefetch products for SSR:', error.message);
    return null;
  }

  if (process.env.SSR_PREFETCH_DEBUG === 'true') {
    console.log(
      `[SSR Prefetch] ${pathname} product_type=${productType} count=${Array.isArray(data) ? data.length : 0}`
    );
  }

  return {
    productsByType: {
      [productType]: data || []
    }
  };
};

const serializeInitialData = (data) => {
  const json = JSON.stringify(data ?? {});
  return json.replace(/</g, '\\u003c');
};

const injectInitialData = (template, initialData) => {
  const script = `<script>window.__INITIAL_DATA__=${serializeInitialData(initialData)};</script>`;
  if (template.includes('<!--initial-data-->')) {
    return template.replace('<!--initial-data-->', script);
  }
  return template.replace('</head>', `${script}</head>`);
};

const injectSocialUrls = (template, canonicalUrl) => {
  const escaped = escapeAttr(canonicalUrl);
  let next = template.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${escaped}" />`
  );
  next = next.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:url" content="${escaped}" />`
  );
  return next;
};

const getSeoMeta = (pathname) => {
  const defaults = {
    title: "D's Outdoor Living - Premium Spas, Swim Spas & Gazebos",
    description:
      "D's Outdoor Living offers premium spas, swim spas, and gazebos with the best prices and service. Drive a little, save a lot on quality outdoor living products."
  };

  const map = {
    '/': {
      title: "D's Outdoor Living | Premium Spas, Swim Spas & Gazebos in Arizona",
      description:
        "Premium spas, swim spas, and gazebos in Arizona. Visit our Phoenix and Surprise showrooms for in-stock hot tubs and expert guidance."
    },
    '/hot-tubs': {
      title: 'Hot Tubs in Arizona | D’s Outdoor Living',
      description:
        'Shop premium hot tubs with delivery and installation coordination across Arizona. Compare sizes, seating, and features.'
    },
    '/swim-spas': {
      title: 'Swim Spas in Arizona | D’s Outdoor Living',
      description:
        'Explore swim spas for fitness and relaxation. Serving Arizona with delivery, installation coordination, and in-stock options.'
    },
    '/contrast-therapy-spas': {
      title: 'Contrast Therapy Spas in Arizona | D’s Outdoor Living',
      description:
        'Discover contrast therapy spas for recovery and wellness. Serving Arizona with expert guidance and delivery coordination.'
    },
    '/phoenix': {
      title: 'Phoenix Showroom | D’s Outdoor Living',
      description:
        'Visit our Phoenix showroom (appointment-only) for premium spas, swim spas, and outdoor living products.'
    },
    '/phoenix/hot-tubs': {
      title: 'Hot Tubs in Phoenix, AZ | D’s Outdoor Living',
      description:
        'Shop hot tubs in Phoenix with delivery and installation coordination. Visit our Phoenix showroom by appointment.'
    },
    '/phoenix/swim-spas': {
      title: 'Swim Spas in Phoenix, AZ | D’s Outdoor Living',
      description:
        'Explore swim spas in Phoenix for fitness and relaxation. Delivery and installation coordination available.'
    },
    '/phoenix/contrast-therapy-spas': {
      title: 'Contrast Therapy Spas in Phoenix, AZ | D’s Outdoor Living',
      description:
        'Contrast therapy spas in Phoenix for recovery and wellness. Visit our Phoenix showroom by appointment.'
    },
    '/surprise': {
      title: 'Surprise Showroom | D’s Outdoor Living',
      description:
        'Visit our Surprise showroom for premium spas, swim spas, and outdoor living products. In-stock inventory available.'
    },
    '/mesa': {
      title: 'Mesa Showroom | D’s Outdoor Living',
      description:
        'Visit our Mesa showroom for premium spas, swim spas, and outdoor living products. In-stock inventory available.'
    },
    '/mesa/hot-tubs': {
      title: 'Hot Tubs in Mesa, AZ | D’s Outdoor Living',
      description:
        'Shop hot tubs in Mesa with delivery and installation coordination. Visit our Mesa showroom.'
    },
    '/mesa/swim-spas': {
      title: 'Swim Spas in Mesa, AZ | D’s Outdoor Living',
      description:
        'Explore swim spas in Mesa for fitness and relaxation. Delivery and installation coordination available.'
    },
    '/mesa/contrast-therapy-spas': {
      title: 'Contrast Therapy Spas in Mesa, AZ | D’s Outdoor Living',
      description:
        'Contrast therapy spas in Mesa for recovery and wellness. Visit our Mesa showroom.'
    },
    '/surprise/hot-tubs': {
      title: 'Hot Tubs in Surprise, AZ | D’s Outdoor Living',
      description:
        'Shop hot tubs in Surprise with delivery and installation coordination. Visit our Surprise showroom.'
    },
    '/surprise/swim-spas': {
      title: 'Swim Spas in Surprise, AZ | D’s Outdoor Living',
      description:
        'Explore swim spas in Surprise for fitness and relaxation. Delivery and installation coordination available.'
    },
    '/surprise/contrast-therapy-spas': {
      title: 'Contrast Therapy Spas in Surprise, AZ | D’s Outdoor Living',
      description:
        'Contrast therapy spas in Surprise for recovery and wellness. Visit our Surprise showroom.'
    }
  };

  return map[pathname] || defaults;
};

const injectSeoMeta = (template, pathname) => {
  const { title, description } = getSeoMeta(pathname);
  const escapedTitle = escapeAttr(title);
  const escapedDescription = escapeAttr(description);

  let next = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapedTitle}</title>`);

  next = next.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapedDescription}" />`
  );

  next = next.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapedTitle}" />`
  );

  next = next.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapedDescription}" />`
  );

  next = next.replace(
    /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:title" content="${escapedTitle}" />`
  );

  next = next.replace(
    /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:description" content="${escapedDescription}" />`
  );

  return next;
};

const getPrefetchHeaderValue = (pathname, initialData) => {
  const productType = prefetchProductTypes.get(pathname);
  if (!productType) {
    return 'skip';
  }
  const count =
    initialData?.productsByType?.[productType] &&
    Array.isArray(initialData.productsByType[productType])
      ? initialData.productsByType[productType].length
      : 0;
  return `product_type=${productType};count=${count}`;
};

if (isProd) {
  app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return next();
    }

    const host = String(req.get('host') || '').toLowerCase();

    const isHttps = req.protocol === 'https';
    const hasWww = host.startsWith('www.');
    const needsHostRedirect = host !== canonicalHostLower;
    const needsProtocolRedirect = !isHttps && canonicalProtocol === 'https';

    const normalizedPath = normalizePath(req.path || '/');
    const needsPathRedirect = normalizedPath !== String(req.path || '/');

    if (hasWww || needsHostRedirect || needsProtocolRedirect || needsPathRedirect) {
      const base = `${canonicalProtocol}://${canonicalHost}`;

      // Preserve querystring safely (if present)
      const queryIndex = String(req.originalUrl || '').indexOf('?');
      const query = queryIndex >= 0 ? String(req.originalUrl).slice(queryIndex) : '';

      const redirectUrl = `${base}${normalizedPath}${query}`;
      return res.redirect(301, redirectUrl);
    }

    return next();
  });
}

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
 * Remove/disable this after debugging.
 * To keep it for future troubleshooting, gate behind ENABLE_INTERNAL_DEBUG=true.
 */
if (process.env.ENABLE_INTERNAL_DEBUG === 'true') {
  app.get('/internal/_debug/headers', (req, res) => {
    const header = req.get('x-internal-secret');
    res.json({
      host: req.get('host') || null,
      hasEnvSecret: Boolean(process.env.INDEXNOW_INTERNAL_SECRET),
      envSecretLength: process.env.INDEXNOW_INTERNAL_SECRET
        ? String(process.env.INDEXNOW_INTERNAL_SECRET).length
        : 0,
      receivedHeader: typeof header === 'string',
      receivedHeaderLength: typeof header === 'string' ? header.length : 0
    });
  });
}

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
    // Whitespace-safe comparison (prevents invisible mismatch issues)
    const expected = String(process.env.INDEXNOW_INTERNAL_SECRET || '').trim();
    const provided = String(req.get('x-internal-secret') || '').trim();

    if (!expected || provided !== expected) {
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

    // Prefer a stable, canonical host if provided (prevents accidental host mismatches)
    const host =
      (process.env.INDEXNOW_HOST && process.env.INDEXNOW_HOST.trim()) ||
      req.get('host');

    const key = String(process.env.INDEXNOW_KEY || '').trim();
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

    // Surface IndexNow errors clearly (still 200 from our endpoint so your deploy step can parse JSON)
    return res.status(200).json({
      ok: r.ok,
      indexnowStatus: r.status,
      indexnowBody: bodyText
    });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
});

// ---------------------------------------------------------------------------
// Quote form submission
// ---------------------------------------------------------------------------
const resend = new Resend(process.env.RESEND_API_KEY);

const PRODUCT_LABELS = {
  'hot-tubs': 'Hot Tubs',
  'swim-spas': 'Swim Spas',
  'contrast-therapy-spas': 'Contrast Therapy Spas'
};

const LOCATION_LABELS = {
  phoenix: 'Phoenix',
  mesa: 'Mesa',
  surprise: 'Surprise'
};

app.post('/api/quote', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, interestedIn, productName, preferredLocation, message } = req.body || {};

    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const productLabel = PRODUCT_LABELS[interestedIn] || interestedIn || 'Not specified';
    const locationLabel = LOCATION_LABELS[preferredLocation] || preferredLocation || 'Not specified';
    const fullName = `${firstName} ${lastName}`;

    // Email to business
    const notifyHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
        <div style="background:#0a3d35;padding:24px 32px;border-radius:8px 8px 0 0">
          <h1 style="color:#fff;margin:0;font-size:22px">New Quote Request</h1>
          <p style="color:#a7f3d0;margin:6px 0 0">D's Outdoor Living — dsoutdoorliving.com</p>
        </div>
        <div style="background:#f9fafb;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:40%">Name</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600">${fullName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280">Category</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${productLabel}</td></tr>
            ${productName ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280">Product</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600">${productName}</td></tr>` : ''}
            <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280">Preferred Location</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${locationLabel}</td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top">Message</td><td style="padding:10px 0">${message ? message.replace(/\n/g, '<br>') : '<em style="color:#9ca3af">None</em>'}</td></tr>
          </table>
        </div>
      </div>`;

    // Auto-reply to customer
    const replyHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
        <div style="background:#0a3d35;padding:24px 32px;border-radius:8px 8px 0 0">
          <h1 style="color:#fff;margin:0;font-size:22px">We received your quote request!</h1>
          <p style="color:#a7f3d0;margin:6px 0 0">D's Outdoor Living — Arizona's Trusted Spa Dealers</p>
        </div>
        <div style="background:#f9fafb;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
          <p>Hi ${firstName},</p>
          <p>Thanks for reaching out! Our team will contact you within <strong>1 business hour</strong> to discuss your options.</p>
          <p style="margin-bottom:4px"><strong>Here's what you submitted:</strong></p>
          <table style="width:100%;border-collapse:collapse;margin-top:12px">
            <tr><td style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:40%">Category</td><td style="padding:8px 0;border-bottom:1px solid #e5e7eb">${productLabel}</td></tr>
            ${productName ? `<tr><td style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#6b7280">Product</td><td style="padding:8px 0;border-bottom:1px solid #e5e7eb;font-weight:600">${productName}</td></tr>` : ''}
            <tr><td style="padding:8px 0;border-bottom:1px solid #e5e7eb;color:#6b7280">Preferred Location</td><td style="padding:8px 0;border-bottom:1px solid #e5e7eb">${locationLabel}</td></tr>
            ${message ? `<tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Your Message</td><td style="padding:8px 0">${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb">
          <p style="color:#6b7280;font-size:14px">Questions in the meantime? Call us at <a href="tel:4809979447" style="color:#0a3d35">(480) 997-9447</a> or reply to this email.</p>
          <p style="color:#6b7280;font-size:14px;margin-bottom:0">— The D's Outdoor Living Team</p>
        </div>
      </div>`;

    const TO_ADDRESS = process.env.QUOTE_TO_EMAIL || 'jbodoia@gmail.com';
    const FROM_ADDRESS = process.env.QUOTE_FROM_EMAIL || 'onboarding@resend.dev';

    const [notifyResult, replyResult] = await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: TO_ADDRESS,
        subject: `New Quote Request — ${fullName}`,
        html: notifyHtml
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: "We received your quote request — D's Outdoor Living",
        html: replyHtml
      })
    ]);

    if (notifyResult.error || replyResult.error) {
      console.error('Resend error:', notifyResult.error || replyResult.error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Quote route error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
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

      const canonicalUrl = getCanonicalUrl(req);
      template = template.replace(
        '<!--canonical-->',
        `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
      );
      template = injectSocialUrls(template, canonicalUrl);
      template = injectSeoMeta(template, getRequestPathname(req));

      const initialData = await getInitialData(req);
      if (process.env.SSR_PREFETCH_DEBUG === 'true') {
        const pathname = getRequestPathname(req);
        res.setHeader('x-ssr-prefetch', getPrefetchHeaderValue(pathname, initialData));
        res.setHeader('x-ssr-prefetch-path', pathname);
      }
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const result = await render(url, initialData);

      if (result.redirect) {
        res.redirect(result.redirect.status, result.redirect.location);
        return;
      }

      let html = template.replace('<!--app-html-->', result.appHtml ?? '');
      html = injectInitialData(html, initialData);
      if (result.headers) {
        Object.entries(result.headers).forEach(([key, value]) => {
          res.setHeader(key, value);
        });
      }

      res.status(result.statusCode ?? 200).type('html').send(html);
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
      let template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');

      const canonicalUrl = getCanonicalUrl(req);
      template = template.replace(
        '<!--canonical-->',
        `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
      );
      template = injectSocialUrls(template, canonicalUrl);
      template = injectSeoMeta(template, getRequestPathname(req));

      const initialData = await getInitialData(req);
      if (process.env.SSR_PREFETCH_DEBUG === 'true') {
        const pathname = getRequestPathname(req);
        res.setHeader('x-ssr-prefetch', getPrefetchHeaderValue(pathname, initialData));
        res.setHeader('x-ssr-prefetch-path', pathname);
      }
      const { render } = await import('./dist/server/entry-server.js');
      const result = await render(url, initialData);

      if (result.redirect) {
        res.redirect(result.redirect.status, result.redirect.location);
        return;
      }

      let html = template.replace('<!--app-html-->', result.appHtml ?? '');
      html = injectInitialData(html, initialData);
      if (result.headers) {
        Object.entries(result.headers).forEach(([key, value]) => {
          res.setHeader(key, value);
        });
      }

      res.status(result.statusCode ?? 200).type('html').send(html);
    } catch (error) {
      res.status(500).end(String(error));
    }
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
