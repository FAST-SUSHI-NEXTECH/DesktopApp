const { chargerDonneesDepuisAPI } = require('./Api_Post.js');

async function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Créer un objet avec les données de l'utilisateur
    var userData = {
        username: username,
        password: password
    };

    const response = await chargerDonneesDepuisAPI(userData);

    if (response.ok) {
        window.location.href = "../html/Log.html";
        return false;
    } else {
        alert("Votre identifiant ou votre mot de passe est incorrect");
        return false;
    }
}