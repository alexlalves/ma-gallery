const electron = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;
let fileName;

function createWindow() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    darkTheme: true,
    icon: path.join(__dirname, 'public/favicon.ico'),
    title: 'Ma Gallery',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const url = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
  mainWindow.loadURL(url);
  mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit(); } });
app.on('activate', () => { if (mainWindow === null) { createWindow(); } });

ipcMain.on('opened-file-request', (event) => {
  fileName = isDev ? '/sample_images/gif.gif' : process.argv[1];
  event.returnValue = fileName;
});

ipcMain.on('opened-file-directory', (event) => {
  if (isDev) {
    const directory = path.dirname(path.join(__dirname, 'public/sample_images/gif.gif'));

    const files = fs.readdirSync(directory).map((file) => path.join('sample_images', file));

    event.returnValue = files;
  } else {
    const directory = path.dirname(fileName);

    const files = fs.readdirSync(directory).map((file) => path.join(directory, file));

    event.returnValue = files;
  }
});
