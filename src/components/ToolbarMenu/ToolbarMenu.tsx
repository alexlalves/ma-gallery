import React from 'react';
import './ToolbarMenu.css';

class ToolbarMenu extends React.PureComponent<{}> {
  public render() {
    return (
      <aside className='ToolbarMenu'>
        <ul>
          <li>
            Open File
          </li>
          <li>
            Slideshow
          </li>
          <li>
            Fullscreen
          </li>
          <li>
            Settings
          </li>
          <li>
            About
          </li>
        </ul>
      </aside>
    );
  }
}

export default ToolbarMenu;
