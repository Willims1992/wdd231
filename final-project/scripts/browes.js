// browse.js

// Fetch all skills and display them
/*async function loadBrowseCards() {
  try {
    const res = await fetch("data/skills.json");
    if (!res.ok) throw new Error("Failed to fetch skills");

    const skills = await res.json();
    const container = document.getElementById("browseContainer");

    skills.forEach(skill => {
      const card = document.createElement("section");
      card.className = "item-card";

      card.innerHTML = `
        <figure><img src="${skill.image}" alt="${skill.name}" loading="lazy" /></figure>
        <h4>${skill.name}</h4>
        <p><strong>Category:</strong> ${skill.category}</p>
        <p>${skill.description}</p>
        <button class="learn-more-btn">Learn More</button>
      `;

      card.querySelector(".learn-more-btn").addEventListener("click", e => {
        e.stopPropagation();
        showModal(skill);
      });

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Browse page error:", err);
  }
}

// Modal logic (same as main.js)
function showModal(skill) {
  const modal = document.getElementById("modal");
  document.getElementById("modalTitle").textContent = skill.name;
  document.getElementById("modalImage").src = skill.image;
  document.getElementById("modalImage").alt = skill.name;
  document.getElementById("modalCategory").textContent = `Category: ${skill.category}`;
  document.getElementById("modalDescription").textContent = skill.description;
  modal.classList.add("show");
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

document.getElementById("modalClose").addEventListener("click", closeModal);
window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

loadBrowseCards();


const filterSelect = document.getElementById("categoryFilter");
const container = document.getElementById("browseContainer");
let allSkills = [];

filterSelect.addEventListener("change", () => {
  const selected = filterSelect.value;
  const filtered = selected === "all"
    ? allSkills
    : allSkills.filter(s => s.category === selected);
  renderSkills(filtered);
});

function renderSkills(skills) {
  container.innerHTML = ""; // Clear
  skills.forEach(skill => {
    const card = document.createElement("section");
    card.className = "item-card";
    card.innerHTML = `
      <figure><img src="${skill.image}" alt="${skill.name}" loading="lazy" /></figure>
      <h4>${skill.name}</h4>
      <p><strong>Category:</strong> ${skill.category}</p>
      <p>${skill.description}</p>
      <button class="learn-more-btn">Learn More</button>
    `;
    card.querySelector(".learn-more-btn").addEventListener("click", e => {
      e.stopPropagation();
      showModal(skill);
    });
    container.appendChild(card);
  });
}

async function loadBrowseCards() {
  try {
    const res = await fetch("data/skills.json");
    if (!res.ok) throw new Error("Failed to fetch skills");
    allSkills = await res.json();
    renderSkills(allSkills);
  } catch (err) {
    console.error("Browse page error:", err);
  }
}*/

/*loadBrowseCards();

const filterSelect = document.getElementById("categoryFilter");
const container = document.getElementById("browseContainer");
let allSkills = [];

filterSelect.addEventListener("change", () => {
  const selected = filterSelect.value;
  const filtered = selected === "all"
    ? allSkills
    : allSkills.filter(s => s.category === selected);
  renderSkills(filtered);
});

function renderSkills(skills) {
  container.innerHTML = ""; // Clear
  skills.forEach(skill => {
    const card = document.createElement("section");
    card.className = "item-card";
    card.innerHTML = `
      <figure><img src="${skill.image}" alt="${skill.name}" loading="lazy" /></figure>
      <h4>${skill.name}</h4>
      <p><strong>Category:</strong> ${skill.category}</p>
      <p>${skill.description}</p>
      <button class="learn-more-btn">Learn More</button>
    `;
    card.querySelector(".learn-more-btn").addEventListener("click", e => {
      e.stopPropagation();
      showModal(skill);
    });
    container.appendChild(card);
  });
}

async function loadBrowseCards() {
  try {
    const res = await fetch("data/skills.json");
    if (!res.ok) throw new Error("Failed to fetch skills");
    allSkills = await res.json();
    renderSkills(allSkills);
  } catch (err) {
    console.error("Browse page error:", err);
  }
}

loadBrowseCards();*/

const container = document.getElementById("cardsContainer");


const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categoryFilter");
let allSkills = [];

function renderSkills(skills) {
  container.innerHTML = "";
  skills.forEach(skill => {
    const card = document.createElement("section");
    card.className = "item-card";
    card.innerHTML = `
      <figure><img src="${skill.image}" alt="${skill.name}" loading="lazy" /></figure>
      <h4>${skill.name}</h4>
      <p><strong>Category:</strong> ${skill.category}</p>
      <p>${skill.description}</p>
      <button class="learn-more-btn">Learn More</button>
    `;
    card.querySelector(".learn-more-btn").addEventListener("click", e => {
      e.stopPropagation();
      showModal(skill);
    });
    container.appendChild(card);
  });
}

function applyFilters() {
  const term = searchInput.value.toLowerCase().trim();
  const category = categorySelect.value;

  const filtered = allSkills.filter(skill => {
    const inCategory = category === "all" || skill.category === category;
    const matchesText =
      skill.name.toLowerCase().includes(term) ||
      skill.description.toLowerCase().includes(term);
    return inCategory && matchesText;
  });

  renderSkills(filtered);
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);

async function loadBrowseCards() {
  try {
    const res = await fetch("https://willims1992.github.io/wdd231/final-project/data/skills.json");
    if (!res.ok) throw new Error("Failed to fetch skills");
    allSkills = await res.json();
    renderSkills(allSkills);
  } catch (err) {
    console.error("Browse page error:", err);
  }
}

loadBrowseCards();

/*function showModal(skill) {
  const modal = document.querySelector(".modal");
  modal.querySelector(".modal-title").textContent = skill.name;
  modal.querySelector(".modal-description").textContent = skill.description;
  modal.classList.add("open");
}

document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("open");
});*/


function showModal(skill) {

  const modal = document.getElementById("modal");
  document.getElementById("modalTitle").textContent = skill.name;
  document.getElementById("modalDescription").textContent = skill.description;
  document.getElementById("modalCategory").textContent = `Category: ${skill.category}`;
  document.getElementById("modalImage").src = skill.image;
  document.getElementById("modalImage").alt = skill.name;
  modal.classList.remove("hidden");
  modal.classList.add("show"); // ✅ This matches my CSS

}

document.getElementById("modalClose").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hidden"); // ✅ Properly hides the modal

});





