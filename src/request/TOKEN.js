import { url_login, username, password } from '../../config.js';

const url = url_login;

fetch(url_login, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": username,
    "password": password
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
  
  const mergedData = {...config, ...data};
  
  // Écrivez les données fusionnées dans le fichier de configuration si nécessaire
})
.catch((error) => {
  console.error('Error:', error);
});
