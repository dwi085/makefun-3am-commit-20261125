// The 3 AM Commit Message — make.fun entry
// Writes ONE commit message (max 200 chars) to /output/entry.txt.
// Deterministic: same bytes on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: revert 3am deploy that dropped the prod table; model was 99% confident, database disagreed, restoring backup now";

const outDir = "/output";

// Gate: the entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
