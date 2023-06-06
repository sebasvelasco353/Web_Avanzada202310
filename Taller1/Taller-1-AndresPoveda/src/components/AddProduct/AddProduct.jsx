import React from 'react'
import './AddProduct.css'
import { useContext } from "react";
import { productsContext } from "../../App";
import { addProductContext } from "../../App";
import { db } from "../../firebase.jsx"
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"


function AddProduct({ handleSetProductList, modalStateProp }) {
  
  let modalState = modalStateProp;
  const actualList = useContext(productsContext)
  const modalAddNewProduct = useContext(addProductContext)

  
  //This function is in charge to check either if 
  //the props has a value or no in order to set
  // a fixed display for the section
  
  function handleStoryBookState () {
    if (modalStateProp === "" || modalStateProp === undefined) {
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

  async function handleAddNewProduct() {
    try {
      let product = {
        name: document.getElementById("name").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value,
        avalible: "yes",
        id: Math.floor(Math.random() * 10000) + 1
      }


      const docRef = await setDoc(doc(db, "products", product.name), {
        name: product.name,
        brand: product.brand,
        price: product.price,
        avalible: true,
        id: product.id
      });


      const hideSection = document.getElementById("add-product").style.display = "none";
      console.log("Document written with name:", product.name)

    } catch (e) {
      console.error("Error adding document", e)
    }
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