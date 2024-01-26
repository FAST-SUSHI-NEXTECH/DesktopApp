

document.getElementById('logout').addEventListener('click', closeWindow);

function closeWindow() {
    let newWindow = open(location, '_self');
    //location permet d'idendifier le path pour que le bouton puisse s'exécuter
    newWindow.close();
}

import { ipcRenderer } from 'electron';

ipcRenderer.on('update-data', (event, donnees) => {
  const clientList = document.getElementById('client-list');

  donnees.forEach((client) => {
    const row = document.createElement('tr');

    // Ajouter les colonnes avec les données du client
    const columns = ['id_user', 'last_name', 'first_name', 'tel', 'email'];
    columns.forEach((column) => {
      const cell = document.createElement('td');
      cell.textContent = client[column];
      row.appendChild(cell);
    });

    // Ajouter la ligne à la table
    clientList.appendChild(row);
  });
});
