# Bracket Buster — Letterboxd Search URL Cleaner

**Author:** Matt Skuta  
**Version:** 1.0  
**Website:** [letterboxd.com/skuta](https://letterboxd.com/skuta)

## Description

Bracket Buster is a lightweight Tampermonkey userscript that automatically fixes Letterboxd's search URLs when you when you type or copy-paste movie titles containing parentheses (e.g., years in `(YYYY)` format).

By removing the parentheses while preserving the content inside, it improves Letterboxd's search accuracy for titles like:

- `The Matrix (1999)` → `The Matrix 1999`
- `The Trial (1962)` → `The Trial 1962`
- `(500) Days of Summer (2009)` → `(500) Days of Summer 2009`

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser (Chrome, Firefox, Edge, Safari, etc).
2. Download and install the script file: **bracket-buster.user.js** (included in this repository).
3. Drag and drop into Tampermonkey which will automatically load and apply the userscript on Letterboxd search pages.

## Compatibility

- Fully compatible with all modern browsers and Tampermonkey versions.
- No special permissions or external resources required.

## License

MIT License (free to use and to share).

---

> Made by Matt Skuta to solve a decade-long frustration
