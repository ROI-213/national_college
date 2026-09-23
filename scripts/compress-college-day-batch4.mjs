import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const newImages = [
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790144065557.jpg', out: 'college-day-15.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790144065567.jpg', out: 'college-day-16.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790144065583.jpg', out: 'college-day-17.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790144065808.jpg', out: 'college-day-18.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790144065883.jpg', out: 'college-day-19.jpg' },
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

console.log('Batch 4 images compressed successfully!');
