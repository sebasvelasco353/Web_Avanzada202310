import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <Home/>
    </div>
  );
}

export default App;
