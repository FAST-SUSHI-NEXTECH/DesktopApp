import {ip} from '../conf.js';
// import axios from "axios";
// const axios = axios

export async function getLogin(username, password) {
    let response;
    try {
        const response = await fetch(ip + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        // Vérifiez si la requête a réussi
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        // Extrait les données de la réponse
        const responseData = await response.json();
        alert('Requête effectuée avec succès !');
        return responseData.token;
    } catch (error) {
        console.error(error);
        alert('Une erreur s\'est produite lors de la requête.');
        return null;
    }
}
