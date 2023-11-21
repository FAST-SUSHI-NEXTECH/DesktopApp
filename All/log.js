function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "test" && password === "123") {
        window.location.href = "index.html";
        return false;
    } else {
        alert("Votre dentifiant ou votre mot de passe est incorrect");
        return false;
    }
}