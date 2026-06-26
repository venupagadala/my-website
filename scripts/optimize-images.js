/* eslint-disable */
// One-off image optimization script.
// Resizes oversized source images and re-encodes them as efficient WebP.
// Originals are preserved in src/assets/images/_originals/.
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const imagesDir = path.join(__dirname, "..", "src", "assets", "images");
const originalsDir = path.join(imagesDir, "_originals");

async function run() {
  // Backgrounds: displayed full-bleed, 1920px wide is plenty for hero usage.
  const jobs = [
    {
      input: path.join(originalsDir, "bg-light.webp"),
      output: path.join(imagesDir, "bg-light.webp"),
      width: 1600,
      quality: 50,
      // Light theme page background (.light-mode background-color).
      flatten: "#f8f9fa",
    },
    {
      // Convert the heavy PNG into WebP as well.
      input: path.join(originalsDir, "bg-dark.png"),
      output: path.join(imagesDir, "bg-dark.webp"),
      width: 1600,
      quality: 50,
      // Dark theme page background (.main-container background-color).
      flatten: "#0d1116",
    },
    {
      // Profile photo renders at ~150-200px; 400px covers 2x displays.
      input: path.join(originalsDir, "dp.webp"),
      output: path.join(imagesDir, "dp.webp"),
      width: 400,
      quality: 80,
    },
  ];

  for (const job of jobs) {
    if (!fs.existsSync(job.input)) {
      console.warn("Skipping missing input:", job.input);
      continue;
    }
    const before = fs.statSync(job.input).size;
    const pipeline = sharp(job.input).resize({
      width: job.width,
      withoutEnlargement: true,
    });
    // Background images don't need transparency; flattening onto the matching
    // theme page color drops the alpha channel (so the lossy encoder compresses
    // far more aggressively) while preserving the original look.
    if (job.flatten) {
      pipeline.flatten({ background: job.flatten });
    }
    await pipeline
      .webp({ quality: job.quality, alphaQuality: 0, effort: 6 })
      .toFile(job.output + ".tmp");
    fs.renameSync(job.output + ".tmp", job.output);
    const after = fs.statSync(job.output).size;
    const meta = await sharp(job.output).metadata();
    console.log(
      `${path.basename(job.output)}: ${(before / 1024).toFixed(0)}KB -> ` +
        `${(after / 1024).toFixed(0)}KB  (${meta.width}x${meta.height})`
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
