import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import Store from './store';

const { ipcRenderer } = window.require('electron');

const fileName = ipcRenderer.sendSync('opened-file-request', false);
const availableFiles = ipcRenderer.sendSync('opened-file-directory', false);

ReactDOM.render(
  <Provider store={store}>
    <App
      openedFile={fileName}
      files={availableFiles}
    />
  </Provider>,
  document.getElementById('root'),
);
