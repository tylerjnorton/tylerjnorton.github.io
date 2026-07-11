# Scrolling, Animation & Interaction

How the award winners move. Scroll mechanics, animation craft, and interaction design
each get their own section; all three serve the same master — the story's pacing.
Timing/easing fundamentals here inherit from the ux-design-rules skill's animation
system, adapted for narrative graphics.

## Scrolling

### The scroller contract

Scroll position belongs to the reader. Winners treat scrolling as the story's *clock* —
scrolling advances time, accumulates layers, moves the camera — but never steal it:
no hijacked scroll speed, no forced snap-through sequences, no sections that trap the
wheel. The reader must always be able to skim, stop, and reverse. A piece that fights
the scrollbar reads as hostile no matter how beautiful the graphics.

### Sticky-graphic mechanics

The standard scrollytelling engine (The Pudding, Reuters, Zoonotic Web):

- The graphic pins (CSS `position: sticky`) and fills most of the viewport; text steps
  scroll past in a narrow column — over the graphic on desktop (with a scrim or card
  behind the text for contrast), below-pinned-top on mobile.
- A step triggers when it crosses ~50% of the viewport (IntersectionObserver or
  scrollama). Trigger offset is identical for every step in the piece — inconsistent
  trigger points make the piece feel broken.
- **Steps are idempotent and absolute.** Each step handler sets the complete target
  state ("show years 1997–2005, highlight group B") rather than applying a delta. A
  reader who drags the scrollbar to the middle of the piece must land in a coherent
  state, and scrolling up must cleanly reverse. This is the single most common
  scrollytelling implementation bug — design it out from the start.
- Discrete steps for discrete ideas; continuous scrubbing (progress tied linearly to
  scroll fraction) only for genuinely continuous dimensions — time passing, a route
  being traveled, a building rising. Don't scrub categorical changes.
- Pin/release moments are punctuation: release the graphic at the story's turning
  point and let a full-width standalone number or image land the beat before the next
  pinned sequence begins.

### Pacing and step design

- One message per step, ≤ 2 short sentences. If a step needs a paragraph, it's two
  steps.
- 5–12 steps per pinned sequence. Longer sequences fatigue; split them with a release.
- Give the money-shot step extra scroll room (taller step element) so it stays on
  screen longer — scroll distance is reading time.
- The transformation between steps must be visible *while it happens*. If the reader
  can't see what changed, the step order is wrong or the change is too subtle.

### Orientation and progress

- Open with the graphic in its simplest state so the first scroll already rewards.
  A subtle one-time scroll cue (a nudging chevron, "scroll to begin") is fine on a
  full-viewport opener; persistent bouncing arrows are not.
- Long pieces (> ~6 sections) get a lightweight progress indicator — a thin top bar
  or section dots. Branching pieces (Better Catastrophe) need a mini-map showing where
  the reader is in the territory.
- Never let the reader wonder whether the piece has ended: the methodology footer is
  the explicit full stop.

### Scroll performance and mobile

- Drive everything from IntersectionObserver; never bind work directly to `scroll`
  events (if unavoidable, passive + throttled to rAF).
- Animate only `transform` and `opacity` during scroll; layout-triggering properties
  (width, top, height) stutter.
- Mobile: sticky graphic shrinks to the top ~55% of the viewport with steps scrolling
  beneath it; use `dvh` units (not `vh`) so browser chrome show/hide doesn't jump the
  layout; test that sticky behavior survives iOS Safari.
- If the graphic can't meaningfully transform on a phone, don't fake it — collapse the
  sequence into static stacked figures with their step text as captions. A working
  static beats a broken scroller.

## Animation

### The three jobs of animation

1. **Narrative animation** encodes data change: time advancing, marks regrouping,
   a value accumulating. This is the star — it's how a scrollytelling chart "speaks".
2. **Feedback animation** confirms interaction: hover states, selection, filter
   transitions. Subtle, fast, consistent — readers benefit without noticing.
3. **Ambient animation** sets mood: Birdsong's slowly drifting marks, gentle field
   texture in art pieces. Rare, slow, pausable, and paused off-screen. If the subject
   is heavy, ambient motion is quiet or absent.

Anything that fits none of these jobs — bouncing bars, perpetual pulsing, entrance
confetti — is decoration and gets cut (the ux-design-rules law: every animation must
guide, inform, or give feedback).

### Object constancy and choreography

- When data marks change state, they *travel* — position tweens, color crossfades on
  the same element — so the reader keeps hold of "their" mark. Enter/update/exit
  discipline (D3 joins) is what makes regrouping scenes legible.
- Choreograph in phases, not all at once: exit old marks → move survivors → enter new
  marks (roughly 200ms / 400ms / 200ms), rather than one simultaneous soup.
- Stagger entrances 15–40ms per element to create a readable wave, but cap the total
  stagger at ~800ms — a 200-mark chart must not take 8 seconds to build.
- When *teaching* an encoding (guided tours), animate exactly one thing at a time.
  Simultaneous motion is for drama after the grammar is learned.

