import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';

export const ThemeContext = React.createContext();

function App() {
  const [ darkTheme, setDarkTheme ] = useState(true);
  const onChangeTheme = () => {
    console.log("hello");
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <Header onChangeTheme={onChangeTheme}/>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
