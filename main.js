import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import Api from './a_js/Api_get.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createWindow = () => {
    // Enable tabs
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadFile('./html/Log.html');

    Api.chargerDonneesDepuisAPI(mainWindow.webContents);
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});