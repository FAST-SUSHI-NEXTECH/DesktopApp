const fetch = require('node-fetch');
const {token, url_client} = require('../config.json')

async function chargerDonneesDepuisAPI(webContents) {
    const urlAPI = url_client;

    try {
        const reponse = await fetch(urlAPI, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!reponse.ok) {
            throw new Error(`Erreur HTTP! Statut: ${reponse.status}`);
        }

        const donnees = await reponse.json();

        webContents.send('update-data', donnees);

    } catch (erreur) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', erreur);
    }
}

async function loginUser(username, password) {
    const url = 'http://185.255.112.208:3000/login';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(`An error occurred while trying to fetch data: ${error}`);
    }
}

module.exports = { chargerDonneesDepuisAPI, loginUser };