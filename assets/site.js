const checklist = [
  {
    title: "Progression",
    icon: "🧭",
    items: [
      ["Donjon 1 terminé", "Boost récupéré et premiers retours faits"],
      ["Donjon 2 terminé", "Chapelle / statue suspecte vérifiée"],
      ["Donjon 3 terminé", "Batterie cachée près de la piste de time trial vérifiée"],
      ["Donjon optionnel du désert", "Pouvoir, boss et scarabée récupérés"],
      ["Donjon 4 terminé", "Bâtiment caché, bouton et égouts fouillés"],
      ["Boss final battu", "Checkpoint final et sortie utilisés si besoin"],
      ["Bonus dungeons terminés", "Post-game et challenges vérifiés"]
    ]
  },
  {
    title: "Collectibles",
    icon: "🧩",
    items: [
      ["Tous les modules", "Succès Suréquipément / Overstuffed"],
      ["Tous les skills", "Boost, Dash, Supershot, Hover"],
      ["Tous les cœurs", "28 heart crystals selon la carte"],
      ["Toute l’énergie", "8 energy upgrades"],
      ["Tous les scarabées", "18 scarabées dorés"],
      ["Fragments de carte", "8 fragments"],
      ["Tablettes lore", "5 tablettes"],
      ["Clés importantes", "clés normales, boss keys et clés uniques"]
    ]
  },
  {
    title: "Courses",
    icon: "🏁",
    items: [
      ["Course #1", "Passage sable / canyon rocheux"],
      ["Course #2", "Tour aux 3 slimes et accès souterrain"],
      ["Course #3", "Forêt sombre / zone bleutée"],
      ["Course #4", "Couloir rocheux / ruines"],
      ["Course #5", "Forêt rouge / orange"],
      ["Course #6", "Chemins de pierre / zone sombre"],
      ["Course #7", "Désert / ville dorée"],
      ["Course #8", "Lagon / jungle / eau turquoise"],
      ["Récompense finale des courses", "À récupérer après les 8 courses"]
    ]
  },
  {
    title: "Secrets",
    icon: "🧱",
    items: [
      ["Family Home", "Retour maison + chaise / siège"],
      ["Wounded Heart", "Chapelle sud-ouest, autel et passage caché"],
      ["Barde écouté", "Rester près du barde après sauvetage"],
      ["Tortue géante", "Vieil Ami"],
      ["Arbre réveillé", "Fini de ronfler"],
      ["Scarabée Primordial", "Rencontre de l’entité"],
      ["Trous / chutes utiles", "Accès cachés et succès Aïe"],
      ["Jarres maison familiale", "Succès Quelle indignité / Lunatic"]
    ]
  },
  {
    title: "100% final",
    icon: "✅",
    items: [
      ["Succès de difficulté", "Ne pas baisser la difficulté si tu les vises"],
      ["Arènes terminées", "Pour la Gloire ?"],
      ["Arènes avec 5 cœurs restants", "C’est fini maintenant"],
      ["Tous les PNJ / vendeurs revisités", "Famille, scarabées, courses"],
      ["Checklist complète", "Tout vérifier avant la dernière action"],
      ["Sans regarder en arrière", "À faire seulement en tout dernier"]
    ]
  }
];

const searchIndex = [
  ["Module manquant", "Vérifie Family Home, vendeur scarabées, récompense des courses et Wounded Heart.", "docs/depannage-problemes-frequents.md#module-manquant-malgre-100-carte"],
  ["Course #2", "Tour aux 3 slimes, accès souterrain, piste à l’est.", "docs/recherche-courses-deep.md#course-2--acces-detaille-car-cest-la-plus-problematique"],
  ["Family Home", "Retour à la maison familiale après avoir sauvé les proches, interaction avec la chaise.", "docs/secrets.md#family-home--trouver-sa-place"],
  ["Wounded Heart", "Chapelle sud-ouest, autel, passage caché à droite / derrière l’autel.", "docs/secrets.md#wounded-heart--coeur-blesse"],
  ["Scarabée manquant", "Comparer les 18 scarabées avec la carte interactive et vérifier les souterrains.", "docs/depannage-problemes-frequents.md#scarabee-dore-manquant"],
  ["Succès difficulté", "La plus basse difficulté utilisée sur la sauvegarde détermine les succès.", "docs/checklist-100-pourcent.md#avant-de-commencer--succes-de-difficulte"],
  ["Sans regarder en arrière", "Action finale à faire en dernier, risque de suppression / oblitération de sauvegarde.", "docs/secrets.md#sans-regarder-en-arriere"],
  ["Barde", "Rester près du barde à la sortie nord après l’avoir sauvé.", "docs/secrets.md#barde--merci-de-mavoir-ecoute"],
  ["Move Speed", "Très utile pour les courses ; réallouer temporairement les points.", "docs/courses-et-race-spirits.md"],
  ["Carte interactive", "Source absolue pour coordonnées, catégories, quantités et objets placés.", "https://minishoot-map.github.io/"]
];

