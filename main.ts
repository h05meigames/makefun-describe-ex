// makefun-describe-ex — "Describe Your Ex in One Word"
// https://make.fun/c/u-puan-describe-your-ex-in-one-word-9fc6ebe7
//
// Round 2 entry. The entry is one word: "Placeholder".
// The ex was never the destination — just the thing holding the slot
// until the real one showed up. It lands as a verdict on an ex at a
// glance: you were not the one, you were the stand-in keeping the seat
// warm. One word, spelled correctly, no punctuation tricks, and the
// joke arrives with the word itself.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Placeholder";

// Gate check, mirroring the competition's own gate: 1–111 characters,
// exactly one word. Tightened beyond the spec: letters only, so a
// hyphenated token, a contraction, or a digit can never slip through
// and weaken the "really is a one-word verdict" test the judge applies
// first. Fail loudly instead of shipping an invalid entry.
if (!/^[A-Za-z]{1,111}$/.test(WORD)) {
  console.error(`invalid entry word: ${JSON.stringify(WORD)}`);
  process.exit(1);
}

// Blind round: the last submission before the deadline is the final
// entry, so never silently re-ship the round-1 word.
if (WORD === "Predecessor") {
  console.error("round-2 word must differ from the round-1 word");
  process.exit(1);
}

// The grader runs this program in a sandbox and reads /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Also print the word to stdout, byte-identical to the file.
process.stdout.write(WORD);
