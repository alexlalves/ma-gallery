import React from 'react';
import logo from '../../assets/logo/logo512.png';
import Toolbar from '../../components/Toolbar/Toolbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Toolbar />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload..
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
