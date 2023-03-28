import logo from './logo.svg';

import NavBar from './components/NavBar';


import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/Home" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
