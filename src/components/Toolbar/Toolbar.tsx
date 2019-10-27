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
          <img className='Toolbar__branding__logo' src={logo} alt='aaa' />
          <span className='Toolbar__branding__text'>
            Ma Gallery
          </span>
        </div>
        <div>
          { props.filename }
        </div>
        <div>
          | | |
        </div>
      </nav>
    );
  }
}

export default Toolbar;
