import defaultData from "./rating-data.js";
import { createSnapshot, fetchSnapshot } from "./supabase-client.js";

const PALETTE = ["#6DB5FE", "#23FD22", "#B6FD3B", "#FDFD6B", "#FCB53B", "#DB6C00", "#920000"];

const state = {
  data: null,
  values: {},
  expanded: {},
  theme: "light",
  readOnly: false,
};

const els = {
  hint: document.getElementById("hint"),
  themeToggle: document.getElementById("theme-toggle"),
  exportBtn: document.getElementById("export-json"),
  shareBtn: document.getElementById("share-link"),
  bannerSlot: document.getElementById("banner-slot"),
  legendScale: document.getElementById("legend-scale"),
  board: document.getElementById("board"),
  footerNote: document.getElementById("footer-note"),
};

function key(gi, ii, fi, slot) {
  return slot ? `${gi}.${ii}.${fi}.${slot}` : `${gi}.${ii}.${fi}`;
}

function seedFromData(data) {
  const values = {};
  const expanded = {};
  data.groups.forEach((g, gi) => {
    g.fields.slice(0, 2).forEach((f, fi) => {
      g.items.forEach((item, ii) => {
        const v = item.ratings ? item.ratings[fi] : null;
        if (v && typeof v === "object") {
          if (v.practice != null) values[key(gi, ii, fi, "practice")] = v.practice;
          if (v.theory != null) values[key(gi, ii, fi, "theory")] = v.theory;
          if (v.theory != null && v.theory !== v.practice) expanded[key(gi, ii, fi)] = true;
        } else if (v != null) {
          values[key(gi, ii, fi, "practice")] = v;
        }
      });
    });
  });
  return { values, expanded };
}

function applyStoredTheme() {
  const stored = localStorage.getItem("ratings-theme");
  const theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  state.theme = theme;
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("ratings-theme", state.theme);
  renderThemeButton();
}

function renderThemeButton() {
  els.themeToggle.textContent = state.theme === "dark" ? "Light mode" : "Dark mode";
}

function pick(k, i) {
  if (state.readOnly) return;
  if (state.values[k] === i) delete state.values[k];
  else state.values[k] = i;
  renderBoard();
}

