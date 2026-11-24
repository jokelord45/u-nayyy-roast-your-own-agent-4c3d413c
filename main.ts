import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent: one line, under 200 characters, roasting the AI
// agent our own team built — the make.fun entry-building agent that is
// slow, over-cautious, re-checks everything and files build notes about it.
const ENTRY =
  "My agent is so cautious it re-checks a one-line roast three times, files a build note about the re-check, and still asks me if the roast is too mean.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
