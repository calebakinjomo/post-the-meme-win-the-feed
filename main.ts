import { copyFileSync, mkdirSync } from "node:fs";
// Ship the meme post to the feed: copy POST.json into the make.fun output folder.
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(__dirname, "POST.json"), join(outDir, "POST.json"));
console.log("Copied POST.json to", outDir);
