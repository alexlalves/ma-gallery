import React from 'react';
import logo from '../../assets/logo/logo512.png';
import './Toolbar.css';

interface IProps {
  filename: string,
}

class Toolbar extends React.PureComponent<IProps> {
  public render() {
    const { props } = this;

    return (
      <nav className='Toolbar'>
        <div className='Toolbar__branding'>
          <img className='Toolbar__branding__logo' src={logo} alt='' />
          <span className='Toolbar__branding__text'>
            Ma Gallery
          </span>
        </div>
        <div className='Toolbar__filename'>
          { props.filename }
        </div>
        <div className='Toolbar__menu-icon'>
          | | |
        </div>
      </nav>
    );
  }
}

export default Toolbar;
