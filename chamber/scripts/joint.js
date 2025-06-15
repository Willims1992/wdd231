function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.showModal();
    }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.close();
    }
}

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll("dialog").forEach(modal => modal.close());
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop(); // Get current file name

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Highlight current page
        } else {
            link.classList.remove("active");
        }
    });
});


document.querySelector("form").addEventListener("submit", function () {
    let timestamp = new Date().toISOString(); // Get current timestamp
    document.getElementById("timestamp").value = timestamp;
});




