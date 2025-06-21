export function showModal(skill) {
  const modal = document.getElementById("modal");
  document.getElementById("modalTitle").textContent = skill.name;
  document.getElementById("modalImage").src = skill.image;
  document.getElementById("modalImage").alt = skill.name;
  document.getElementById("modalCategory").textContent = `Category: ${skill.category}`;
  document.getElementById("modalDescription").textContent = skill.description;
  modal.classList.remove("hidden");
  modal.classList.add("show");
}

export function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hidden");
}
