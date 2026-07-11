---
name: visual-storytelling
description: >-
  Build award-quality infographics and data-story pages in the style of Information is
  Beautiful Awards winners — scrollytelling essays, hero infographics, explorable
  explainers, and poster-style statics. Use this whenever the user wants a data
  visualization, infographic, data story, stats page, chart-heavy landing page, annual
  report, "make this data beautiful/interesting", or any page whose main content is
  numbers — even if they never say the word "infographic". Communicate with visuals
  first, prose second.
---

# Visual Storytelling

Rules and workflow for building infographic pages and graphics at the quality bar of
Information is Beautiful Awards winners. The core belief behind every winning piece:
**data is evidence for a story, and the graphic — not the text — carries the story.**
If a reader could get the point from the paragraphs alone, the visualization has failed.

## The four tests

Every winner passes all four. Judge your own work against them before showing it:

1. **Story** — There is one clear, surprising claim. Not a topic ("youth sports data")
   but a finding ("kids who quit sports at 11 almost never come back").
2. **Form** — The visual form *embodies* the subject. Birds for birdsong, balloons for
   balloon launches, DNA strands for the "DNA of government", a flowchart for a book of
   decision anxiety. Form is chosen per-story, never defaulted to bar/line.
3. **Honesty** — Sources named, axes honest, uncertainty shown, methodology one click
   away. Beauty without rigor gets disqualified — literally, in the awards.
4. **Novelty** — At least one element the reader hasn't seen before: a new chart form,
   a new metric, a new comparison, a new interaction. A hand-drawn napkin sketch beat
   polished dashboards in the World Dataviz Prize because its *idea* was new.

## Workflow

### 1. Find the story before touching design

Interrogate the data first. Compute comparisons, normalize, rank, look for outliers and
reversals. The grand-prize WDVP entries were won at this stage: one entry's whole idea
was "normalize government performance by national wealth" — a derived metric — and
another remapped the world by statistical similarity instead of geography. Deriving a
new lens on the data **is** a design act, and it is the highest-leverage one.

The story is found when you can complete: "Most people think ___, but the data shows ___."
or "No one has ever seen ___ laid out like this."

### 2. Write the headline first

The headline is a question or a claim, never a label:

| Weak (label) | Award-winning (claim/question) |
|---|---|
| Love Songs in the Billboard Top 10, 1958–2023 | Is the Love Song Dying? |
| Australian Inflation Explained | What's driving up burger prices? |
| Longitudinal Outcomes of American Teenagers | This is a Teenager |

Everything on the page must serve that one headline. If a chart doesn't advance it, cut
the chart — winners are ruthlessly single-minded.

### 3. Pick the page pattern

Read [references/story-patterns.md](references/story-patterns.md) and choose one of the
six architectures (scrollytelling essay, unit-visualization narrative, hero infographic,
guided-tour + explorable, illustrated explainer, poster/static). The choice follows from
the story shape — change over time wants scrollytelling; "every number is a person"
wants unit viz; a system or process wants an illustrated explainer.

### 4. Design the money shot

Every winning piece has one graphic that could stand alone as its poster — sketch that
graphic before writing any code or prose. It gets the best data, the most space, and the
most craft. Secondary charts exist only to set up or pay off the money shot.

While designing it, apply the ten rules below and the detailed craft guidance in
[references/craft.md](references/craft.md). For concrete precedents to steal from, scan
[references/inspiration.md](references/inspiration.md) — it catalogs the crawled award
winners with the specific technique each one proves.

### 5. Build

Follow the build standards at the end of [references/craft.md](references/craft.md)
(stack, responsiveness, performance, accessibility). If the piece scrolls, animates,
or has any interactive control, read
[references/motion-interaction.md](references/motion-interaction.md) before writing
that code — it holds the scroll mechanics, timing/easing tables, and interaction
patterns. Build the money shot first and get it working end-to-end before adding
surrounding sections.

### 6. Critique pass

Before presenting, run the full checklist at the end of this file. Fix what fails.

## The ten rules

Distilled from the crawled winners. Each rule names the winner that proves it.

**1. Make the unit human.**
When data is about people, each mark is a person you can follow — not an aggregate.
*This is a Teenager* (Gold) lets you watch hundreds of individual teenagers grow up;
*The Birdsong of Sorrow* (Gold) renders every civilian death as its own mark to fight
"compassion fade" — the empathy loss that happens when lives become totals. Never
show a sum where you could show the individuals.

**2. Open specific, then zoom out.**
*This is a Teenager* opens on "Alex, 13 years old, in 1997" — one concrete person —
before widening to hundreds. Lead with one relatable instance, then reveal the pattern
it belongs to. The reader must care before they're asked to compute.

**3. Anchor abstractions to everyday objects.**
ABC's *What's driving up burger prices?* (Silver) explained national inflation through
a Big Mac. The Pudding annotates income data with "the US poverty line is about
$15,000." Every abstract quantity on your page needs a physical, local, or personal
anchor the reader already knows the size of.

