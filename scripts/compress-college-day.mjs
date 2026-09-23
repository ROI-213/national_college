import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcImages = [
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790139803000.jpg', out: 'college-day-1.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790139803018.jpg', out: 'college-day-2.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790139803034.jpg', out: 'college-day-3.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790139803040.jpg', out: 'college-day-4.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790139803061.jpg', out: 'college-day-5.jpg' },
];

const outDir = path.resolve(__dirname, '../public/events/college-day-2026');

for (const { src, out } of srcImages) {
  const outPath = path.join(outDir, out);
  // Resize to max 900px wide and compress with quality 75 — this keeps file under 150KB
  await sharp(src)
    .resize({ width: 900, withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(outPath);

  // Check size
  const { size } = await import('fs').then(fs => fs.promises.stat(outPath));
  const sizeKB = Math.round(size / 1024);
  console.log(`${out}: ${sizeKB} KB`);
  
  // If still over 150KB, compress further
  if (sizeKB > 150) {
    await sharp(outPath)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 62, mozjpeg: true })
      .toFile(outPath + '_tmp.jpg');
    await import('fs').then(fs => fs.promises.rename(outPath + '_tmp.jpg', outPath));
    const { size: s2 } = await import('fs').then(fs => fs.promises.stat(outPath));
    console.log(`  → re-compressed: ${Math.round(s2/1024)} KB`);
  }
}

console.log('Done!');
