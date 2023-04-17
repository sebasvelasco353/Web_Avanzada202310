import './App.css';
import Header from './components/Header/Header'
import List from './components/List/List';
import React, { useState } from 'react';
import AddProduct from './components/AddProduct/AddProduct';
import Cart from './components/Cart/Cart';
import Banner from './components/Banner/Banner';
import Payment from './components/Payment/Payment';

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
  const [productsList, setProductsList] = useState([
    {
      name: "Tinte Rubio",
      brand: "Nouvelle",
      price: 20000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      name: "Shampo Negro",
      brand: "Sephora",
      price: 15000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
      
    },
    {
      name: "Aclarador Natural",
      brand: "Igora",
      price: 45000,
      avaliblde: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      name: "Gel Capilar",
      brand: "Sephora",
      price: 5000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      name: "Aclarador Artificial",
      brand: "Color One",
      price: 25000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
    }])

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
        </cartModalContext.Provider>
    </div>
  );
}

export default App;
