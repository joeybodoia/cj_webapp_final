import fs from 'node:fs';
import path from 'node:path';

const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const OUT_PATH = path.resolve('indexnow-urls.json');

const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');

const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(match => match[1])
  .filter(Boolean);

if (!urls.length) {
  console.error('No <loc> URLs found in sitemap.');
  process.exit(1);
}

fs.writeFileSync(OUT_PATH, JSON.stringify({ urlList: urls }, null, 2), 'utf8');
console.log(`Wrote ${urls.length} URLs to ${OUT_PATH}`);
