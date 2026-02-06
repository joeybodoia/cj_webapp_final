import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const routesFile = path.join(repoRoot, 'src', 'routes.tsx');
const sitemapOut = path.join(repoRoot, 'public', 'sitemap.xml');

const canonicalHost = process.env.CANONICAL_HOST || '';
const canonicalProtocol = process.env.CANONICAL_PROTOCOL || 'https';
const siteUrl = (
  process.env.SITE_URL ||
  (canonicalHost ? `${canonicalProtocol}://${canonicalHost}` : 'https://dsoutdoorliving.com')
).replace(/\/+$/, '');
const lastmod = new Date().toISOString().slice(0, 10);

const routesSource = fs.readFileSync(routesFile, 'utf8');
const routeMatches = [...routesSource.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map(
  match => match[1]
);

const staticRoutes = routeMatches.filter(route => !route.includes(':') && !route.includes('*'));
const uniqueRoutes = Array.from(new Set(staticRoutes));

if (!uniqueRoutes.includes('/')) {
  uniqueRoutes.unshift('/');
}

const getMeta = route => {
  if (route === '/') {
    return { changefreq: 'weekly', priority: '1.0' };
  }
  if (route === '/locations') {
    return { changefreq: 'monthly', priority: '0.7' };
  }
  return { changefreq: 'weekly', priority: '0.8' };
};

const urlEntries = uniqueRoutes
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))
  .map(route => {
    const { changefreq, priority } = getMeta(route);
    const loc = `${siteUrl}${route}`;

    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>'
    ].join('\n');
  })
  .join('\n');

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlEntries,
  '</urlset>',
  ''
].join('\n');

fs.writeFileSync(sitemapOut, xml, 'utf8');

console.log(`Sitemap written to ${path.relative(repoRoot, sitemapOut)} with ${uniqueRoutes.length} routes.`);
