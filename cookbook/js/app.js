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

// Render a meta value, in red if it was an estimate rather than from the recipe
function meta(r, field, html) {
  const g = r.guesses && r.guesses.includes(field);
  return `<span class="${g ? "guess" : ""}"${g ? ' title="Estimated — not from the original recipe"' : ""}>${html}</span>`;
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
          <div class="card-meta">${meta(r, "cook", `⏱ ${r.cook}`)}${meta(r, "serves", `🍽 ${r.serves}`)}${r.person ? `<span>👤 ${r.person}</span>` : ""}</div>
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

function openModal(idx) {
  const r = RECIPES[idx];
  modalBody.innerHTML = `
    <div class="modal-body">
      <h2>${r.title}</h2>
      <div class="modal-meta">
        ${meta(r, "prep", `⏱ Prep ${r.prep}`)}
        ${meta(r, "cook", `🔥 Cook ${r.cook}`)}
        ${meta(r, "serves", `🍽 Serves ${r.serves}`)}
        ${r.person ? `<span>👤 ${r.person}</span>` : ""}
      </div>
      <div class="modal-tags">${r.tags.map(t => `<span class="modal-tag">${t}</span>`).join("")}</div>
      <div class="modal-section-label">Ingredients</div>
      <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      <div class="modal-section-label">Instructions</div>
      <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      ${r.notes ? `<div class="modal-notes">💡 ${r.notes}</div>` : ""}
    </div>`;
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

backdrop.addEventListener("click", e => {
  if (e.target === backdrop || e.target.classList.contains("modal-close")) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// Init
render();
