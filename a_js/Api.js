// Nouvelle fonction pour charger les données depuis l'API
async function chargerDonneesDepuisAPI() {
    const urlAPI = 'http://185.255.112.208:3000/user/client';
    console.log("TOTO")

    try {
        const reponse = await fetch(urlAPI, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Autorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImNoaWVmIiwiaWF0IjoxNzAyODg2NzMwLCJleHAiOjE3MDI5NzMxMzB9.u6KqvrnMkIkCdHTSYhonDjZxSXdqIXC3eMAPv42GSvY'
            },
        });

        if (!reponse.ok) {
            throw new Error(`Erreur HTTP! Statut: ${reponse.status}`);
        }

        const donnees = await reponse.json();

        // Remplacez cette étape par le code nécessaire pour mettre à jour votre interface utilisateur
        mettreAJourInterfaceUtilisateur(donnees);

    } catch (erreur) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', erreur);
    }
}

// Fonction pour mettre à jour l'interface utilisateur avec les données de l'API
// Fonction pour mettre à jour l'interface utilisateur avec les données de l'API
function mettreAJourInterfaceUtilisateur(donnees) {
    const tbody = document.querySelector('#client-list');  // Corrected selector

    // Efface le contenu existant du tableau
    tbody.innerHTML = '';

    // Ajoute chaque utilisateur au tableau
    donnees.forEach(utilisateur => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${utilisateur.id}</td><td>${utilisateur.last_name} ${utilisateur.first_name}</td><td>${utilisateur.email}</td>`;
        tbody.appendChild(row);
    });
}


// Appel de la fonction pour charger les données au chargement de la page
chargerDonneesDepuisAPI();

// Ajouter un écouteur d'événements au lien Liste Client
const listeClientsLink = document.getElementById('listeClientsLink');
listeClientsLink.addEventListener('click', chargerDonneesDepuisAPI);

module.exports = { chargerDonneesDepuisAPI };
