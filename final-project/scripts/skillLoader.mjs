export async function loadSkills(jsonUrl, containerId, showModal) {
  try {
    const res = await fetch(jsonUrl);
    if (!res.ok) throw new Error("Failed to fetch skills");

    const skills = await res.json();
    const container = document.getElementById(containerId);

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
      card.addEventListener("click", () => showModal(skill));
    });
  } catch (err) {
    console.error("Error loading skills:", err);
  }
}
