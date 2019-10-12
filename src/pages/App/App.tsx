import React from 'react';
import logo from '../../assets/logo/logo512.png';
import _furryImage from '../../assets/sample_images/furry.jpg';
import _hentaiImage from '../../assets/sample_images/hentai.jpg';
import _transImage from '../../assets/sample_images/transgender.jpg';
import _typhlosionImage from '../../assets/sample_images/typhlosion.jpg';
import _typhlosionImageTwo from '../../assets/sample_images/typhlosion_2.png';
import Toolbar from '../../components/Toolbar/Toolbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='App__toolbar'>
        <Toolbar/>
      </div>
      <div className='App__images'>
        <img
          alt='logo a'
          className='App__images__image App__images__image--main'
          src={_typhlosionImageTwo}
        />
        <img
          alt='logo a'
          className='App__images__image App__images__image--background'
          src={_typhlosionImageTwo}
        />
      </div>
    </div>
  );
}

export default App;
