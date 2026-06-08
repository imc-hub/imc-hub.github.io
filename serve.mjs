import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'out');
const PORT = 8080;

const server = http.createServer((req, res) => {
  let pathname = new URL(req.url, `http://localhost`).pathname;

  // Strip trailing slash
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Try exact path, then .html, then /index.html
  const candidates = [
    path.join(OUT_DIR, pathname),
    path.join(OUT_DIR, pathname + '.html'),
    path.join(OUT_DIR, pathname, 'index.html'),
  ];

  let filePath = null;
  for (const candidate of candidates) {
    // Prevent path traversal: resolved path must stay within OUT_DIR
    const resolved = path.resolve(candidate);
    if (!resolved.startsWith(path.resolve(OUT_DIR) + path.sep) && resolved !== path.resolve(OUT_DIR)) {
      continue;
    }
    if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
      filePath = resolved;
      break;
    }
  }

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    const notFound = path.join(OUT_DIR, '404.html');
    res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : '<h1>404 Not Found</h1>');
    return;
  }

  const ext = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
  };

  res.writeHead(200, {
    'Content-Type': mimeTypes[ext] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'",
  });
  res.end(fs.readFileSync(filePath));
});

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
