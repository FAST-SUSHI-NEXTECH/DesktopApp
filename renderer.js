document.getElementById('logout').addEventListener('click', closeWindow);

function closeWindow() {
    let newWindow = open(location, '_self');
    //location permet d'idendifier le path pour que le bouton puisse s'exécuter
    newWindow.close();
}