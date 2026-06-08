const grid = document.getElementById("grid");
const tagBar = document.getElementById("tagBar");
const personBar = document.getElementById("personBar");
const searchInput = document.getElementById("search");
const resultsCount = document.getElementById("resultsCount");
const backdrop = document.getElementById("backdrop");
const modalBody = document.getElementById("modalBody");

let activeTag = "all";
let activePerson = "all";
let query = "";

// Unique tags and people, in first-seen order
const allTags = ["all", ...new Set(RECIPES.flatMap(r => r.tags))];
const allPeople = ["all", ...new Set(RECIPES.map(r => r.person).filter(Boolean))];

// Does a recipe match a given combination of filters?
function matches(r, { tag, person, q }) {
  const matchTag = tag === "all" || r.tags.includes(tag);
  const matchPerson = person === "all" || r.person === person;
  const matchSearch = !q ||
    r.title.toLowerCase().includes(q) ||
    r.desc.toLowerCase().includes(q) ||
    r.tags.some(t => t.toLowerCase().includes(q)) ||
    (r.person && r.person.toLowerCase().includes(q)) ||
    r.ingredients.some(i => i.toLowerCase().includes(q));
  return matchTag && matchPerson && matchSearch;
}

function count(opts) {
  return RECIPES.filter(r => matches(r, opts)).length;
}

function chip(value, label, active, kind) {
  const n = kind === "person"
    ? count({ tag: activeTag, person: value, q: query.toLowerCase() })
    : count({ tag: value, person: activePerson, q: query.toLowerCase() });
  const cls = `tag${kind === "person" ? " person" : ""}${active ? " active" : ""}`;
  return `<span class="${cls}" data-${kind}="${value}">${label}<span class="count">${n}</span></span>`;
}

function renderFilters() {
  tagBar.innerHTML = allTags.map(t =>
    chip(t, t === "all" ? "All" : t, t === activeTag, "tag")
  ).join("");
  personBar.innerHTML = allPeople.map(p =>
    chip(p, p === "all" ? "All" : p, p === activePerson, "person")
  ).join("");
}

// Render a meta value. Estimates (not from the original recipe) are shown in red
// AND prefixed with "~" so colour is never the only signal.
function meta(r, field, icon, value) {
  const g = r.guesses && r.guesses.includes(field);
  const val = g ? `~${value}` : value;
  return `<span class="${g ? "guess" : ""}"${g ? ' title="Estimated — not from the original recipe"' : ""}>${icon} ${val}</span>`;
}

function renderGrid() {
  const q = query.toLowerCase();
  const list = RECIPES.filter(r => matches(r, { tag: activeTag, person: activePerson, q }));
  resultsCount.textContent = `${list.length} recipe${list.length === 1 ? "" : "s"}`;

  if (list.length === 0) {
    grid.innerHTML = `<div class="empty"><div>🍽️</div>No recipes match your search.</div>`;
    return;
  }

  grid.innerHTML = list.map(r => {
    const idx = RECIPES.indexOf(r);
    return `
      <article class="card" data-idx="${idx}">
        <div class="card-body">
          <div class="card-meta">${meta(r, "cook", "⏱", r.cook)}${meta(r, "serves", "🍽", r.serves)}${r.person ? `<span>👤 ${r.person}</span>` : ""}</div>
          <h2>${r.title}</h2>
          <p class="card-desc">${r.desc}</p>
          <div class="card-tags">${r.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}</div>
        </div>
      </article>`;
  }).join("");
}

function render() {
  renderFilters();
  renderGrid();
}

// An ingredient line like "— Sauce: —" is a sub-header, not a checkable item.
const isDivider = i => /^—.*—$/.test(i.trim());
const dividerText = i => i.replace(/—/g, "").trim();

function ingredientsHtml(r) {
  return r.ingredients.map(i =>
    isDivider(i)
      ? `<li class="ing-divider">${dividerText(i)}</li>`
      : `<li class="check-item"><span class="check-box" aria-hidden="true"></span><span class="check-text">${i}</span></li>`
  ).join("");
}

function stepsHtml(r) {
  return r.steps.map(s =>
    `<li class="check-item"><span class="check-text">${s}</span></li>`
  ).join("");
}