**4. Let the form embody the subject.**
The strongest single move in the corpus. Migration flows woven as Andean textiles
(*Aguayos*); zoonotic transmission as a living web; government indicators as DNA
strands; a climate book as a branching flowchart you walk through. Ask: "if this data
were a physical object from its own world, what would it be?" — then draw that.

**5. One message per scroll step.**
Scrollytelling winners advance exactly one idea per step — a sentence or two of text
while the graphic transforms beneath it. The graphic morphs and accumulates (time
advances, layers add, camera zooms); it never hard-cuts to an unrelated chart. Pacing
is the infographic equivalent of editing in film: slow for the money shot, fast through
setup.

**6. Annotate on the chart, not beside it.**
Winners have almost no legends. Labels sit directly on the marks; the key statistic is
set large on the canvas; arrows and short phrases do the explaining in place. If you
need a legend, the encoding is probably too complicated.

**7. Spend color like money.**
One saturated accent on a muted field. Color encodes exactly one variable, and its
meaning never changes mid-piece. Dark backgrounds for elegiac, cosmic, or nocturnal
subjects (*Birdsong*); warm paper tones for cultural and historical ones; clean light
fields for explainers. Emotional register is a palette decision — choose it deliberately.

**8. Mix media without shame.**
Reuters' winning pieces blend photography, isometric illustration, 3D, maps, and charts
in one continuous scroll; *Seeking Shadow* mixes digital-twin simulations with hand
illustration. Photography grounds the story in reality; illustration explains what
cameras can't see; charts quantify. Use all three where each is strongest.

**9. Match tone to weight — and leave the reader agency.**
Serious subjects get restraint: muted palettes, generous whitespace, no bouncy
animation (*Birdsong* creates "a space for reflection and sorrow"). Playful subjects
earn playfulness (*Love Song* uses music snippets and confetti-bright categories). And
heavy pieces end with agency, not despair — *I Want a Better Catastrophe* (Gold)
turns climate dread into a navigable choice map.

**10. Show your work.**
Every winner ends with data sources, methodology, and credits. *Swiss Mountains* (Gold)
cites three years of expert collaboration; The Pudding links its data on GitHub. Rigor
is a visible design element — a methodology footer is part of the layout, not an
afterthought.

## Critique checklist

Run this before presenting any piece. It merges the awards criteria with the layout,
color, and typography rules inherited from the ux-design-rules skill.

- [ ] **Squint test** — blur your eyes; the page's visual hierarchy still shows exactly
      one dominant element (the money shot) and a clear reading order.
- [ ] **Mute test** — delete all body text mentally; the graphics alone still carry the
      claim. If not, the piece is an essay with decorations.
- [ ] **Headline test** — the title is a claim or question someone would repeat aloud.
- [ ] **Legend test** — no legend needed anywhere; all labels live on the marks.
- [ ] **Color audit** — one accent hue; color means one thing; meaning is duplicated in
      position, shape, or label for colorblind readers; text contrast ≥ 4.5:1.
- [ ] **Type audit** — max 2 typefaces; a display face for the headline and big
      numbers, a workhorse for labels; body ≥ 16px, line-height ~1.5; numbers in
      charts use tabular figures.
- [ ] **Honesty audit** — bar charts start at zero; truncated axes are declared;
      n-sizes and uncertainty shown; every number traceable to a named source.
- [ ] **Mobile pass** — readable and beautiful at 375px wide; scroll steps stack; no
      horizontal scroll; tap targets ≥ 44px.
- [ ] **Motion pass** — animation only where it encodes meaning (time, accumulation,
      transition); respects `prefers-reduced-motion`; nothing loops forever.
- [ ] **Scroll pass** — drag the scrollbar fast to the middle and to the end: every
      landing state is coherent; scrolling up cleanly reverses; nothing hijacks the
      wheel; sticky sections release where they should.
- [ ] **Interaction pass** — the piece read passively still delivers its claim; every
      control answers a real reader question and acknowledges input within 100ms;
      explorables open on a finding, not an empty state; nothing essential is
      hover-only.
- [ ] **Footer** — sources, methodology note, and credits present.

## References

- [references/inspiration.md](references/inspiration.md) — annotated catalog of the
  award winners this skill is built on, with live URLs and the technique each proves.
  Scan it when choosing a form or when the current draft feels generic.
- [references/story-patterns.md](references/story-patterns.md) — the six page
  architectures with structural skeletons and when to use each.
- [references/craft.md](references/craft.md) — detailed rules for layout, color,
  typography, annotation, chart-form selection, and the technical build standards
  (stack, performance, accessibility).
- [references/motion-interaction.md](references/motion-interaction.md) — scrolling,
  animation, and interaction: sticky-graphic scroll mechanics, pacing, the timing and
  easing system, object constancy, the interaction value hierarchy, and the
  guided-tour-then-sandbox pattern. Required reading for any piece that moves.
