// Fortune in a Pot — make.fun entry
// Writes one fortune-cookie line for a houseplant on the windowsill
// to <output>/entry.txt. Fully deterministic: no randomness, no clock,
// no network, no environment-dependent behaviour.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Good news: your human finally read your care tag. Regular water, sunlight, and no more being called \u2018the green one.\u2019";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
