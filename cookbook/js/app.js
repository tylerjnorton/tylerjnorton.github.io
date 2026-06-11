const grid = document.getElementById("grid");
const tagBar = document.getElementById("tagBar");
const personBar = document.getElementById("personBar");
const searchInput = document.getElementById("search");
const resultsCount = document.getElementById("resultsCount");
const backdrop = document.getElementById("backdrop");
const modalBody = document.getElementById("modalBody");

/* ── Recipe store ──
   The single source of truth is the Firestore "recipes" collection: every
   recipe lives there in full and is editable by the family, syncing live to
   everyone. js/recipes.js is only the seed — it's loaded into Firestore once,
   automatically, the first time the app sees an empty collection — and the
   offline fallback. Without Firebase, changes save per-browser instead. */
const store = {
  load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  },
  save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

// Seed copies of the built-in recipes. _id (the original title) is the
// permanent key; `order` preserves the cookbook's ordering.
const BUILTINS = RECIPES.map((r, i) => ({ ...r, _id: r.title, order: i }));
const photos = {};   // id -> photo data URL, derived from recipe data
let overrides = {};  // local-fallback mode only: id -> changed fields
let docs = null;     // Firestore mode: latest snapshot of all recipe docs

let db = null;
if (window.CB_FIREBASE_CONFIG && window.firebase) {
  try {
    firebase.initializeApp(window.CB_FIREBASE_CONFIG);
    db = firebase.firestore();
  } catch (_) { db = null; }
}

const deletedIds = () => db
  ? (docs || []).filter(d => d.deleted).map(d => d._id)
  : Object.keys(overrides).filter(id => overrides[id].deleted);

// Rebuild the visible recipe list from the current source of truth.
function rebuild() {
  Object.keys(photos).forEach(k => delete photos[k]);
  const list = (db && docs)
    ? docs.filter(d => !d.deleted).sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
    : BUILTINS.map(b => ({ ...b, ...overrides[b._id] })).filter(r => !r.deleted);
  for (const r of list) if (r.photo) photos[r._id] = r.photo;
  RECIPES.length = 0;
  RECIPES.push(...list);
}

// Firestore rejects undefined values; _id is local-only (it's the doc id).
function toDoc(r) {
  const d = { ...r };
  delete d._id;
  Object.keys(d).forEach(k => { if (d[k] === undefined) delete d[k]; });
  return d;
}

// One-time migration: copy every built-in recipe into Firestore.
let seedTried = false;
function seedRecipes() {
  if (seedTried) return;
  seedTried = true;
  const batch = db.batch();
  BUILTINS.forEach(b => batch.set(db.collection("recipes").doc(encodeURIComponent(b._id)), toDoc(b)));
  batch.commit().catch(err =>
    alert("Couldn't load the starter recipes into the shared cookbook:\n\n" + err.message));
}

// Save changed fields on one recipe — to Firestore for everyone when
// configured, otherwise to this browser's localStorage.
function persistChange(id, patch) {
  if (db) {
    db.collection("recipes").doc(encodeURIComponent(id)).set(patch, { merge: true })
      .catch(err => alert("Couldn't reach the shared cookbook — this change may not have saved for everyone.\n\n" + err.message));
    const d = (docs || []).find(x => x._id === id);
    if (d) Object.assign(d, patch); // optimistic; the snapshot confirms it
  } else {
    overrides[id] = { ...overrides[id], ...patch };
    try { store.save("cookbook_overrides", overrides); }
    catch (_) { alert("This browser's storage is full — the change couldn't be saved. Try removing a photo first."); }
  }
  rebuild();
}

rebuild();
if (db) {
  // Live sync: the first snapshot loads the shared cookbook (seeding it if
  // empty); later ones apply everyone's changes as they happen.
  db.collection("recipes").onSnapshot(snap => {
    if (snap.empty) {
      if (!snap.metadata.fromCache) seedRecipes();
      return;
    }
    docs = [];
    snap.forEach(d => docs.push({ ...d.data(), _id: decodeURIComponent(d.id) }));
    rebuild();
    render();
  }, () => { /* offline or misconfigured — built-in recipes still work */ });
} else {
  overrides = store.load("cookbook_overrides", {});
  rebuild();
}

/* ── Family passcode: asked once per browser before changing shared data ── */
const PASS_HASH = "23a04f066159c0b5d3ede1602729a4532b62f1cef50d4f312fa1e36ba2c0e66a";

async function sha256(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function ensureUnlocked() {
  if (!db) return true; // per-browser changes don't affect anyone else
  if (localStorage.getItem("cookbook_unlocked") === PASS_HASH) return true;
  const word = prompt("Enter the family passcode to make changes for everyone:");
  if (word === null) return false;
  const h = await sha256(word.trim().toLowerCase());
  if (h !== PASS_HASH) { alert("That's not the passcode — ask Tyler!"); return false; }
  localStorage.setItem("cookbook_unlocked", h);
  return true;
}

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
  const val = escapeHtml(String(g ? `~${value}` : value));
  return `<span class="${g ? "guess" : ""}"${g ? ' title="Estimated — not from the original recipe"' : ""}>${icon} ${val}</span>`;
}

