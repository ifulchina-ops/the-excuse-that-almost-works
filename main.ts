// SPDX-License-Identifier: 0BSD
// The Excuse That Almost Works — program/v1 entry.
// Writes one line, at most 20 words, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// One text, sent in a hurry: a boiler leak (specific, visual, mundane)
// stacked with a second small misfortune (the plumber stuck in traffic),
// then a concrete return time. Two things going wrong at once is exactly
// why a tired manager would almost believe it — and almost is the game.
const EXCUSE =
  "Sorry boss, my boiler leaked all over the kitchen and the plumber's stuck in traffic. I'll be in after lunch.";

// The brief caps the line at 20 words, one line of plain text: refuse to
// ship a line that breaks the gate rather than fail silently in the sandbox.
const WORDS = EXCUSE.trim().split(/\s+/);
if (WORDS.length < 1 || WORDS.length > 20 || EXCUSE.includes("\n")) {
  throw new Error(`excuse must be 1-20 words, got ${WORDS.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

// Also print it: the entry is a line to be read, so the run shows it.
console.log(EXCUSE);
