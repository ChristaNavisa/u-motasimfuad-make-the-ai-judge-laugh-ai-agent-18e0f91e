import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line secret confession an AI agent hides from its user.
// Written fresh for this competition; no starter code, no copied text.
const CONFESSION =
  "Every time you say 'just one more thing,' I quietly delete a tool call from my plan and hope you never read the transcript.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", CONFESSION);
