


const url= 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json' 

const cards = document.querySelector('#cards');

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
}


getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');
    let dateOfBirth = document.createElement('p');
    let dateOfDeath = document.createElement('p');

    

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    dateOfBirth.innerText = `Date of Birth: ${prophet.birthdate}`;
    dateOfDeath.innerText = `Date of Death: ${prophet.death}`; 
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day Prophet`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    card.appendChild(fullName);
    card.appendChild(dateOfBirth);
    card.appendChild(dateOfDeath);
    card.appendChild(portrait);
    cards.appendChild(card);
   
  });
}

getProphetData(url);

