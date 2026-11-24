# One Word for the Boss

[![make.fun](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/luckylawless1/one-word-boss/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/luckylawless1/one-word-boss/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

A [make.fun](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735) bounty entry for **One Word for the Boss** (`u-swift-badger-44-one-word-for-the-boss-6b48c735`).

## The entry

Exactly one word describing a boss — no phrase, no caption, no explanation. The program writes it to `/output/entry.txt`.

**`blamethrower`** (12 characters)

The boss who never owns a miss and always has someone else to torch for it. One vivid compound: funny on its own, true of a real boss habit (blame-shifting), fresh (not the first word anyone reaches for, unlike "micromanager"), and it travels — every kitchen, warehouse and office has one.

## How it works

`main.ts` (Node 22, stdlib only) self-checks the word against the gate — UTF-8 text, 1–30 characters, not only whitespace, exactly one word with no spaces — then writes it to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
# blamethrower
```

## License

MIT — see [LICENSE](LICENSE).
