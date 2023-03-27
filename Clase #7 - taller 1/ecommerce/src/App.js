import logo from './logo.svg';
import './App.css';
import Product from './components/product/Product';
import Modal from './components/modal/Modal'

function App() {
  return (
    <div className="App">
      <Product name="Papas fritas" price = "14000" description = "Pues papas fritas"/>     
      <Modal  name="Papas fritas" price = "14000" description = "Pues papas fritas"/>
    </div>
  );
}

export default App;
