
const url = 'https://willims1992.github.io/wdd231/chamber/data/items.json'; 

async function fetchItems() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Fetched JSON Data:", data);
    displayItems(data.items);
  } catch (error) {
    console.error('Fetch error:', error);
    document.querySelector("#itemsContainer").innerHTML = 
      `<p>Unable to load discover information. Please check the URL or try again later.</p>`;
  }
}

function displayItems(items) {
  const itemsContainer = document.querySelector("#itemsContainer");
  
  items.forEach(item => {
    let itemCard = document.createElement('div');
    itemCard.classList.add('item-card');

    let itemTitle = document.createElement('h2');
    itemTitle.textContent = item.name;

    let itemAddress = document.createElement('address');
    itemAddress.textContent = item.address;

    let description = document.createElement('p');
    description.textContent = item.description;

    let figure = document.createElement('figure');
    let itemImage = document.createElement('img');
    itemImage.setAttribute('src', item.image);
    itemImage.setAttribute('alt', `Image of ${item.name}`);
    itemImage.setAttribute('loading', 'lazy');
    itemImage.setAttribute('width', '300');
    itemImage.setAttribute('height', '200');
    figure.appendChild(itemImage);

    let button = document.createElement('button');
    button.textContent = "Learn More";

    itemCard.appendChild(itemTitle);
    itemCard.appendChild(figure);
    itemCard.appendChild(itemAddress);
    itemCard.appendChild(description);
    itemCard.appendChild(button);

    console.log("Created Card:", itemCard); // Debugging check
    itemsContainer.appendChild(itemCard);
  });
}

document.addEventListener("DOMContentLoaded", fetchItems);
