const url = 'http://127.0.0.1:5500/chamber/data/members.json'; // Path to the JSON file containing member data
const membersCard = document.querySelector('#membersCard');
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");


async function fetchMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log("Raw JSON Data:", data); // Debugging step
    displayMembers(data.members);
  } catch (error) {
    console.error('Fetch error:', error);
    membersCard.innerHTML = `<p>Unable to load members at this time.</p>`;
  }
}

function displayMembers(members) {
  members.forEach(member => {
    let card = document.createElement('section');
    card.classList.add('member-card');

    let name = document.createElement('h3');
    name.textContent = member.name;

    let address = document.createElement('p');
    address.textContent = `Address: ${member.address}`;

    let phone = document.createElement('p');
    phone.textContent = `Phone: ${member.phone}`;

    let website = document.createElement('a');
    website.href = member.website;
    website.target = "_blank";
    website.textContent = "Visit Website";

    let level = document.createElement('p');
    level.classList.add('membership-level');
    level.textContent = `Membership Level: ${getMembershipLevel(member.membership_level)}`;

    let image = document.createElement('img');
    image.setAttribute('src', member.icon);

    image.setAttribute('alt', `Logo of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '200');
    image.setAttribute('height','80')

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(level);

    membersCard.appendChild(card);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 1: return 'Member';
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Unknown';
  }
}

fetchMembers();
// This code fetches member data from a JSON file and displays it in a structured format on the webpage.
// It handles errors gracefully and provides a fallback message if the data cannot be loaded.

gridbutton.addEventListener("click", () => {
  membersCard.classList.add("grid");
  membersCard.classList.remove("list");
  
});

listbutton.addEventListener("click", showList ) 
function showList() {
  membersCard.classList.add("list");
  membersCard.classList.remove("grid");
}