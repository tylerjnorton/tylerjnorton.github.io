# tylerjnorton.github.io

Personal GitHub Pages site for Tyler Norton.

## Structure

- `index.html` — main landing page
- `2025site/` — current site redesign
- `hummingbird1/` — Hummingbird project
- `newtab/` — custom new tab page
- `css/`, `js/`, `fonts/`, `images/` — shared assets
- `vendor/` — third-party libraries
- `OldSite/` — archived previous site
- `LHV/`, `travel/` — misc pages

## Deployment

This repo deploys automatically to GitHub Pages on push to `master`.
Live site: https://tylerjnorton.github.io

## Git rules — IMPORTANT

NEVER run `git commit` or `git push`, and never offer to. Tyler always commits
and pushes manually (pushing deploys the live site). After making changes, just
summarize what changed in the working tree and stop. Deny rules in
`.claude/settings.json` also block these commands.

## Claude config

- `.claude/settings.json` — project permissions and settings
- `.claude/commands/` — custom slash commands (e.g. `/deploy`)
- `.claude/memory/` — project memory files
- `.claude/MEMORY.md` — memory index
