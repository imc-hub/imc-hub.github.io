import { readdirSync, rmSync, statSync } from 'fs';
import { join } from 'path';

const outDir = join(process.cwd(), 'out');

// Only clean __next.* RSC junk from subdirectories, leave root files and server.js alone
const subdirs = ['about', 'contact', 'privacy', 'terms', '_not-found'];

for (const subdir of subdirs) {
  const dirPath = join(outDir, subdir);
  try {
    const entries = readdirSync(dirPath);
    for (const entry of entries) {
      if (entry.startsWith('__next.')) {
        rmSync(join(dirPath, entry));
        console.log(`Removed junk: /${subdir}/${entry}`);
      }
    }
    // Remove directory if now empty
    const remaining = readdirSync(dirPath);
    if (remaining.length === 0) {
      rmSync(dirPath, { recursive: true });
      console.log(`Removed empty dir: /${subdir}`);
    }
  } catch {
    // Directory doesn't exist, skip
  }
}

console.log('Post-build cleanup complete.');
