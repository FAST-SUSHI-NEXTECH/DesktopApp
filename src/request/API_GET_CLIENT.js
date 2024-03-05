// Importer les variables de configuration
import {ip} from '../../config.js';

// Fonction pour récupérer les détails du client par son ID
export async function getClientByID(id_user) {

  try {
    const response = await fetch(ip +"/user/id", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({id_user})
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données du client');
    }

    const data = await response.json();
    return (data);
  } catch (error) {
    alert(error);
    console.log(error);
    return null; // Renvoie null en cas d'erreur
}
}
