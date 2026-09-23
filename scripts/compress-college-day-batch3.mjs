import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const newImages = [
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790143964892.jpg', out: 'college-day-11.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790143964914.jpg', out: 'college-day-12.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790143964926.jpg', out: 'college-day-13.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790143964955.jpg', out: 'college-day-14.jpg' },
];

const outDir = path.resolve(__dirname, '../public/events/college-day-2026');

for (const { src, out } of newImages) {
  const outPath = path.join(outDir, out);
  await sharp(src)
    .resize({ width: 1050, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(outPath);

  const { size } = await import('fs').then(fs => fs.promises.stat(outPath));
  let sizeKB = Math.round(size / 1024);
  console.log(`${out}: ${sizeKB} KB`);

  if (sizeKB > 145) {
    await sharp(src)
      .resize({ width: 950, withoutEnlargement: true })
      .jpeg({ quality: 70, mozjpeg: true })
      .toFile(outPath);
    const { size: s2 } = await import('fs').then(fs => fs.promises.stat(outPath));
    console.log(`  -> recompressed: ${Math.round(s2 / 1024)} KB`);
  }
}

console.log('Batch 3 images compressed successfully!');
