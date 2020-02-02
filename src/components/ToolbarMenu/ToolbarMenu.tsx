import React from 'react';
import { connect } from 'react-redux';

import { updateAvailableImages } from '../../store/actions';

import './ToolbarMenu.css';
import AboutIcon from '../../assets/icons/about_light.svg';
import FullscreenIcon from '../../assets/icons/fullscreen_light.svg';
import OpenfileIcon from '../../assets/icons/openfile_light.svg';
import SettingsIcon from '../../assets/icons/settings_light.svg';
import SlideshowIcon from '../../assets/icons/slideshow_light.svg';

const electron = window.require('electron');

interface OpenDialogResults {
  canceled: boolean;
  filePaths: string[];
}

interface IProps {
  updateAvailableImages: (files: string[]) => object;
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
        const availableFiles = electron.ipcRenderer.sendSync('opened-file-directory', true);

        console.log(fileName);
        console.log(availableFiles);

        this.updateFiles(availableFiles);
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
            <img
              className='ToolbarMenu__options__option__image'
              src={OpenfileIcon}
              alt='Open file'
            />
          </li>
          <li
            className='ToolbarMenu__options__option'
            onClick={this.setFullscreen}
          >
            <img
              className='ToolbarMenu__options__option__image'
              src={FullscreenIcon}
              alt='Full screen'
            />
          </li>
          <li className='ToolbarMenu__options__option'>
            <img
              className='ToolbarMenu__options__option__image'
              src={SlideshowIcon}
            />
          </li>
          <li className='ToolbarMenu__options__option'>
            <img
              className='ToolbarMenu__options__option__image'
              src={SettingsIcon}
            />
          </li>
          <li className='ToolbarMenu__options__option'>
            <img
              className='ToolbarMenu__options__option__image'
              src={AboutIcon}
            />
          </li>
        </ul>
      </aside>
    );
  }
}

export default connect(
  null,
  { updateAvailableImages },
)(ToolbarMenu);
