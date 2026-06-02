/* =========================================================================
   Formation Trading — Logique applicative
   Génère la navigation, le routage (hash), la progression, la recherche
   et le thème. 100 % statique : compatible GitHub Pages sans build.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Index des leçons (id stable) ---------- */
  const LESSONS = []; // liste plate : { id, mIndex, lIndex, title, module, ... }
  COURSE.modules.forEach((mod, mi) => {
    mod.lessons.forEach((les, li) => {
      const id = `m${mod.number}-l${li + 1}`;
      les.id = id;
      les.module = mod;
      LESSONS.push({ id, mi, li, title: les.title, moduleTitle: mod.title, moduleNum: mod.number, les });
    });
  });
  const TOTAL = LESSONS.length;

  /* ---------- Progression (localStorage) ---------- */
  const STORE_KEY = "formation-trading-progress-v1";
  const THEME_KEY = "formation-trading-theme";
  function loadDone() {
    try { return new Set(JSON.parse(localStorage.getItem(STORE_KEY) || "[]")); }
    catch (e) { return new Set(); }
  }
  function saveDone(set) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...set])); } catch (e) {}
  }
  let done = loadDone();

  /* ---------- Helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  function el(tag, attrs = {}, html) {
    const n = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else n.setAttribute(k, v);
    });
    if (html != null) n.innerHTML = html;
    return n;
  }
  function moduleDone(mod) {
    return mod.lessons.filter(l => done.has(l.id)).length;
  }

  /* ---------- Navigation (sidebar) ---------- */
  const navEl = $("#nav");
  function buildNav() {
    navEl.innerHTML = "";
    COURSE.modules.forEach((mod) => {
      const wrap = el("div", { class: "nav-mod", "data-mod": mod.number });
      const head = el("button", { class: "nav-mod-head" });
      head.innerHTML =
        `<span class="nav-mod-icon">${mod.icon}</span>` +
        `<span style="flex:1"><span class="nav-mod-num">MODULE ${mod.number}</span><br>` +
        `<span class="nav-mod-title">${mod.title}</span></span>` +
        `<span class="nav-mod-chev">▶</span>`;
      head.addEventListener("click", () => wrap.classList.toggle("open"));
      wrap.appendChild(head);

      const list = el("div", { class: "nav-lessons" });
      mod.lessons.forEach((les) => {
        const item = el("a", { class: "nav-lesson", href: `#${les.id}`, "data-lesson": les.id });
        item.innerHTML =
          `<span class="check">✓</span>` +
          `<span class="nav-lesson-title">${les.title}</span>`;
        list.appendChild(item);
      });
      wrap.appendChild(list);
      navEl.appendChild(wrap);
    });
    refreshNavState();
  }

  function refreshNavState() {
    $$(".nav-lesson", navEl).forEach((a) => {
      const id = a.getAttribute("data-lesson");
      a.classList.toggle("done", done.has(id));
    });
  }

  function highlightNav(id) {
    $$(".nav-lesson", navEl).forEach(a => a.classList.remove("active"));
    const active = $(`.nav-lesson[data-lesson="${id}"]`, navEl);
    if (active) {
      active.classList.add("active");
      const modWrap = active.closest(".nav-mod");
      if (modWrap) modWrap.classList.add("open");
      active.scrollIntoView({ block: "nearest" });
    }
  }

  /* ---------- Progression UI ---------- */
  function updateProgress() {
    const pct = TOTAL ? Math.round((done.size / TOTAL) * 100) : 0;
    $("#progressFill").style.width = pct + "%";
    $("#progressPct").textContent = pct + "%";
  }

  /* ---------- Rendu : Accueil ---------- */
  function renderHome() {
    const c = $("#content");
    const firstLesson = LESSONS[0].id;
    const completedModules = COURSE.modules.filter(m => moduleDone(m) === m.lessons.length).length;

    let cards = "";
    COURSE.modules.forEach((mod) => {
      const d = moduleDone(mod), t = mod.lessons.length;
      const pct = Math.round((d / t) * 100);
      cards +=
        `<a class="mod-card" href="#${mod.lessons[0].id}">
          <div class="mod-card-top">
            <span class="mod-card-icon">${mod.icon}</span>
            <span class="mod-card-num">MODULE ${mod.number}</span>
          </div>
          <h3 class="mod-card-title">${mod.title}</h3>
          <p class="mod-card-sum">${mod.summary}</p>
          <div class="mod-card-foot">
            <span>${t} leçon${t > 1 ? "s" : ""}</span>
            <span class="mod-mini-bar"><span class="mod-mini-fill" style="width:${pct}%"></span></span>
          </div>
        </a>`;
    });

    c.innerHTML =
      `<section class="hero">
        <h1>${COURSE.title}</h1>
        <p class="lead">${COURSE.subtitle}. Une formation structurée en 16 modules, des fondations jusqu'à l'exécution en conditions réelles.</p>
        <a class="hero-cta" href="#${firstLesson}">Commencer la formation →</a>
        <div class="stats">
          <div class="stat"><div class="stat-num">16</div><div class="stat-lbl">Modules</div></div>
          <div class="stat"><div class="stat-num">${TOTAL}</div><div class="stat-lbl">Leçons</div></div>
          <div class="stat"><div class="stat-num">${done.size}</div><div class="stat-lbl">Terminées</div></div>
          <div class="stat"><div class="stat-num">${completedModules}/16</div><div class="stat-lbl">Modules finis</div></div>
        </div>
      </section>
      <h2 style="font-size:22px;font-weight:800;letter-spacing:-.02em;margin:10px 0 4px;">Programme complet</h2>
      <div class="mod-grid">${cards}</div>`;
    document.title = `${COURSE.title} — ${COURSE.subtitle}`;
    window.scrollTo(0, 0);
  }

  /* ---------- Rendu : Leçon ---------- */
  function renderLesson(id) {
    const idx = LESSONS.findIndex(l => l.id === id);
    if (idx === -1) { renderHome(); return; }
    const { les, mi, li } = LESSONS[idx];
    const mod = COURSE.modules[mi];
    const c = $("#content");
    const isDone = done.has(id);
    const isExercise = les.type === "exercise";
    const prev = LESSONS[idx - 1];
    const next = LESSONS[idx + 1];

    c.innerHTML =
      `<div class="crumbs"><a href="#accueil">Accueil</a> › ${mod.icon} Module ${mod.number} · ${mod.title}</div>
      <div class="lesson-head">
        <div class="lesson-eyebrow">
          <span>Module ${mod.number} · Leçon ${li + 1}/${mod.lessons.length}</span>
          ${isExercise ? '<span class="tag">Exercice</span>' : ''}
        </div>
        <h1>${les.title}</h1>
        <div class="lesson-meta">
          <span>⏱ ${les.minutes || 8} min de lecture</span>
        </div>
      </div>
      <div class="lesson-body">${les.html}</div>
      <div class="lesson-actions">
        <button id="doneBtn" class="btn btn-done ${isDone ? 'is-done' : ''}">
          ${isDone ? '✓ Leçon terminée' : 'Marquer comme terminée'}
        </button>
      </div>
      <div class="nav-pair">
        ${prev
          ? `<a class="btn" href="#${prev.id}">← <span><small>Précédent</small>${truncate(prev.title)}</span></a>`
          : `<span class="btn disabled">← <span><small>Précédent</small>Début</span></span>`}
        ${next
          ? `<a class="btn btn-nav" href="#${next.id}"><span style="text-align:right"><small>Suivant</small>${truncate(next.title)}</span> →</a>`
          : `<a class="btn btn-nav" href="#accueil"><span style="text-align:right"><small>Fin</small>Retour accueil</span> ✓</a>`}
      </div>`;

    $("#doneBtn").addEventListener("click", () => {
      if (done.has(id)) { done.delete(id); }
      else {
        done.add(id);
        // avance automatiquement vers la suivante
        if (next) setTimeout(() => { location.hash = "#" + next.id; }, 250);
      }
      saveDone(done);
      updateProgress();
      refreshNavState();
      const b = $("#doneBtn");
      const now = done.has(id);
      b.classList.toggle("is-done", now);
      b.textContent = now ? "✓ Leçon terminée" : "Marquer comme terminée";
    });

    document.title = `${les.title} — ${COURSE.title}`;
    highlightNav(id);
    window.scrollTo(0, 0);
    closeSidebar();
  }
  function truncate(s, n = 32) { return s.length > n ? s.slice(0, n - 1) + "…" : s; }

  /* ---------- Routage par hash ---------- */
  function route() {
    const hash = location.hash.replace(/^#/, "");
    if (!hash || hash === "accueil") renderHome();
    else renderLesson(hash);
  }
  window.addEventListener("hashchange", route);

  /* ---------- Recherche ---------- */
  const searchInput = $("#search");
  const searchResults = $("#searchResults");
  function runSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) { searchResults.hidden = true; return; }
    const matches = LESSONS.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.moduleTitle.toLowerCase().includes(q) ||
      (l.les.html && l.les.html.toLowerCase().includes(q))
    ).slice(0, 12);

    if (!matches.length) {
      searchResults.innerHTML = `<div class="sr-empty">Aucun résultat pour « ${escapeHtml(q)} »</div>`;
    } else {
      searchResults.innerHTML = matches.map(m =>
        `<a class="sr-item" href="#${m.id}">
          <div class="sr-title">${escapeHtml(m.title)}</div>
          <div class="sr-mod">Module ${m.moduleNum} · ${escapeHtml(m.moduleTitle)}</div>
        </a>`).join("");
    }
    searchResults.hidden = false;
  }
  function escapeHtml(s) { return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  searchInput.addEventListener("input", e => runSearch(e.target.value));
  searchInput.addEventListener("focus", e => { if (e.target.value) runSearch(e.target.value); });
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrap")) searchResults.hidden = true;
    const sr = e.target.closest(".sr-item");
    if (sr) { searchInput.value = ""; searchResults.hidden = true; }
  });

  /* ---------- Thème ---------- */
  const themeToggle = $("#themeToggle");
  function applyTheme(t) {
    if (t === "light") { document.documentElement.setAttribute("data-theme", "light"); themeToggle.textContent = "☀️"; }
    else { document.documentElement.removeAttribute("data-theme"); themeToggle.textContent = "🌙"; }
  }
  applyTheme(localStorage.getItem(THEME_KEY) || "dark");
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  /* ---------- Sidebar mobile ---------- */
  const sidebar = $("#sidebar");
  function closeSidebar() { sidebar.classList.remove("open"); }
  $("#menuToggle").addEventListener("click", () => sidebar.classList.toggle("open"));
  $("#overlay").addEventListener("click", closeSidebar);

  /* ---------- Reset progression ---------- */
  $("#resetProgress").addEventListener("click", () => {
    if (confirm("Réinitialiser toute votre progression ?")) {
      done = new Set(); saveDone(done);
      updateProgress(); refreshNavState();
      route();
    }
  });

  /* ---------- Init ---------- */
  buildNav();
  updateProgress();
  route();
})();
