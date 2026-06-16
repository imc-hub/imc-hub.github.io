import { readdirSync, rmSync } from 'fs';
import { join } from 'path';

const outDir = join(process.cwd(), 'out');

// Clean __next.* RSC junk from route subdirectories.
// Next.js static export emits both:
//   - out/<route>.html        ← actual prerendered HTML (keep)
//   - out/<route>/__next.*    ← RSC metadata/junk (delete)
// We only delete the __next.* files inside route folders — never the
// folder itself (which may still hold server.js or other assets) and
// never the root-level .html files.
const JUNK_SUBDIRS = [
  'about',
  'academy',
  'assessment',
  'contact',
  'cookies',
  'digital-solutions',
  'faq',
  'privacy',
  'sitemap',
  'terms',
  '_not-found',
];

for (const subdir of JUNK_SUBDIRS) {
  const dirPath = join(outDir, subdir);
  let entries;
  try {
    entries = readdirSync(dirPath);
  } catch {
    continue; // directory doesn't exist — skip
  }

  let removedCount = 0;
  for (const entry of entries) {
    if (entry.startsWith('__next.')) {
      rmSync(join(dirPath, entry), { recursive: true, force: true });
      console.log(`Removed junk: /${subdir}/${entry}`);
      removedCount++;
    }
  }

  // If every entry was junk, remove the now-empty directory too
  if (removedCount === entries.length) {
    rmSync(dirPath, { recursive: true, force: true });
    console.log(`Removed empty dir: /${subdir}`);
  }
}

console.log('Post-build cleanup complete.');
