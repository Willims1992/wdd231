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


