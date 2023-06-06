import './App.css';
import Header from './components/Header/Header'
import List from './components/List/List';
import AddProduct from './components/AddProduct/AddProduct';
import Cart from './components/Cart/Cart';
import Banner from './components/Banner/Banner';
import Payment from './components/Payment/Payment';
import React, { useState, useEffect } from 'react';
import About from './components/About/About';

import { handleGetProductsFromDB } from './firebase.jsx'

//Create context.
export const productsContext = React.createContext();
export const cartContext = React.createContext();
export const addProductContext = React.createContext();
export const isPayingContext = React.createContext();
export const cartModalContext = React.createContext();

function App() {

  //Variable to check if its logged in

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [modalAddProduct, setModalAddProduct] = useState(false);

  //Initial list of the products
  const [productsList, setProductsList] = useState([])

  //Use effect: incia la funcion antres de que se monta el componente
  useEffect(() => {
    // Update the document title using the browser API
    handleGetProductsFromDB().then(result => {
      setProductsList(result)
    });

  });


  //Cobtrols cart modal
  let [cartModal, setCarModal] = useState(false)

  const [cartStatus, setCarStatus] = useState([])

  const [isPaying, setIsPaying] = useState(false)

  
  function handleSetDisplayCart(prop) {
    setCarModal(prop);
  }


  // Displays the add product section
  function handleDisplayAddProduct() {
    setModalAddProduct(!modalAddProduct)
  }

  //TODO: Fix is loggedIn state, not showing properly
  function handleLogIn() {
    setIsLoggedIn(!isLoggedIn);
    console.log("Handle Log In Function: " + isLoggedIn);
    
  }

  //Add a new product to the cart 
  function handleSetProductList(newP) {
    setProductsList([...productsList, newP])
    //console.log(productsList)
  }
 
  //Set new product to the cart
  function handleSetCartStatus(prop) {
    setCarStatus([...cartStatus, prop])
  }
  
//Sets new list of the cart
  function handleChangeCar(prop) {
    setCarStatus([...prop])
  }

  //Cheks if the user is paying
  function handleIsPaying(prop){
    setIsPaying(prop)
  }


  return (
    <div className="App">
      
      <cartModalContext.Provider value={cartModal}>
        <Header handleLogIn={handleLogIn} isLogged={isLoggedIn} handleDisplayAddProduct={handleDisplayAddProduct} handleSetDisplayCart={handleSetDisplayCart}></Header>
        <div id="products-section">
          <productsContext.Provider value={productsList}>
            <cartContext.Provider value={cartStatus}>
              <addProductContext.Provider value={modalAddProduct}>
                <AddProduct handleSetProductList={handleSetProductList} > </AddProduct>
              </addProductContext.Provider>
              <isPayingContext.Provider value={isPaying}>
                <Cart handleIsPaying={handleIsPaying} handleChangeCar={handleChangeCar} ></Cart>
                <Payment handleIsPaying={handleIsPaying}></Payment>
                <Banner></Banner>
                <List productsList={productsList} handleSetCartStatus={handleSetCartStatus}> </List>
              </isPayingContext.Provider>
            </cartContext.Provider>
          </productsContext.Provider>
        </div>
        <About> </About>
        </cartModalContext.Provider>
    </div>
  );
}

export default App;
