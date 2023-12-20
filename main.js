const { app, BrowserWindow } = require('electron');
const path = require('node:path'); 
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './Main/preload.js'),
        },
    });

    mainWindow.loadFile('./interface/Log.html');

    chargerDonneesDepuisAPI(mainWindow.webContents);
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});