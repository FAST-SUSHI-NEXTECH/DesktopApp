// Importer les variables de configuration
import { token, url_client } from '../../config.js';

// Fonction pour récupérer les détails du client par son ID
export async function getClientByID(id) {
  try {
    const response = await fetch(`${url_client}/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données du client');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rejeter l'erreur pour la gérer à l'extérieur
  }
}
