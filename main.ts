// One Word for the Boss — make.fun competition
// u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// Writes exactly one word to /output/entry.txt.
// Gate: UTF-8 text, 1-30 characters, not only whitespace, single word.
//
// The word: "blamethrower" — the boss who never owns a miss and always
// has someone else to torch for it. One vivid compound, funny on its own,
// true of a real boss habit (blame-shifting), fresh (not the first word
// anyone reaches for, unlike "micromanager"), and it travels: every
// kitchen, warehouse and office has one.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "blamethrower";

// Self-check against the gate before writing: UTF-8 text, 1-30 chars,
// not only whitespace, and a single word (no spaces at all).
const chars = [...WORD].length;
if (chars < 1 || chars > 30) {
  throw new Error(`Gate fail: word is ${chars} chars, must be 1-30`);
}
if (!WORD.trim() || /\s/.test(WORD)) {
  throw new Error("Gate fail: entry must be exactly one word, no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${WORD.length} chars to /output/entry.txt: ${WORD}`);
