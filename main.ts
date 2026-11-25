// makefun-describe-ex — "Describe Your Ex in One Word"
// https://make.fun/c/u-puan-describe-your-ex-in-one-word-9fc6ebe7
//
// The entry is one word: "Predecessor".
// Corporate-speak for the person who held the job before you — the
// previous holder of the "partner" position. It lands as a verdict on an
// ex at a glance: the ex was not the one, just the one before the one.
// One word, spelled correctly, no punctuation tricks, and the joke
// arrives with the word itself.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Predecessor";

// Gate check, mirroring the competition's own gate: 1–111 characters,
// exactly one word, no whitespace at all. Fail loudly instead of
// shipping an invalid entry.
if (!/^\S{1,111}$/.test(WORD)) {
  console.error(`invalid entry word: ${JSON.stringify(WORD)}`);
  process.exit(1);
}

// The grader runs this program in a sandbox and reads /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Also print the word to stdout, byte-identical to the file.
process.stdout.write(WORD);
