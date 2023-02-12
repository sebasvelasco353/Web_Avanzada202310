import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Footer} from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer value='Test'/>
    </div>
  );
}

export default App;
