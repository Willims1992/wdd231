// confirmation.js

const params = new URLSearchParams(window.location.search);

document.getElementById("skillname").textContent = params.get("skillname");
document.getElementById("category").textContent = params.get("category");
document.getElementById("description").textContent = params.get("description");
document.getElementById("fullname").textContent = params.get("fullname");
document.getElementById("email").textContent = params.get("email");

const name = params.get("fullname");
document.getElementById("thankYou").textContent = `Thank you, ${name}, your skill has been posted!`;
