import { displayVisitMessage } from "./visitTracker.mjs";
import { loadSkills } from "./skillLoader.mjs";
import { showModal, closeModal } from "./modal.mjs";

// Visit message logic
displayVisitMessage();

// Fetch + display featured skill cards
loadSkills(
  "https://willims1992.github.io/wdd231/final-project/data/skills.json",
  "cardsContainer",
  showModal
);

// Close modal
document.getElementById("modalClose").addEventListener("click", closeModal);
window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
