document.addEventListener('DOMContentLoaded', function () {
    // Ajoutez un gestionnaire d'événements pour le bouton "Supprimer le Client"
    deleteClientBtn.addEventListener('click', function (username) {
        // Récupérer l'identifiant du client sélectionné depuis le stockage local
        const selectedClientId = localStorage.getItem('selectedClientId');
    
        // Demander confirmation à l'utilisateur
        const isConfirmed = window.confirm('Voulez-vous vraiment supprimer ce client ?');
        // Si l'utilisateur confirme la suppression
        if (isConfirmed) {
            // récupère la configuration dans le fichier config.json
            fetch('../../../config.json')
                .then(response => response.json())
                .then(config => {
                    // Effectuer une requête DELETE vers l'URL du client spécifié
                    fetch(`${config.url_delete}`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${config.token}`,
                            'content-type' : 'application/json'
                        },
                        data: {
                            "username": username
                        }
                    })
                    .then(response => {
                        // Vérifier si la suppression a réussi
                        if (response.ok) {
                            // Suppression réussie, peut-être afficher un message ou effectuer d'autres actions nécessaires
                            console.log('Le client a été supprimé avec succès.');
                            // Rediriger vers une autre page ou effectuer d'autres actions après la suppression
                            window.location.href = 'liste-clients.html';
                        } else {
                            // La suppression a échoué, afficher un message d'erreur
                            console.error('La suppression du client a échoué.');
                        }
                    })
                    .catch(error => {
                        // Gérer les erreurs
                        console.error('Erreur lors de la suppression du client :', error);
                    });
                })
                .catch(error => {
                    // Gérer les erreurs de récupération de la configuration
                    console.error('Erreur lors de la récupération de la configuration :', error);
                });
        }
    });
});