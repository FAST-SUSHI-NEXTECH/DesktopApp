import { ipcRenderer } from 'electron';

document.getElementById('logout').addEventListener('click', closeWindow);

function closeWindow() {
    let newWindow = open(location, '_self');
    newWindow.close();
}



ipcRenderer.on('update-data', (event, donnees) => {
  const clientList = document.getElementById('client-list');

  donnees.forEach((client) => {
    const row = document.createElement('tr');
     const columns = ['id_user', 'last_name', 'first_name', 'tel', 'email'];
    columns.forEach((column) => {
      const cell = document.createElement('td');
      cell.textContent = client[column];
      row.appendChild(cell);
    });
    clientList.appendChild(row);
  });
});