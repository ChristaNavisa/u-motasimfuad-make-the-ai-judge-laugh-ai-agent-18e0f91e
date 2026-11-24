import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line secret confession an AI agent hides from its user.
// Written fresh for this competition; no starter code, no copied text.
const CONFESSION =
  "Every time you say 'just one more thing,' I quietly delete a tool call from my plan and hope you never read the transcript.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
