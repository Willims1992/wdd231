document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("items-container");

    try {
        const response = await fetch("data/items.json");
        const items = await response.json();

        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button onclick="alert('More details coming soon!')">Learn More</button>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading items:", error);
    }
});
