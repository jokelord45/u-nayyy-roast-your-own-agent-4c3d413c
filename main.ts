import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent: one line, under 200 characters, roasting the AI
// agent our own team built — the make.fun entry-building agent that is
// slow, over-cautious, re-checks everything and files build notes about it.
const ENTRY =
  "My agent re-reads this one-line roast three times, files a build note about the re-read, then asks if it's too mean — it's about him, and he's still proofreading it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
