const {token, url} = require('../config.json')
// Api.js
async function chargerDonneesDepuisAPI(webContents) {
    const urlAPI = url;

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
        console.log('Data from API:', donnees);

        // Update the user interface in the renderer process
        webContents.send('update-data', donnees);

    } catch (erreur) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', erreur);
    }
}

module.exports = { chargerDonneesDepuisAPI };