function renderGrid() {
  const q = query.toLowerCase();
  const list = RECIPES.filter(r => matches(r, { tag: activeTag, person: activePerson, q }));
  resultsCount.textContent = `${list.length} recipe${list.length === 1 ? "" : "s"}`;
  const nDeleted = deletedIds().length;
  if (nDeleted > 0) {
    resultsCount.innerHTML += ` · <button class="restore-link" type="button">restore ${nDeleted} deleted</button>`;
  }

  if (list.length === 0) {
    grid.innerHTML = `<div class="empty"><div>🍽️</div>No recipes match your search.</div>`;
    return;
  }

  grid.innerHTML = list.map(r => {
    const idx = RECIPES.indexOf(r);
    return `
      <article class="card" data-idx="${idx}">
        ${photos[r._id] ? `<img class="card-photo" src="${photos[r._id]}" alt="" loading="lazy">` : ""}
        <div class="card-body">
          <div class="card-meta">${meta(r, "cook", "⏱", r.cook)}${meta(r, "serves", "🍽", r.serves)}${r.person ? `<span>👤 ${escapeHtml(r.person)}</span>` : ""}</div>
          <h2>${escapeHtml(r.title)}</h2>
          <p class="card-desc">${escapeHtml(r.desc)}</p>
          <div class="card-tags">${r.tags.map(t => `<span class="card-tag">${escapeHtml(t)}</span>`).join("")}</div>
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
      : `<li class="check-item"><span class="check-box" aria-hidden="true"></span><span class="check-text">${escapeHtml(i)}</span></li>`
  ).join("");
}

function stepsHtml(r) {
  return r.steps.map(s =>
    `<li class="check-item"><span class="check-text">${escapeHtml(s)}</span></li>`
  ).join("");
}

function openModal(idx) {
  const r = RECIPES[idx];
  const photo = photos[r._id];
  modalBody.innerHTML = `
    <div class="modal-body">
      ${photo ? `<img class="recipe-photo" src="${photo}" alt="Photo of ${escAttr(r.title)}">` : ""}
      <h2 id="modalTitle">${escapeHtml(r.title)}</h2>
      <div class="modal-meta">
        ${meta(r, "prep", "⏱ Prep", r.prep)}
        ${meta(r, "cook", "🔥 Cook", r.cook)}
        ${meta(r, "serves", "🍽 Serves", r.serves)}
        ${r.person ? `<span>👤 ${escapeHtml(r.person)}</span>` : ""}
      </div>
      <div class="modal-tags">${r.tags.map(t => `<span class="modal-tag">${escapeHtml(t)}</span>`).join("")}</div>
      <div class="modal-actions">
        <button class="cook-launch" data-cook="${idx}">▶ Cook Mode</button>
        <button class="action-btn" data-edit="${idx}">✏️ Edit</button>
        <button class="action-btn" data-photo="${idx}">📷 ${photo ? "Change photo" : "Add photo"}</button>
        ${photo ? `<button class="action-btn" data-removephoto="${idx}">Remove photo</button>` : ""}
        <button class="action-btn danger" data-delete="${idx}">🗑 Delete</button>
      </div>
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
      ${r.notes ? `<div class="modal-notes">💡 ${escapeHtml(r.notes)}</div>` : ""}
    </div>`;
  modalBody.parentElement.scrollTop = 0;
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

/* ── Editing: a form that swaps into the modal in place of the recipe ── */
function renderEditForm(idx) {
  const r = RECIPES[idx];
  modalBody.innerHTML = `
    <div class="modal-body">
      <h2 id="modalTitle">Edit “${escapeHtml(r.title)}”</h2>
      <p class="edit-hint">${db
        ? "Changes save to the shared family cookbook — everyone will see them."
        : "Shared sync isn't set up yet, so changes save in this browser only."}</p>
      <form class="edit-form" data-form="${idx}">
        <label>Title<input name="title" value="${escAttr(r.title)}" required></label>
        <label>Description<textarea name="desc" rows="2">${escapeHtml(r.desc)}</textarea></label>
        <div class="edit-row">
          <label>Prep<input name="prep" value="${escAttr(r.prep)}"></label>
          <label>Cook<input name="cook" value="${escAttr(r.cook)}"></label>
          <label>Serves<input name="serves" value="${escAttr(r.serves)}"></label>
        </div>
        <label>Ingredients <span class="edit-sub">(one per line)</span><textarea name="ingredients" rows="10">${escapeHtml(r.ingredients.join("\n"))}</textarea></label>
        <label>Instructions <span class="edit-sub">(one step per line)</span><textarea name="steps" rows="10">${escapeHtml(r.steps.join("\n"))}</textarea></label>
        <label>Notes<textarea name="notes" rows="2">${escapeHtml(r.notes || "")}</textarea></label>
        <div class="edit-actions">
          <button type="submit" class="cook-launch">Save changes</button>
          <button type="button" class="action-btn" data-cancel="${idx}">Cancel</button>
        </div>
      </form>
    </div>`;
  modalBody.parentElement.scrollTop = 0;
}

function saveEdit(idx, form) {
  const r = RECIPES[idx];
  const get = name => form.elements[name].value;
  const lines = v => v.split("\n").map(s => s.trim()).filter(Boolean);
  const updated = {
    title: get("title").trim() || r.title,
    desc: get("desc").trim(),
    prep: get("prep").trim(),
    cook: get("cook").trim(),
    serves: get("serves").trim(),
    notes: get("notes").trim(),
    ingredients: lines(get("ingredients")),
    steps: lines(get("steps"))
  };
  // A hand-typed time/serving is no longer an estimate, so drop its ~ marker.
  updated.guesses = (r.guesses || []).filter(f => updated[f] === r[f]);
  persistChange(r._id, updated);
  render();
  reopenById(r._id);
}

// After overrides reapply, a recipe's index can shift — find it again by id.
function reopenById(id) {
  const idx = RECIPES.findIndex(r => r._id === id);
  if (idx >= 0) openModal(idx); else closeModal();
}

function deleteRecipe(idx) {
  const r = RECIPES[idx];
  const where = db ? "for everyone" : "on this device";
  const sure = confirm(`Delete “${r.title}” ${where}?\n\nYou can bring it back with the “restore deleted” link above the recipe grid.`);
  if (!sure) return;
  persistChange(r._id, { deleted: true });
  closeModal();
  render();
}

function restoreAllDeleted() {
  deletedIds().forEach(id => persistChange(id, { deleted: false }));
  render();
}

/* ── Photos: picked from a hidden file input, downscaled on a canvas so
   they fit comfortably in localStorage, shown on the card and in the modal. ── */
const photoInput = document.createElement("input");
photoInput.type = "file";
photoInput.accept = "image/*";
let photoIdx = null;

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file || photoIdx === null) return;
  const id = RECIPES[photoIdx] && RECIPES[photoIdx]._id;
  if (!id) return;
  resizePhoto(file, dataUrl => {
    photoInput.value = "";
    persistChange(id, { photo: dataUrl });
    render();
    reopenById(id);
  });
});

// Downscale on a canvas so photos fit Firestore's 1MB document limit
// (and localStorage in fallback mode). Retries smaller if still too big.
function resizePhoto(file, cb) {
  const img = new Image();
  img.onload = () => {
    URL.revokeObjectURL(img.src);
    let dataUrl = drawScaled(img, 900, 0.78);
    if (dataUrl.length > 700000) dataUrl = drawScaled(img, 600, 0.6);
    cb(dataUrl);
  };
  img.onerror = () => {
    URL.revokeObjectURL(img.src);
    alert("That file doesn't look like an image this browser can read.");
  };
  img.src = URL.createObjectURL(file);
}

function drawScaled(img, maxEdge, quality) {
  const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", quality);
}

function removePhoto(idx) {
  const id = RECIPES[idx]._id;
  persistChange(id, { photo: null });
  render();
  reopenById(id);
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

// Modal interactions: Cook Mode, edit/delete/photo actions, or tick off items.
modalBody.addEventListener("click", e => {
  const launch = e.target.closest(".cook-launch[data-cook]");
  if (launch) { openCookMode(Number(launch.dataset.cook)); return; }
  const edit = e.target.closest("[data-edit]");
  if (edit) { ensureUnlocked().then(ok => ok && renderEditForm(Number(edit.dataset.edit))); return; }
  const cancel = e.target.closest("[data-cancel]");
  if (cancel) { openModal(Number(cancel.dataset.cancel)); return; }
  const photoBtn = e.target.closest("[data-photo]");
  if (photoBtn) {
    ensureUnlocked().then(ok => {
      if (ok) { photoIdx = Number(photoBtn.dataset.photo); photoInput.click(); }
    });
    return;
  }
  const rmPhoto = e.target.closest("[data-removephoto]");
  if (rmPhoto) { ensureUnlocked().then(ok => ok && removePhoto(Number(rmPhoto.dataset.removephoto))); return; }
  const del = e.target.closest("[data-delete]");
  if (del) { ensureUnlocked().then(ok => ok && deleteRecipe(Number(del.dataset.delete))); return; }
  const item = e.target.closest(".check-item");
  if (item) item.classList.toggle("checked");
});

modalBody.addEventListener("submit", e => {
  const form = e.target.closest(".edit-form");
  if (!form) return;
  e.preventDefault();
  saveEdit(Number(form.dataset.form), form);
});

// "restore N deleted" link in the results bar brings hidden recipes back.
resultsCount.addEventListener("click", e => {
  if (!e.target.closest(".restore-link")) return;
  ensureUnlocked().then(ok => ok && restoreAllDeleted());
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
const escAttr = s => escapeHtml(String(s)).replace(/"/g, "&quot;");

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
