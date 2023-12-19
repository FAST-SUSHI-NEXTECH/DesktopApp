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
        console.log(donnees);
        webContents.send('update-data', donnees);

    } catch (erreur) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', erreur);
    }
}

module.exports = { chargerDonneesDepuisAPI };