function openModal(idx) {
  const r = RECIPES[idx];
  modalBody.innerHTML = `
    <div class="modal-body">
      <h2 id="modalTitle">${r.title}</h2>
      <div class="modal-meta">
        ${meta(r, "prep", "⏱ Prep", r.prep)}
        ${meta(r, "cook", "🔥 Cook", r.cook)}
        ${meta(r, "serves", "🍽 Serves", r.serves)}
        ${r.person ? `<span>👤 ${r.person}</span>` : ""}
      </div>
      <div class="modal-tags">${r.tags.map(t => `<span class="modal-tag">${t}</span>`).join("")}</div>
      <button class="cook-launch" data-cook="${idx}">▶ Cook Mode</button>
      <div class="cook-grid">
        <div class="ingredients-col">
          <div class="modal-section-label">Ingredients</div>
          <ul class="checklist">${ingredientsHtml(r)}</ul>
        </div>
        <div class="steps-col">
          <div class="modal-section-label">Instructions</div>
          <ol class="checklist steplist">${stepsHtml(r)}</ol>
        </div>
      </div>
      ${r.notes ? `<div class="modal-notes">💡 ${r.notes}</div>` : ""}
    </div>`;
  modalBody.parentElement.scrollTop = 0;
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// Events
tagBar.addEventListener("click", e => {
  const chipEl = e.target.closest("[data-tag]");
  if (!chipEl) return;
  activeTag = chipEl.dataset.tag;
  render();
});

personBar.addEventListener("click", e => {
  const chipEl = e.target.closest("[data-person]");
  if (!chipEl) return;
  activePerson = chipEl.dataset.person;
  render();
});

searchInput.addEventListener("input", e => {
  query = e.target.value;
  render();
});

grid.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) openModal(Number(card.dataset.idx));
});

// Modal interactions: launch Cook Mode, or tick off ingredients/steps.
modalBody.addEventListener("click", e => {
  const launch = e.target.closest(".cook-launch");
  if (launch) { openCookMode(Number(launch.dataset.cook)); return; }
  const item = e.target.closest(".check-item");
  if (item) item.classList.toggle("checked");
});

backdrop.addEventListener("click", e => {
  if (e.target === backdrop || e.target.classList.contains("modal-close")) closeModal();
});

/* ── Cook Mode: one step at a time, screen kept awake ── */
const cookmode = document.getElementById("cookmode");
const cmTitle = document.getElementById("cmTitle");
const cmCounter = document.getElementById("cmCounter");
const cmStep = document.getElementById("cmStep");
const cmProgress = document.getElementById("cmProgress");
const cmPrev = document.getElementById("cmPrev");
const cmNext = document.getElementById("cmNext");
let cmSteps = [];
let cmIdx = 0;
let wakeLock = null;

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) wakeLock = await navigator.wakeLock.request("screen");
  } catch (_) { /* unsupported or denied — non-fatal */ }
}
function releaseWakeLock() {
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && cookmode.classList.contains("open")) requestWakeLock();
});

const escapeHtml = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

function ingredientListHtml(r) {
  return r.ingredients.map(i =>
    isDivider(i) ? `<li class="cm-ing-divider">${dividerText(i)}</li>` : `<li>${i}</li>`
  ).join("");
}

function renderCookStep() {
  cmCounter.textContent = `Step ${cmIdx + 1} of ${cmSteps.length}`;
  cmStep.innerHTML = cmSteps[cmIdx];
  cmPrev.disabled = cmIdx === 0;
  cmNext.disabled = cmIdx === cmSteps.length - 1;
  cmProgress.style.width = `${((cmIdx + 1) / cmSteps.length) * 100}%`;
}
function cookNext() { if (cmIdx < cmSteps.length - 1) { cmIdx++; renderCookStep(); } }
function cookPrev() { if (cmIdx > 0) { cmIdx--; renderCookStep(); } }

function openCookMode(idx) {
  const r = RECIPES[idx];
  // Step 1 is always "gather your ingredients", then the recipe's own steps.
  const prepStep = `<div class="cm-prep-label">Gather your ingredients</div>
    <ul class="cm-prep-list">${ingredientListHtml(r)}</ul>`;
  cmSteps = [prepStep, ...r.steps.map(escapeHtml)];
  cmIdx = 0;
  cmTitle.textContent = r.title;
  document.getElementById("cmIngList").innerHTML = ingredientListHtml(r);
  document.getElementById("cmIngWrap").open = false;
  renderCookStep();
  cookmode.classList.add("open");
  cookmode.setAttribute("aria-hidden", "false");
  requestWakeLock();
}
function exitCookMode() {
  cookmode.classList.remove("open");
  cookmode.setAttribute("aria-hidden", "true");
  releaseWakeLock();
}

cmNext.addEventListener("click", cookNext);
cmPrev.addEventListener("click", cookPrev);
document.getElementById("cmExit").addEventListener("click", exitCookMode);
document.getElementById("cmStepwrap").addEventListener("click", cookNext);

document.addEventListener("keydown", e => {
  if (cookmode.classList.contains("open")) {
    if (e.key === "Escape") exitCookMode();
    else if (e.key === "ArrowRight") cookNext();
    else if (e.key === "ArrowLeft") cookPrev();
    return;
  }
  if (e.key === "Escape") closeModal();
});

// Init
render();