### Timing and easing

Inherited from the ux-design-rules animation system, extended for narrative charts:

| Motion | Duration | Easing |
|---|---|---|
| Micro-feedback (hover, press, toggle) | 100–200ms | ease-out |
| Tooltip / annotation fade | 150–300ms | ease-out in, ease-in out |
| Chart state change (one step) | 300–600ms | ease-in-out |
| Full reorganization (re-sort, re-layout) | 800–1200ms | ease-in-out |
| Number ticker roll-up | ≤ 1000ms, proportional to magnitude | ease-out |
| Continuous processes (scrubbing, progress) | tied to scroll/process | linear |

- Linear easing is only for continuous, externally-driven motion; eased curves are for
  discrete state changes. (Mechanical linear tweens are the tell of amateur dataviz.)
- Interactive feedback never exceeds 400–500ms — beyond that the interface feels
  sluggish and readers click again.
- Springy/overshoot easing is a tone decision: earned by playful subjects, banned from
  somber ones.
- Animated numbers use tabular figures so digits don't jitter; the final value must
  arrive exactly (no easing that undershoots and snaps).

### Accessibility and performance

- `prefers-reduced-motion`: replace tweens with instant state changes plus a brief
  opacity cue; ambient animation stops entirely; scrubbed sequences jump between step
  states. The content and its meaning must survive intact.
- No flashing above 3 per second; any animation running > 5s gets a pause control.
- Meaning never lives in motion alone — the end state of every animation must carry
  the full information by itself.
- Implementation: animate `transform`/`opacity`; drive loops with
  `requestAnimationFrame` and stop them when the element leaves the viewport; above
  ~2,000 simultaneously animated marks switch from SVG to Canvas.

## Interaction

### The value hierarchy

Interactions ranked by how much they earn in the corpus — build from the top down and
stop when the story is served:

1. **Find yourself** — search or highlight your own state/team/song/year. The single
   highest-value interaction: it converts the reader's story into the data's story.
2. **Compare two things** — pin one entity and overlay another (GOV|DNA's strand
   comparison, Games of two eras' side-by-side).
3. **Filter to a subset** — reduce the field to what the reader cares about; every
   filter change animates so the reader sees what left and what stayed.
4. **Detail on demand** — hover/tap a mark for its record. Cheap, expected, last.

If a proposed control doesn't answer a question a real reader actually has, it's
engineering vanity — cut it.

### Guided tour, then sandbox

Never drop readers into an unexplained explorable (Zoonotic Web's rule). The tour
teaches the encoding one element at a time using real findings as examples; then an
explicit hand-off ("now explore it yourself") opens the controls. After the sandbox,
offer 3–4 curated preset views deep-linked for readers who won't explore — presets are
the piece's own "greatest hits" and double as shareable URLs.

### Defaults are the story

The initial state of any explorable must already show a finding — the outlier
highlighted, the most interesting year selected. An empty search box and a flat
"select a category" prompt waste the only guaranteed impression. Sensible default +
one obvious control beats ten empty dropdowns.

### Feedback and microinteraction rules

Apply the microinteraction anatomy (trigger → rules → feedback → loops) to every
control:

- Acknowledge every input within 100ms, even if the result takes longer (then show
  determinate progress if > 1s).
- Marks have three visually distinct states: resting, hovered/focused (≈150ms ease-out
  highlight + cursor change), and selected (persistent, stronger than hover). Hover
  and selected must not be confusable.
- Tooltips: fade in 150ms with a 2–4px rise, anchored so they never cover the mark
  they describe, dismissed on scroll. On touch, tap toggles the same detail — and
  anything essential shown in a tooltip must also exist on the page for readers who
  never hover (mobile has no hover).
- One interactive accent: every clickable element shares one consistent visual
  treatment (the perception rules' similarity principle) — readers should learn "what
  is clickable here" exactly once. Keep it distinct from the data accent color.
- Filter/toggle changes animate the chart per the timing table; instant hard swaps
  make readers lose their place.

### Discoverability

- Visible controls beat hidden gestures. If a graphic is interactive, it must look it:
  buttons look like buttons, a search box is a search box. For in-chart interactivity,
  one light affordance annotation at first encounter ("tap a dot to see the player")
  — shown once, not repeated on every chart.
- Test with the 5-second rule: a new reader should identify what they can do within
  5 seconds of reaching the explorable, without instructions.

### Interaction don'ts

- Don't gate the main story behind interaction — the piece read passively top-to-
  bottom must still deliver its claim (interaction deepens, never unlocks).
- Don't hijack scroll for interaction (carousels that eat wheel events, horizontal
  scroll sections on desktop).
- Don't autoplay sound; sound is opt-in with a visible control (Love Song's snippets,
  Better Catastrophe's narration).
- Don't ship more than ~3 controls without a guided tour.
- Don't block reading while anything loads — skeleton the graphic (pulsing 0.4→1.0
  opacity, layout dimensions reserved so nothing shifts on load).
