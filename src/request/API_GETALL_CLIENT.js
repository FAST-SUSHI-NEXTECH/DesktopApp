import { token, url_client} from '../../config.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch(url_client, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des clients');
        }

        const data = await response.json();

        updateClientList(data);

        const searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.trim().toLowerCase();
            const filteredClients = data.filter(client =>
                client.id_user.toString().toLowerCase().includes(searchTerm) ||
                client.last_name.toLowerCase().includes(searchTerm) ||
                client.first_name.toLowerCase().includes(searchTerm)
            );
            updateClientList(filteredClients);
        });

    } catch (error) {
        console.error('Error:', error);
    }
});

function updateClientList(clients) {
    const clientList = document.getElementById('client-list');
    if (!clientList) {
        console.error("L'élément avec l'ID 'client-list' n'a pas été trouvé.");
        return;
    }
    clientList.innerHTML = '';

    clients.forEach((client) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${client.id_user}</td>
            <td><a href="Fiche_client.html?id=${client.id_user}" class="client-link">${client.last_name}</a></td>
            <td>${client.first_name}</td>
            <td>${client.tel}</td>
            <td>${client.email}</td>
            <td>${client.username}</td>
        `;
        clientList.appendChild(tr);

        const clientLink = tr.querySelector('.client-link');
        clientLink.addEventListener('click', function(event) {
            event.preventDefault();
            const clientId = this.getAttribute('data-client-id');
            localStorage.setItem('selectedClientId', clientId);
            window.location.href = 'Fiche-client.html';
        });
    });
}