const storageKey = "minishoot-guide-fr-checklist-v1";
const state = JSON.parse(localStorage.getItem(storageKey) || "{}");

function slug(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderChecklist() {
  const root = document.querySelector("#checklistRoot");
  if (!root) return;
  root.innerHTML = checklist.map((group, groupIndex) => {
    const items = group.items.map(([title, note], itemIndex) => {
      const id = `${slug(group.title)}-${itemIndex}`;
      const checked = Boolean(state[id]);
      return `
        <label class="check-item ${checked ? "done" : ""}" for="${id}">
          <input id="${id}" type="checkbox" ${checked ? "checked" : ""} data-check-id="${id}">
          <span><strong>${title}</strong><small>${note}</small></span>
        </label>`;
    }).join("");
    return `
      <details class="check-group" ${groupIndex < 2 ? "open" : ""}>
        <summary><span>${group.icon} ${group.title}</span><span class="group-count" data-group="${slug(group.title)}"></span></summary>
        <div class="check-list">${items}</div>
      </details>`;
  }).join("");
  root.addEventListener("change", (event) => {
    const input = event.target.closest("[data-check-id]");
    if (!input) return;
    state[input.dataset.checkId] = input.checked;
    input.closest(".check-item")?.classList.toggle("done", input.checked);
    save();
    updateProgress();
  });
  updateProgress();
}

function updateProgress() {
  const allIds = checklist.flatMap(group => group.items.map((_, index) => `${slug(group.title)}-${index}`));
  const done = allIds.filter(id => state[id]).length;
  const total = allIds.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.querySelector("#progressText").textContent = `${pct}%`;
  document.querySelector("#progressCount").textContent = `${done} / ${total} cochés`;
  document.querySelector("#progressBar").style.width = `${pct}%`;
  checklist.forEach(group => {
    const ids = group.items.map((_, index) => `${slug(group.title)}-${index}`);
    const groupDone = ids.filter(id => state[id]).length;
    const node = document.querySelector(`[data-group="${slug(group.title)}"]`);
    if (node) node.textContent = `${groupDone}/${ids.length}`;
  });
}

function setupChecklistActions() {
  document.querySelector("#resetChecklist")?.addEventListener("click", () => {
    if (!confirm("Réinitialiser toutes les coches sur cet appareil ?")) return;
    Object.keys(state).forEach(key => delete state[key]);
    save();
    renderChecklist();
  });
  document.querySelector("#expandAll")?.addEventListener("click", () => {
    document.querySelectorAll("details.check-group").forEach(detail => detail.open = true);
  });
}

function setupSearch() {
  const input = document.querySelector("#quickSearch");
  const results = document.querySelector("#searchResults");
  if (!input || !results) return;
  const render = (query = "") => {
    const q = query.trim().toLowerCase();
    const matches = (q ? searchIndex.filter(([title, desc]) => `${title} ${desc}`.toLowerCase().includes(q)) : searchIndex.slice(0, 4));
    results.innerHTML = matches.slice(0, 6).map(([title, desc, href]) => `
      <a class="result" href="${href}">
        <strong>${title}</strong>
        <span>${desc}</span>
      </a>`).join("");
  };
  input.addEventListener("input", () => render(input.value));
  render("");
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!window.IntersectionObserver) {
    items.forEach(item => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const run = (node) => {
    const target = Number(node.dataset.count || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 28));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      node.textContent = current;
    }, 24);
  };
  if (!window.IntersectionObserver) return counters.forEach(run);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: .5 });
  counters.forEach(counter => observer.observe(counter));
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });
  const links = [...document.querySelectorAll(".nav a")];
  const sections = links.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const mark = () => {
    const y = window.scrollY + 140;
    let active = sections[0]?.id;
    sections.forEach(section => {
      if (section.offsetTop <= y) active = section.id;
    });
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${active}`));
  };
  window.addEventListener("scroll", mark, { passive: true });
  mark();
}

document.addEventListener("DOMContentLoaded", () => {
  renderChecklist();
  setupChecklistActions();
  setupSearch();
  setupReveal();
  setupCounters();
  setupNav();
});