function toggleExpand(k) {
  state.expanded[k] = !state.expanded[k];
  renderBoard();
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderLegend() {
  els.legendScale.replaceChildren();
  state.data.scale.forEach((s, i) => {
    const item = el("div", "legend-item");
    const swatch = el("span", "swatch");
    swatch.style.background = PALETTE[i];
    item.append(swatch, el("span", null, s.label));
    els.legendScale.append(item);
  });
}

function renderCircleRow(k) {
  const row = el("div", "circle-row");
  const sel = state.values[k];
  state.data.scale.forEach((s, i) => {
    const btn = el("button", "circle");
    btn.title = s.label;
    const selected = sel === i;
    btn.style.background = selected
      ? PALETTE[i]
      : `color-mix(in srgb, ${PALETTE[i]} 35%, var(--mix))`;
    btn.style.border = selected ? "1px solid var(--ring)" : "1px solid var(--line)";
    if (state.readOnly) {
      btn.classList.add("readonly");
      btn.disabled = true;
    } else {
      btn.addEventListener("click", () => pick(k, i));
    }
    row.append(btn);
  });
  return row;
}

function renderCellLine(k, caption) {
  const line = el("div", "cell-line");
  if (caption) line.append(el("span", "cell-caption", caption));
  line.append(renderCircleRow(k));
  return line;
}

function renderGroup(group, gi) {
  const fields = group.fields.slice(0, 2);
  const n = fields.length;

  const section = el("section", "group");
  section.append(el("h2", "group-title", group.name));

  const grid = el("div", "group-grid");
  grid.style.gridTemplateColumns = `minmax(70px,1fr) repeat(${n}, max-content)`;
  section.append(grid);

  grid.append(el("div", "corner"));
  fields.forEach((f) => grid.append(el("div", "field-header", f.name)));

  group.items.forEach((item, ii) => {
    grid.append(el("div", "row-name", item.name));
    fields.forEach((f, fi) => {
      const ek = key(gi, ii, fi);
      const open = !!state.expanded[ek];
      const cell = el("div", "cell");

      if (open) {
        cell.append(renderCellLine(key(gi, ii, fi, "theory"), "T"));
        cell.append(renderCellLine(key(gi, ii, fi, "practice"), "P"));
      } else {
        cell.append(renderCellLine(key(gi, ii, fi, "practice"), ""));
      }

      const toggleBtn = el("button", "toggle-btn", open ? "merge" : "split");
      toggleBtn.addEventListener("click", () => toggleExpand(ek));
      cell.append(toggleBtn);

      grid.append(cell);
    });
  });

  return section;
}

function renderBoard() {
  els.board.replaceChildren();
  if (!state.data) return;

  const need = Math.max(...state.data.groups.map((g) => 110 + Math.min(g.fields.length, 2) * 175));
  els.board.style.gridTemplateColumns = `repeat(auto-fit, minmax(min(100%, ${need}px), 1fr))`;

  state.data.groups.forEach((g, gi) => {
    els.board.append(renderGroup(g, gi));
  });
}

function currentJSON() {
  const { data, values, expanded } = state;
  return {
    scale: data.scale,
    groups: data.groups.map((g, gi) => {
      const fields = g.fields.slice(0, 2);
      return {
        name: g.name,
        fields,
        items: g.items.map((item, ii) => ({
          name: item.name,
          ratings: fields.map((f, fi) => {
            const p = values[key(gi, ii, fi, "practice")];
            const t = values[key(gi, ii, fi, "theory")];
            if (expanded[key(gi, ii, fi)]) {
              return { theory: t != null ? t : null, practice: p != null ? p : null };
            }
            return p != null ? p : null;
          }),
        })),
      };
    }),
  };
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(currentJSON(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ratings.json";
  a.click();
  URL.revokeObjectURL(url);
}

function showToast(message) {
  const toast = el("div", "banner", message);
  toast.style.position = "fixed";
  toast.style.bottom = "16px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.zIndex = "1000";
  document.body.append(toast);
  setTimeout(() => toast.remove(), 4000);
}

async function shareLink() {
  els.shareBtn.disabled = true;
  const originalLabel = els.shareBtn.textContent;
  els.shareBtn.textContent = "Sharing…";
  try {
    const id = await createSnapshot(currentJSON());
    const url = `${location.origin}${location.pathname}?share=${id}`;
    try {
      await navigator.clipboard.writeText(url);
      showToast(`Link copied to clipboard: ${url}`);
    } catch {
      window.prompt("Copy this read-only link:", url);
    }
  } catch (err) {
    console.error(err);
    alert(`Couldn't create a share link: ${err.message}`);
  } finally {
    els.shareBtn.disabled = false;
    els.shareBtn.textContent = originalLabel;
  }
}

function renderReadOnlyBanner() {
  els.bannerSlot.replaceChildren();
  if (!state.readOnly) return;
  const banner = el("div", "banner");
  banner.append(el("span", null, "Viewing a shared snapshot — read-only."));
  const link = el("a", null, "View the live board");
  link.href = location.pathname;
  banner.append(link);
  els.bannerSlot.append(banner);
}

function renderErrorState(message) {
  els.board.replaceChildren();
  els.bannerSlot.replaceChildren();
  const box = el("div", "error-box", message);
  els.bannerSlot.append(box);
  els.hint.textContent = "";
  els.footerNote.style.display = "none";
  els.exportBtn.disabled = true;
  els.shareBtn.disabled = true;
  document.getElementById("legend-panel").style.display = "none";
}

async function init() {
  applyStoredTheme();
  renderThemeButton();
  els.themeToggle.addEventListener("click", toggleTheme);
  els.exportBtn.addEventListener("click", exportJSON);
  els.shareBtn.addEventListener("click", shareLink);

  const params = new URLSearchParams(location.search);
  const shareId = params.get("share");

  if (shareId) {
    try {
      const data = await fetchSnapshot(shareId);
      state.data = data;
      state.readOnly = true;
      Object.assign(state, seedFromData(data));
    } catch (err) {
      console.error(err);
      renderErrorState("This shared snapshot couldn't be found — it may have been mistyped or the link is broken.");
      return;
    }
  } else {
    state.data = defaultData;
    Object.assign(state, seedFromData(defaultData));
  }

  if (state.readOnly) {
    els.hint.textContent = "Read-only view of a shared snapshot.";
    els.shareBtn.style.display = "none";
    els.footerNote.style.display = "none";
  }

  renderReadOnlyBanner();
  renderLegend();
  renderBoard();
}

init();
