function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "test" && password === "1") {
        window.location.href = "./index.html";
        return false;
    } else {
        alert("Votre identifiant ou votre mot de passe est incorrect");
        return false;
    }
}