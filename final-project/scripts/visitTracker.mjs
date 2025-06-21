export function displayVisitMessage() {
  const visitBox = document.getElementById("visitMessage");
  const now = Date.now();
  const lastVisit = Number(localStorage.getItem("lastVisit"));
  let message = "";

  if (!lastVisit) {
    message = "👋 Welcome! Let us know if you have any questions.";
  } else {
    const msInDay = 1000 * 60 * 60 * 24;
    const days = Math.floor((now - lastVisit) / msInDay);
    message = days < 1
      ? "⏱️ Back so soon? Awesome!"
      : `📅 You last visited ${days} day${days !== 1 ? "s" : ""} ago.`;
  }

  visitBox.textContent = message;
  visitBox.classList.add("visible");
  localStorage.setItem("lastVisit", now);
}
