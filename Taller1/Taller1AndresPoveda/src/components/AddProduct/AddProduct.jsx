import React from 'react'
import './AddProduct.css'
import { useContext } from "react";
import { productsContext } from "../../App";
import { addProductContext } from "../../App";

function AddProduct({ handleSetProductList, modalStateProp }) {
  
  let modalState = modalStateProp;
  const actualList = useContext(productsContext)
  const modalAddNewProduct = useContext(addProductContext)

  
  //This function is in charge to check either if 
  //the props has a value or no in order to set
  // a fixed display for the section
  
  function handleStoryBookState () {
    if (modalStateProp === "" || modalStateProp === undefined) {
      console.log("El modal esta vacioooo")
      if (modalAddNewProduct === true) {
        modalState = 'modalOpen';
      } else if (modalAddNewProduct === false) {
        modalState = 'modalClosed';
      }
    } else {
      if (modalStateProp === true) {
        modalState = 'modalOpen';
      } else if (modalStateProp === false) {
        modalState = 'modalClosed';
      }

    }
  }
  
  function handleAddNewProduct() {
    
    let myNewProduct = {
      name: document.getElementById("name").value,
      brand: document.getElementById("brand").value,
      price: document.getElementById("price").value,
      avalible: "yes",
      id: Math.floor(Math.random() * 10000) + 1
    }

    let newArr = actualList;
    newArr.push(myNewProduct);

    console.log(newArr)

    handleSetProductList(myNewProduct);

    const hideSection = document.getElementById("add-product").style.display = "none";
  }

  handleStoryBookState();
  return (

    <div id="add-product" className={modalState}>
        <input id="name" type="text" placeholder="Nombre" />
        <input id="brand" type="text" placeholder="Marca" />
        <input id="price" type="number" placeholder="Precio" />
      <button onClick={() => { handleAddNewProduct() }}> Añade un producto </button>
    </div>
    
  )
}

export default AddProduct