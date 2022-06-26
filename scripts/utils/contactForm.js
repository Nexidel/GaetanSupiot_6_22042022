function displayModal() {
    const inputModal = document.getElementById("champ_modal");
    // Add attribute to label & input prenom
    inputModal.children[0].setAttribute('for', 'prenom')
    inputModal.children[1].setAttribute('type', 'text');
    inputModal.children[1].setAttribute('name', 'prenom');

    // Create Label Input nom
    const labelNom = document.createElement('label');
    labelNom.setAttribute('for', 'nom');
    labelNom.textContent = "Nom";
    const inputNom = document.createElement('input');
    inputNom.setAttribute('type', 'text');
    inputNom.setAttribute('name', 'nom');
    inputModal.appendChild(labelNom);
    inputModal.appendChild(inputNom);
    // Create Label Input email
    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'email');
    labelEmail.textContent = "Email";
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputModal.appendChild(labelEmail);
    inputModal.appendChild(inputEmail);
    // Create Label Input message
    const labelMessage = document.createElement('label');
    labelMessage.setAttribute('for', 'message');
    labelMessage.textContent = "Message";
    const inputMessage = document.createElement('textarea');
    inputMessage.setAttribute('id', 'message');
    inputMessage.setAttribute('name', 'message');
    inputMessage.setAttribute('wrap', 'soft');
    inputModal.appendChild(labelMessage);
    inputModal.appendChild(inputMessage);
    const message = document.getElementById("message");
    message.style.width = "100%";

    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

