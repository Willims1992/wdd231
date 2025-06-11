const weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.8594&lon=6.8679&units=metric&appid=81a2d962ae620e6d346c70ee33c924ff';
const membersURL = 'https://willims1992.github.io/wdd231/chamber/data/members.json';

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();

        // Current weather
        const current = data.list[0];
        document.querySelector('#current-temp').innerHTML = `${current.main.temp}&deg;C`;
        document.querySelector('#weather-icon').src = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
        document.querySelector('#weather-icon').alt = current.weather[0].description;
        document.querySelector('figcaption').textContent = current.weather[0].description;

        // 3-day forecast
        const forecastContainer = document.querySelector('#forecast');
        forecastContainer.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const forecast = data.list[i * 8];
            const day = new Date(forecast.dt_txt).toLocaleDateString(undefined, { weekday: 'long' });
            forecastContainer.innerHTML += `
                <div class="forecast-day">
                    <h4>${day}</h4>
                    <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">
                    <p>${forecast.main.temp}&deg;C - ${forecast.weather[0].description}</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Weather fetch failed:', error);
    }
}

// Fetch members data
async function fetchMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Fetched JSON Data:", data); // Debugging step
        displaySpotlights(data);
    } catch (error) {
        console.error('Fetch error:', error);
        document.querySelector('#spotlights').innerHTML = `<p>Unable to load members. Please check the URL or try again later.</p>`;
    }
}

// Function to display spotlight members
function displaySpotlights(data) {
    const spotlightContainer = document.querySelector('#spotlights');

    // Filter gold and silver members
    const eligibleMembers = data.members.filter(member => member.membership_level === 3 || member.membership_level === 2);

    // Randomly select 2 or 3 members
    const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    spotlightContainer.innerHTML = selectedMembers.map(member => `
        <div class="spotlight-card">
            <img src="${member.icon}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="membership">${member.membership_level === 3 ? 'Gold' : 'Silver'} Member</p>
        </div>
    `).join('');
}

// Load weather & spotlight members on page load
window.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchMembers();
});