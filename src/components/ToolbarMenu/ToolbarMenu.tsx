import React from 'react';
import { connect } from 'react-redux';

import {
  updateAvailableImages,
  updateCurrentImage,
} from '../../store/actions';

import './ToolbarMenu.css';
import { ReactComponent as AboutIcon } from '../../assets/icons/about.svg';
import { ReactComponent as FullscreenIcon } from '../../assets/icons/fullscreen.svg';
import { ReactComponent as OpenfileIcon } from '../../assets/icons/openfile.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as SlideshowIcon } from '../../assets/icons/slideshow.svg';

const electron = window.require('electron');

interface OpenDialogResults {
  canceled: boolean;
  filePaths: string[];
}

interface IProps {
  updateAvailableImages: (files: string[]) => object;
  updateCurrentImage: (file: string) => object;
}

class ToolbarMenu extends React.PureComponent<IProps> {
  public setFullscreen = () => {
    const window = electron.remote.getCurrentWindow();
    const isFullscreen = window.isFullScreen();

    window.setFullScreen(!isFullscreen);
  }

  public updateFiles = (files: string[]) => {
    const { props } = this;
    props.updateAvailableImages(files);
  }

  public updateFile = (file: string) => {
    const { props } = this;
    props.updateCurrentImage(file);
  }

  public openfile = () => {
    const { dialog } = electron.remote;

    dialog.showOpenDialog({
      title: 'Open Image',
      properties: ['openFile'],
      filters: [
        { name: 'All Images', extensions: ['*'] },
        { name: 'Graphics Interchange Format', extensions: ['gif'] },
        { name: 'Joint Photographic Experts Group', extensions: ['jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp'] },
        { name: 'Portable Network Graphics', extensions: ['apng', 'png'] },
        { name: 'Scalable Vector Graphics', extensions: ['svg'] },
        { name: 'Tagged Image File Format', extensions: ['tiff', 'tif'] },
        { name: 'WebP', extensions: ['webp'] },
        { name: 'Windows Bitmap', extensions: ['bmp'] },
        { name: 'Windows Icon', extensions: ['ico'] },
        { name: 'Windows Cursor', extensions: ['cur'] },
      ],
    }).then(({ canceled, filePaths }: OpenDialogResults) => {
      if (!canceled) {
        const fileName = electron.ipcRenderer.sendSync('opened-file-request', true, filePaths[0]);

        electron.ipcRenderer.send('opened-file-directory', true, fileName);
        electron.ipcRenderer.on('opened-file-directory-reply', (_event: any, files: string[]) => {
          this.updateFiles(files);
        });

        this.updateFile(fileName);
      }
    });
  }

  public render() {
    return (
      <aside className='ToolbarMenu'>
        <ul className='ToolbarMenu__options'>
          <li
            className='ToolbarMenu__options__option'
            onClick={this.openfile}
          >
            <OpenfileIcon
              className='ToolbarMenu__options__option__image'
            />
          </li>
          <li
            className='ToolbarMenu__options__option'
            onClick={this.setFullscreen}
          >
            <FullscreenIcon
              className='ToolbarMenu__options__option__image'
            />
          </li>
          <li className='ToolbarMenu__options__option'>
            <SlideshowIcon
              className='ToolbarMenu__options__option__image'
            />
          </li>
          <li className='ToolbarMenu__options__option'>
            <SettingsIcon
              className='ToolbarMenu__options__option__image'
            />
          </li>
          <li className='ToolbarMenu__options__option'>
            <AboutIcon
              className='ToolbarMenu__options__option__image'
            />
          </li>
        </ul>
      </aside>
    );
  }
}

const MappedActions = {
  updateAvailableImages,
  updateCurrentImage,
};

export default connect(
  null,
  MappedActions,
)(ToolbarMenu);
