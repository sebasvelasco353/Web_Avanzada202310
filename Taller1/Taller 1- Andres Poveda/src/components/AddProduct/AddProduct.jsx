import React from 'react'
import './AddProduct.css'
import { useContext } from "react";
import { productsContext } from "../../App";
import { addProductContext } from "../../App";

function AddProduct({ handleSetProductList }) {
  
  const actualList = useContext(productsContext)
  const modalAddNewProduct = useContext(addProductContext)

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

  return (

    <div id="add-product" className={modalAddNewProduct?'modalOpen':'modalClosed'}>
        <input id="name" type="text" placeholder="Nombre" />
        <input id="brand" type="text" placeholder="Marca" />
        <input id="price" type="number" placeholder="Precio" />
      <button onClick={() => { handleAddNewProduct() }}> {String()} </button>
    </div>
    
  )
}

export default AddProduct