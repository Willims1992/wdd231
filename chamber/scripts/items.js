const url = 'https://willims1992.github.io/wdd231/chamber/data/items.json'; // URL to fetch discover data

const discoverCard = document.querySelector("#itemsContainer");

async function fetchDiscover() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    console.log("Fetched JSON Data:", data); // Debugging step
    displayDiscover(data.items);
  } catch (error) {
    console.error('Fetch error:', error);
    discoverCard.innerHTML = `<p>Unable to load discover information. Please check the URL or try again later.</p>`;
  }
}

c