// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow, ipcMain } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';
import * as fs from 'fs';

let mainWindow: BrowserWindow;

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
  let filename: string;

  if (userRequest) {
    filename = userFile;
  } else if (isDev) {
    filename = 'sample_images\\gif.gif';
  } else if (process.argv[1]) {
    [, filename] = process.argv;
  } else {
    const picturesPath = app.getPath('pictures');

    const filenames = fs.readdirSync(picturesPath);
    const filteredNames = (filterFileExtensions(filenames));
    const firstFile = path.join(picturesPath, filteredNames[0]);

    filename = firstFile;
  }

  event.returnValue = filename;
});

ipcMain.on('opened-file-directory', (event, userRequest: boolean, filename: string) => {
  if (isDev && !userRequest) {
    const directory = path.dirname(path.join(__dirname, 'public/sample_images/gif.gif'));

    const filenames = fs.readdirSync(directory);
    const filteredNames = (filterFileExtensions(filenames));
    const files = filteredNames.map((file) => path.join('sample_images', file));

    event.sender.send('opened-file-directory-reply', files);
  } else {
    const directory = path.dirname(filename);

    const filenames = fs.readdirSync(directory);
    const filteredNames = (filterFileExtensions(filenames));
    const files = filteredNames.map((file) => path.join(directory, file));

    event.sender.send('opened-file-directory-reply', files);
  }
});
