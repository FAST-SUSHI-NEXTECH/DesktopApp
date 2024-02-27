export function updateClientList(clients) {
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
            <td><a href="#" class="client-link" data-client-id="${client.id_user}">${client.last_name}</a></td>
            <td>${client.first_name}</td>
            <td>${client.tel}</td>
            <td>${client.email}</td>
            <td>${client.username}</td>
        `;
        clientList.appendChild(tr);

        const clientLink = tr.querySelector('.client-link');
        clientLink.addEventListener('click', function (event) {
            event.preventDefault();
            const clientId = this.getAttribute('data-client-id');
            localStorage.setItem('selectedClientId', clientId);
            window.location.href = 'Fiche-client.html';
        });
    });
}
