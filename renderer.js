// renderer.js (ou main.js)
const { ipcRenderer } = require('electron');

// Écoute de l'événement 'update-data' envoyé depuis le processus principal (main.js)
ipcRenderer.on('update-data', (event, donnees) => {
    // Obtient la référence du tbody dans le tableau
    const tbody = document.querySelector('#client-list');

    // Efface le contenu existant du tableau
    tbody.innerHTML = '';

    // Ajoute chaque utilisateur au tableau
    donnees.forEach(utilisateur => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${utilisateur.id_user}</td><td>${utilisateur.last_name}</td><td>${utilisateur.first_name}</td><td>${utilisateur.tel}</td><td>${utilisateur.email}</td>`;
        tbody.appendChild(row);
    });
});

// Écoute de l'événement click sur le bouton Liste Clients
const listeClientsLink = document.getElementById('listeClientsLink');
listeClientsLink.addEventListener('click', () => {
    // Vous pouvez ajouter ici le code pour effectuer des actions lorsque le bouton est cliqué
    // Par exemple, charger les données depuis l'API
    charger
});


document.getElementById('logout').addEventListener('click', closeWindow);

function closeWindow() {
    let newWindow = open(location, '_self');
    //location permet d'idendifier le path pour que le bouton puisse s'exécuter
    newWindow.close();
}