import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import Store from './store';
import {
  updateAvailableImages,
  updateCurrentImage,
} from './store/actions';

const { ipcRenderer } = window.require('electron');

const fileName = ipcRenderer.sendSync('opened-file-request', false);

ipcRenderer.send('opened-file-directory', false);
ipcRenderer.on('opened-file-directory-reply', (_event: any, files: string[]) => {
  Store.dispatch(updateAvailableImages(files));
});

Store.dispatch(updateCurrentImage(fileName));

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
