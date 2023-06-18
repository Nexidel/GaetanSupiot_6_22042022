function displayModal() {
    const contact_modal = document.getElementById("contact_modal");
	contact_modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const form = document.getElementById('modalForm');

// Ajoutez un gestionnaire d'événement pour l'événement de soumission du formulaire
form.addEventListener('submit', function (event) {
    // Empêchez l'envoi du formulaire
    event.preventDefault();
    // Réinitialisez les champs du formulaire
    form.reset();
    // Fermez la modal (vous devez avoir votre propre code pour cela)
    closeModal();
});


