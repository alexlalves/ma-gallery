import React from 'react';
import './ToolbarMenu.css';
import AboutIcon from '../../assets/icons/about_light.svg';
import FullscreenIcon from '../../assets/icons/fullscreen_light.svg';
import OpenfileIcon from '../../assets/icons/openfile_light.svg';
import SettingsIcon from '../../assets/icons/settings_light.svg';
import SlideshowIcon from '../../assets/icons/slideshow_light.svg';

class ToolbarMenu extends React.PureComponent<{}> {
  public render() {
    return (
      <aside className='ToolbarMenu'>
        <ul className='ToolbarMenu__options'>
          <li className='ToolbarMenu__options__option'>
            <img
              className='ToolbarMenu__options__option__image'
              src={OpenfileIcon}
            />
          </li>
          <li className='ToolbarMenu__options__option'>
            <img
              className='ToolbarMenu__options__option__image'
              src={FullscreenIcon}
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

export default ToolbarMenu;
