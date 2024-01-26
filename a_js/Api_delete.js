const apiUrl = 'http://185.255.112.208:3000/user/delete';

// Remplacez 'string' par le nom d'utilisateur que vous souhaitez supprimer
const usernameToDelete = 'username';

fetch(apiUrl, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: usernameToDelete
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Suppression réussie :', data);
    // Faites quelque chose après la suppression réussie
  })
  .catch(error => {
    console.error('Erreur lors de la suppression :', error);
  });
