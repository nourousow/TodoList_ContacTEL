// JavaScript (index.js)

document.addEventListener("DOMContentLoaded", function() {
    chargerContacts();

    // Ajouter un gestionnaire d'événements pour le clic sur le bouton "Ajouter un contact"
    document.getElementById("addContactBtn").addEventListener("click", function() {
        // Réinitialiser le formulaire à chaque ouverture du modal
        document.getElementById("addContactForm").reset();
    });
});

function chargerContacts() {
    var contacts = getContacts();
    afficherListeContacts(contacts);
}

function afficherListeContacts(contacts) {
    var contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    contacts.forEach(function(contact, index) {
        var contactItem = document.createElement("li");
        contactItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        contactItem.innerHTML = `
            ${contact.nom} - Téléphone : ${contact.telephone}
            <button type="button" class="btn btn-danger btn-sm" onclick="supprimerContact(${index})">Supprimer</button>
        `;
        contactList.appendChild(contactItem);
    });
}

function ajouterContact() {
    var nouveauContactNom = document.getElementById("nom").value;
    var nouveauContactTelephone = document.getElementById("telephone").value;

    var nouveauContact = {
        nom: nouveauContactNom,
        telephone: nouveauContactTelephone
    };

    var contactsExistants = getContacts();
    contactsExistants.push(nouveauContact);
    setContacts(contactsExistants);

    chargerContacts();

    // Fermer le modal après l'ajout
    $('#addContactModal').modal('hide');
}

function supprimerContact(index) {
    var contacts = getContacts();
    contacts.splice(index, 1);
    setContacts(contacts);
    chargerContacts();
}

function getContacts() {
    var contacts = localStorage.getItem("contacts");
    return contacts ? JSON.parse(contacts) : [];
}

function setContacts(contacts) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}
