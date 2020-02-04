// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow, ipcMain } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';
import * as fs from 'fs';

let mainWindow: BrowserWindow;
let fileName: string;

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

function isAllowedFileExtension(filename: string) {
  const allowedExtensions = [
    '.apng',
    '.png',
    '.bmp',
    '.gif',
    '.ico',
    '.cur',
    '.jpg',
    '.jpeg',
    '.jfif',
    '.pjpeg',
    '.pjp',
    '.svg',
    '.tif',
    '.tiff',
    '.webp',
  ];

  return allowedExtensions.includes(path.extname(filename).toLowerCase());
}

function filterFileExtensions(filenames: string[]) {
  return (filenames.filter((file) => isAllowedFileExtension(file)));
}

ipcMain.on('opened-file-request', (event, userRequest: boolean, userFile: string) => {
  if (userRequest) {
    fileName = userFile;
  } else if (isDev) {
    fileName = 'sample_images\\gif.gif';
  } else {
    [, fileName] = process.argv;
  }

  event.returnValue = fileName;
});

ipcMain.on('opened-file-directory', (event, userRequest: boolean) => {
  if (isDev && !userRequest) {
    const directory = path.dirname(path.join(__dirname, 'public/sample_images/gif.gif'));

    const filenames = fs.readdirSync(directory);
    const filteredNames = (filterFileExtensions(filenames));
    const files = filteredNames.map((file) => path.join('sample_images', file));

    event.sender.send('opened-file-directory-reply', files);
  } else {
    const directory = path.dirname(fileName);

    const filenames = fs.readdirSync(directory);
    const filteredNames = (filterFileExtensions(filenames));
    const files = filteredNames.map((file) => path.join(directory, file));

    event.sender.send('opened-file-directory-reply', files);
  }
});
