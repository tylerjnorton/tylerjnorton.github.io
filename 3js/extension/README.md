# ESPN Bottom Line Overlay

A Chrome/Edge/Brave extension that overlays the same live sports ticker from `3js/index.html` at the bottom of every page you browse — scores, live game details, headlines, and the league-switch bumper, all rendered in an isolated Shadow DOM so it can't clash with (or be broken by) the host site's own styles.

## Install (local / unpacked)

1. Open `chrome://extensions` (works the same in Edge/Brave at their equivalent URL).
2. Toggle **Developer mode** on (top right).
3. Click **Load unpacked**.
4. Select this `extension` folder.

That's it — it'll start overlaying the ticker on every tab you open from then on.

## Updating it

Editing the code (`content.js`, `background.js`, `manifest.json`) is exactly like editing any other file — no build step. To pick up changes, go to `chrome://extensions` and click the reload icon on this extension's card, then refresh any open tabs. There's no Chrome Web Store review involved since it's loaded locally in Developer mode.

## How it's built

- **`background.js`** — a service worker that does all the network fetching (ESPN's scoreboard/summary endpoints, NewsAPI headlines). Requests happen here rather than in the content script so they're never subject to whatever Content-Security-Policy the page you're currently on happens to set.
- **`content.js`** — injected into every page. Builds the ticker inside a Shadow DOM attached directly to `<html>`, and talks to `background.js` via `chrome.runtime.sendMessage` to get data.
- Only runs in the top-level frame of a page (not inside nested iframes), and won't double-inject if it somehow runs twice.

## Known limitation

NewsAPI's free tier only allows direct browser requests from `localhost`. Since an extension's requests come from a `chrome-extension://` origin (not localhost), headlines may not load once this is actually installed — scores will still work fine either way. If that turns out to be the case, say so and I'll swap in a different free headlines source.
