# Story Patterns

Six page architectures that cover nearly every award winner. Choose by story shape,
not by preference — the data's structure dictates the pattern. Each pattern below gives
the structural skeleton in reading order; the money shot is marked ★.

## 1. Scrollytelling essay

**Story shape:** change over time, cause-and-effect chains, "how did we get here".
**Exemplars:** This is a Teenager; Sudan famine (Reuters); burger prices (ABC).

Skeleton:
1. Full-viewport opening: headline claim + the money-shot graphic in its simplest state
2. Hook section: one specific instance (a person, a place, one burger) — prose sparse
3. ★ Sticky-graphic sequence: the chart stays pinned while 5–12 short text steps scroll
   past, each step triggering one transformation (time advances, a layer adds, the
   camera zooms, an annotation appears)
4. Release: graphic un-pins at the story's turning point; a big standalone number or
   quote lands the emotional beat
5. Second, shorter sticky sequence if the story has a second act (optional)
6. Ending: the zoom-out — what it means, what happens next, reader agency
7. Methodology + sources footer

Rules of thumb: never two consecutive hard cuts between unrelated charts inside a
sticky sequence; each step's text is ≤ 2 sentences; the graphic must be legible the
entire time text scrolls over or beside it.

## 2. Unit-visualization narrative

**Story shape:** the data is people (or discrete precious things) and the count itself
is the point. **Exemplars:** This is a Teenager; The Birdsong of Sorrow.

Skeleton:
1. One mark introduced as an individual — named, dated, made real
2. The field: all marks appear; the reader feels the quantity as a texture
3. ★ Sorting/partitioning sequence: the same marks regroup by outcome, category, or
   fate — identity is preserved across transitions (marks visibly travel, never
   teleport), so the reader can follow "their" person
4. Close-up returns to individuals in the notable clusters
5. Quiet ending; for memorial subjects, let the field sit in silence — no CTA

Rules of thumb: every mark must correspond to one real record, and say so. If n is too
large to render individually (>~5,000), show a fully-rendered sample and state the
sampling honestly rather than faking density.

## 3. Hero infographic (single-image argument)

**Story shape:** one rich comparison or correlation that fits in one composed frame;
also the right pattern for posters, social shares, and print. **Exemplars:** Toshkov's
small-states static; Jacobson's value-of-government; the napkin winners.

Skeleton (composed in one canvas, read top-to-bottom or in numbered panels):
1. Headline claim + one-line subhead
2. ★ The central graphic — 60%+ of the canvas
3. 2–4 supporting mini-panels sequenced like paragraphs (each with its own micro-title
   that is itself a claim)
4. Source line + credit in the margin

Rules of thumb: design at final aspect ratio from the first sketch; a hero infographic
is composed, not stacked. Panel reading order must survive the squint test. If it needs
scrolling to understand, it's pattern 1 or 5, not this.

## 4. Guided tour + explorable

**Story shape:** a complex system or dataset readers will want to query themselves —
but only after being taught to read it. **Exemplars:** Zoonotic Web; GOV|DNA; the t-SNE
country map.

Skeleton:
1. Headline + the full explorable shown as a teaser (dimmed / not yet interactive)
2. ★ Guided tour: 4–8 scroll or click steps that build the visualization's grammar one
   encoding at a time ("each strand is a country… each bead is an indicator…"),
   using real highlights from the data as examples
3. Hand-off moment — explicit: "now explore it yourself"
4. The live explorable: filters, search, compare; sensible default state that already
   shows something interesting
5. Curated findings strip: 3–4 preset views deep-linked ("see the outlier", "compare
   these two") for readers who won't explore
6. Methodology + data download

Rules of thumb: the explorable's default view must be a finding, not an empty prompt.
Every control needs an obvious payoff within one interaction. If you can't write the
guided tour, the encoding is too complex to ship.

## 5. Illustrated explainer

**Story shape:** a process, mechanism, or place that cameras can't fully see —
how something works, how an event unfolded in space. **Exemplars:** A Torrent of Trash;
Buildings wrapped in solid gasoline; Seeking Shadow.

Skeleton:
1. Photographic or illustrated cold open — the scene at human eye level
2. Pull back: map or isometric view locates the scene
3. ★ The mechanism diagram: illustration with annotation layers showing how the thing
   works (the balloon payload, the shade path, the cladding fire)
4. Data section: charts quantify scale/frequency/impact of what was just explained
5. Return to the human scale — a photo, a consequence, a person
6. Sources incl. photo/illustration credits

Rules of thumb: alternate altitude deliberately (eye level ↔ overhead) — it's the
pattern's engine. Illustration explains, photography testifies, charts quantify; don't
swap their jobs. Keep one consistent light direction and perspective system across all
illustrations.

## 6. Branching / choose-your-path

**Story shape:** a decision space, a taxonomy of positions, an emotional journey the
reader should walk rather than watch. **Exemplars:** I Want a Better Catastrophe.

Skeleton:
1. The whole map shown small — the reader sees the territory exists
2. ★ Step-through: one node at a time, the reader chooses; the mini-map tracks where
   they are
3. Junction payoffs: each terminal node is a real destination (a stance, a resource,
   a next action), never a dead end
4. Exit view: the full map again with the reader's path drawn on it — their journey is
   now data

Rules of thumb: paths must genuinely differ (no funnel pretending to be a choice);
always allow backtracking; the full-map view is what makes it dataviz rather than a
quiz.

## Combining patterns

Winners frequently nest: scrollytelling (1) that opens with a unit-viz field (2) and
lands in an explorable (4) is The Pudding's house recipe. Nesting is fine; the rule is
one *primary* pattern per page and one money shot — a second ★ splits the piece and
weakens both.
