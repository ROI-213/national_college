import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const newImages = [
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790141509992.jpg', out: 'college-day-6.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790141510022.jpg', out: 'college-day-7.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790141510040.jpg', out: 'college-day-8.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790141510057.jpg', out: 'college-day-9.jpg' },
  { src: 'C:/Users/LENOVO/.gemini/antigravity/brain/4109ba09-37d6-4913-9c59-96047bf6a34a/.user_uploaded/media_1790141510079.jpg', out: 'college-day-10.jpg' },
];

const outDir = path.resolve(__dirname, '../public/events/college-day-2026');

for (const { src, out } of newImages) {
  const outPath = path.join(outDir, out);
  await sharp(src)
    .resize({ width: 1000, withoutEnlargement: true })
    .jpeg({ quality: 75, mozjpeg: true })
    .toFile(outPath);

  const { size } = await import('fs').then(fs => fs.promises.stat(outPath));
  let sizeKB = Math.round(size / 1024);
  console.log(`${out}: ${sizeKB} KB`);

  if (sizeKB > 145) {
    await sharp(src)
      .resize({ width: 900, withoutEnlargement: true })
      .jpeg({ quality: 70, mozjpeg: true })
      .toFile(outPath);
    const { size: s2 } = await import('fs').then(fs => fs.promises.stat(outPath));
    console.log(`  -> recompressed: ${Math.round(s2 / 1024)} KB`);
  }
}

console.log('All new images compressed successfully!');
