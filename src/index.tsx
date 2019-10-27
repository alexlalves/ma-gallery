import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';

const { ipcRenderer } = window.require('electron');

const fileName = ipcRenderer.sendSync('opened-file-request');
const availableFiles = ipcRenderer.sendSync('opened-file-directory');

ReactDOM.render(<App openedFile={fileName} files={availableFiles} />, document.getElementById('root'));
