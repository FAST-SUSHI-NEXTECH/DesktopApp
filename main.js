// main.js
const { app, BrowserWindow } = require('electron');
const path = require('node:path'); 
const { chargerDonneesDepuisAPI } = require('./a_js/Api');

const createWindow = () => {
    // Enable tabs
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadFile('./html/Log.html');

    // Call the imported function
    chargerDonneesDepuisAPI(mainWindow.webContents);
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
    chargerDonneesDepuisAPI(mainWindow.webContents);
});
