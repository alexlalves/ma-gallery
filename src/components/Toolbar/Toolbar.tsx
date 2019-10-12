import React from 'react';
import logo from '../../assets/logo/logo512.png';
import './Toolbar.css';

const App: React.FC = () => {
  return (
    <nav className='Toolbar'>
      <div className='Toolbar__branding'>
        <img className='Toolbar__branding__logo' src={logo}/>
        <span className='Toolbar__branding__text'>
          Ma Gallery
        </span>
      </div>
      <div>
        file_name.png
      </div>
      <div>
        Something Else
      </div>
    </nav>
  );
}

export default App;
