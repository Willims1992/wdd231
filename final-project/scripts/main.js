const visitBox = document.getElementById("visitMessage");
const now = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisit"));
let message = "";

if (!lastVisit) {
  message = "👋 Welcome! Let us know if you have any questions.";
} else {
  const msInDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((now - lastVisit) / msInDay);

  if (days < 1) {
    message = "⏱️ Back so soon? Awesome!";
  } else if (days === 1) {
    message = "📅 You last visited 1 day ago.";
  } else {
    message = `📅 You last visited ${days} days ago.`;
  }
}


visitBox.textContent = message;
visitBox.classList.add("visible");
localStorage.setItem("lastVisit", now);
async function loadSkillCards() {
  try {
    const res = await fetch("https://willims1992.github.io/wdd231/final-project/data/skills.json");
    if (!res.ok) throw new Error("Failed to fetch skill data");

    const skills = await res.json();
    const container = document.getElementById("cardsContainer");

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

    card.querySelector(".learn-more-btn").addEventListener("click", (e) => {
  e.stopPropagation(); // prevent bubbling if card click also has modal
  showModal(skill);
});



      container.appendChild(card);
      card.addEventListener("click", () => showModal(skill));

    });
  } catch (err) {
    console.error("Error loading skills:", err);
  }
}



loadSkillCards();
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
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


