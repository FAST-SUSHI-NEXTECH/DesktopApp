// Api.js
async function chargerDonneesDepuisAPI(webContents) {
    const urlAPI = 'http://185.255.112.208:3000/user/client';
    const authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwidXNlcm5hbWUiOiJhZG1pbiIsInBlcm0iOjMsImlhdCI6MTcwNjI1ODEzMSwiZXhwIjoxNzA2MzQ0NTMxfQ._xJcPfNewrBI3N5dDUZF5QwL0s5wr4ozi1gZ3LAOyK8';

    try {
        const reponse = await fetch(urlAPI, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': authToken,
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
