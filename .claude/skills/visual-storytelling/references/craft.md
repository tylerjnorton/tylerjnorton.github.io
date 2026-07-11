# Craft Rules

Detailed visual and technical standards. These adapt the ux-design-rules skill's color
and typography systems to editorial infographic work, plus chart-form, annotation,
motion, and build rules derived from the award winners.

## Layout

- Compose around the money shot: it gets ≥ 60% of the viewport when on screen, and the
  page's whitespace budget is spent making it breathe.
- Grayscale first. Lay out the entire page in grays before any color — this forces
  hierarchy to come from size, weight, and position, and makes the accent color land
  harder when it arrives.
- Text columns stay at 55–75 characters per line; graphics may break the text column
  and go full-bleed. Alternating column-width prose with full-bleed graphics is the
  basic rhythm of every scrollytelling winner.
- Whitespace is pacing. Big vertical gaps before a reveal slow the reader down at
  exactly the moments that matter. Cramped sections read as unimportant.
- Standalone numbers are layout elements: when a single figure is the point ("$15,000",
  "1 in 4"), set it display-size on its own line, not buried in a sentence.

## Color

- **60-30-10, editorialized:** ~60% field (paper white, warm off-white, or near-black),
  ~30% structural grays and muted data marks, ~10% one saturated accent. The accent is
  reserved for the data that carries the story — never for decoration, never for UI
  chrome.
- Color encodes exactly one variable per piece, and its meaning never changes between
  charts. If the taxonomy is the story (love-song types), the palette *is* the
  taxonomy: introduce each color with its category and keep the mapping to the end.
- Categorical palettes: ≤ 7 hues, tuned to similar lightness so no category shouts;
  sequential data gets a single-hue ramp; diverging data gets two hues meeting at a
  meaningful neutral midpoint (zero, average, target).
- Pick the field for emotional register before picking hues: near-black fields for
  elegiac, cosmic, nocturnal subjects; warm paper for historical and cultural; clean
  white for explanatory and civic. This choice does more emotional work than any hue.
- Grays are for context data (the "everyone else" lines); the accent is for the
  protagonist. A chart where everything is colored has no protagonist.
- Accessibility: meaning never rides on hue alone — duplicate it in position, shape,
  pattern, or direct label. Text contrast ≥ 4.5:1 (3:1 for display sizes). Test the
  palette with a colorblind simulator; deuteranopia alone is ~5% of male readers.

## Typography

- Two typefaces maximum: one display face with character for the headline, section
  titles, and standalone big numbers; one workhorse (usually a sans) for body,
  labels, and annotations. The display face is the piece's voice — choose it to match
  tone (a serif for gravitas, a geometric sans for systems and tech, rounded forms for
  playful subjects) and never let it touch axis labels.
- Body ≥ 16px with line-height ≈ 1.5. Chart labels and annotations 12–14px with
  looser letter-spacing; headlines get tighter letter-spacing and line-height ≈ 1.1.
- All numerals in charts, tables, and tickers use tabular (monospaced) figures so
  digits align and don't jitter during animation — `font-variant-numeric: tabular-nums`.
- Hierarchy comes from size + weight + color together, stepped clearly: headline →
  section title → body → caption/label. If two levels are distinguishable only by
  1–2px, merge them.
- In data tables: left-align text, right-align quantities, match header alignment to
  its column, never center-align data columns.

## Chart forms

- Default forms (bar, line, scatter) are earned only after asking the embodiment
  question: "if this data were an object from its own world, what would it look like?"
  When the answer is strong (balloons, birds, DNA, textiles, a jump arc), build the
  custom form. When it's forced, a beautifully executed standard form beats a strained
  metaphor — Vallandingham placed at WDVP with disciplined small multiples.
- Custom form checklist: position/length/angle still encode the primary quantity
  (decoration rides on top of honest geometry, never replaces it); the form is
  learnable in one short caption; it stays honest at the data's real range.
