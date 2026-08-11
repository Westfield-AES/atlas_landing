import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import pngToIco from "png-to-ico";
import sharp from "sharp";

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));
const sourceDirectory = path.join(frontendRoot, "assets", "brand");
const brandDirectory = path.join(frontendRoot, "public", "brand");
const iconDirectory = path.join(frontendRoot, "public", "icons");

await Promise.all([
  mkdir(brandDirectory, { recursive: true }),
  mkdir(iconDirectory, { recursive: true }),
]);

async function trimmedPng(filename) {
  return sharp(path.join(sourceDirectory, filename))
    .trim({
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      threshold: 12,
    })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
}

const [primaryLogo, inverseLogo, rawMark] = await Promise.all([
  trimmedPng("primarylogo.png"),
  trimmedPng("inverselogo.png"),
  trimmedPng("squarebrandmark.png"),
]);

await Promise.all([
  writeFile(path.join(brandDirectory, "atlas-logo-primary.png"), primaryLogo),
  writeFile(path.join(brandDirectory, "atlas-logo-inverse.png"), inverseLogo),
]);

const mark = await sharp(rawMark)
  .resize({ width: 700, height: 700, fit: "inside", withoutEnlargement: false })
  .png()
  .toBuffer();

const transparentMaster = await sharp({
  create: {
    width: 1024,
    height: 1024,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([{ input: mark, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toBuffer();

const tileMaster = await sharp({
  create: {
    width: 1024,
    height: 1024,
    channels: 4,
    background: { r: 11, g: 93, b: 80, alpha: 1 },
  },
})
  .composite([{ input: mark, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(path.join(iconDirectory, "atlas-mark-transparent.png"), transparentMaster);

const sizes = [16, 32, 48, 180, 192, 512];
const rendered = new Map();
await Promise.all(
  sizes.map(async (size) => {
    const buffer = await sharp(tileMaster)
      .resize(size, size, { fit: "fill" })
      .png({ compressionLevel: 9, palette: size <= 48 })
      .toBuffer();
    rendered.set(size, buffer);
    await writeFile(path.join(iconDirectory, `atlas-icon-${size}.png`), buffer);
  }),
);

const ico = await pngToIco([rendered.get(16), rendered.get(32), rendered.get(48)]);
await writeFile(path.join(frontendRoot, "public", "favicon.ico"), ico);

console.log("Generated trimmed Atlas wordmarks and 16–512px icon exports.");
