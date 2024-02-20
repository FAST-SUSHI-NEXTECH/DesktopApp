document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Chargement de la configuration depuis config.js
        const configResponse = await fetch('../../config.js');
        const config = await configResponse.js();

        // Récupération des données des clients depuis le serveur
        const response = await fetch(config.url_client, {
            method: 'GET',
            headers: {
                'Accept': 'application/js',
                'Authorization': `Bearer ${config.token}`,
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des clients');
        }

        const data = await response.js();

        // Affichage initial de la liste des clients
        updateClientList(data);

        // Sélection de l'élément d'entrée de recherche
        const searchInput = document.getElementById('searchInput');

        // Ajout d'un gestionnaire d'événements pour l'événement "input" sur la barre de recherche
        searchInput.addEventListener('input', function () {
            // Récupération de la valeur saisie dans la barre de recherche
            const searchTerm = this.value.trim().toLowerCase();
            // Filtrage des données des clients en fonction du terme de recherche
            const filteredClients = data.filter(client =>
                client.id_user.toString().toLowerCase().includes(searchTerm) || // Recherche par ID utilisateur
                client.last_name.toLowerCase().includes(searchTerm) ||
                client.first_name.toLowerCase().includes(searchTerm)
            );
            // Mise à jour de l'affichage de la liste des clients avec les résultats filtrés
            updateClientList(filteredClients);
        });

    } catch (error) {
        console.error('Error:', error);
    }
});

// Fonction pour mettre à jour la liste des clients dans le DOM
function updateClientList(clients) {
    const clientList = document.getElementById('client-list');
    if (!clientList) {
        console.error("L'élément avec l'ID 'client-list' n'a pas été trouvé.");
        return;
    }
    clientList.innerHTML = '';

    // Ajout des clients à la table
    clients.forEach((client) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${client.id_user}</td>
            <td><a href="#" class="client-link" data-client-id="${client.id_user}">${client.last_name}</a></td>
            <td>${client.first_name}</td>
            <td>${client.tel}</td>
            <td>${client.email}</td>
            <td>${client.username}</td>
        `;
        clientList.appendChild(tr);

        // Ajout d'un gestionnaire d'événements pour le lien client
        const clientLink = tr.querySelector('.client-link');
        clientLink.addEventListener('click', function(event) {
            event.preventDefault();
            const clientId = this.getAttribute('data-client-id');
            // Stockage de l'ID du client sélectionné dans le stockage local
            localStorage.setItem('selectedClientId', clientId);
            // Redirection vers la page de détails du client
            window.location.href = 'Fiche-client.html';
        });
    });
}