- Comparison across many entities → small multiples with shared scales, not one
  spaghetti chart. Composition over time → stacked area/stream. Flows between
  categories → sankey/chord. Individual records that matter → unit viz. Relationship
  structure → network, but only with a guided tour (see story-patterns pattern 4).
- One derived metric is worth ten charts: normalize, index to 100, rank-change, or
  per-capita transforms often *are* the story. Compute before you draw.
- Honesty constraints are absolute: bar/area encodings start at zero; line charts may
  truncate but must say so; 3D perspective on quantitative encodings is banned; show n
  and uncertainty when the data has any.
- Dual axes: heavy bias against — two panels or indexing both series to 100 is almost
  always clearer, and arbitrary scale choices can manufacture correlations that aren't
  there. Reach for one only when the two series have a real, explainable relationship
  the reader must see in one frame (e.g., price and volume of the same thing). If you
  do: color each axis to match its series, label both axes on the chart, and pick
  scales on defensible grounds (shared zero, or a stated reference point) — never
  tuned to make the lines touch.

## Annotation

- Annotation is the narrator. Winners read as a guided conversation happening *on* the
  graphic: short phrases with a light leader line, sitting exactly where the reader's
  eye is at that beat.
- No legends. Label series directly at line-ends or on marks. If direct labeling is
  impossible, the encoding is too complex — simplify it instead of adding a legend.
- Annotate the *why*, not the *what*: "2020 lockdown — leagues canceled" beats
  "sharp decrease". The reader can see the shape; they can't see the cause.
- Every abstraction gets an anchor annotation the reader knows the size of: poverty
  line, minimum wage, a Big Mac, the length of a football field, their own city.
- Axis labels are captions of last resort — winners often drop axes entirely and label
  a few reference gridlines inline ("50%", "median").

## Motion & interaction

Covered in depth in [motion-interaction.md](motion-interaction.md) — scroll mechanics
(the scroller contract, sticky-graphic engineering, pacing, mobile), animation craft
(the three jobs of animation, object constancy, timing/easing tables, accessibility),
and interaction design (the value hierarchy, guided-tour-then-sandbox, defaults,
microinteraction feedback, discoverability). Read it before building anything that
scrolls, moves, or responds. The three laws that summarize it:

- Scroll position belongs to the reader — scroll is the story's clock, never hijacked.
- Animation encodes meaning (time, accumulation, identity moving between groups) or it
  gets cut.
- Interaction deepens the story but never gates it — the piece read passively must
  still deliver its claim.

## Tone calibration

- Weigh the subject before styling: memorial and harm data get muted palettes, slower
  motion, silence where a lesser piece would put confetti. Playful subjects earn
  saturated palettes, springy easing, jokes in annotations. Mismatched tone is the
  most common quality failure in amateur infographics — it reads instantly.
- For heavy subjects, end with agency: what changed, what works, what the reader can
  do. For light subjects, end with the surprise restated in one line the reader will
  quote to someone else.

## Build standards

- Stack for this site (static GitHub Pages): single self-contained HTML page per
  piece; vanilla JS + D3 (via CDN) for data graphics; scrollama (CDN) or a hand-rolled
  IntersectionObserver for scroll steps; SVG for charts (Canvas only above ~2,000
  animated marks); CSS custom properties for the palette so theming stays in one block.
- Mobile is the primary rendering: design charts at 375px first, enhance upward.
  Sticky-graphic layouts become graphic-above/steps-below on narrow screens. Tap
  targets ≥ 44px. Test the piece on a real phone width before calling it done.
- Performance: inline critical CSS; lazy-load below-the-fold images and heavy data;
  preprocess data to the minimal JSON the page needs (no shipping raw CSVs to the
  client); target < 1.5s to first meaningful paint of the opening graphic — the money
  shot is the LCP element, treat it that way.
- Accessibility: semantic heading order; every chart gets an `aria-label` or visually
  hidden summary stating its takeaway in one sentence; keyboard access for any control;
  `prefers-reduced-motion` honored; data table fallback (or download link) for complex
  graphics.
- Footer block on every piece: data sources with links, one-paragraph methodology,
  credits, and last-updated date. Match the winners: rigor is visible.
