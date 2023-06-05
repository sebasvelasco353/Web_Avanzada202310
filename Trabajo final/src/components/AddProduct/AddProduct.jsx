import React from 'react'
import './AddProduct.css'
import { useContext } from "react";
import { productsContext } from "../../App";
import { addProductContext } from "../../App";
import { db } from "../../firebase.jsx"
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"
import {app} from "../../firebase"


function AddProduct({ handleSetProductList, modalStateProp }) {
  
  let modalState = modalStateProp;
  const actualList = useContext(productsContext)
  const modalAddNewProduct = useContext(addProductContext)
  const storage = getStorage(app);
  const imgRoute = 'products-img';

  
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

      const imgInput = document.getElementById("add-img").files[0];
      const uploadedFileUrl = await addImage(imgInput.name, imgInput);

      let product = {
        name: document.getElementById("name").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value,
        img: uploadedFileUrl,
        avalible: "yes",
        id: Math.floor(Math.random() * 10000) + 1
      }


      const docRef = await setDoc(doc(db, "products", product.name), {
        name: product.name,
        brand: product.brand,
        price: product.price,
        img: product.img,
        avalible: true,
        id: product.id
      });


      alert("Document written with name:", product.name)

    } catch (e) {
      console.error("Error adding document", e)
    }
  }

  async function addImage(name, file) {

    const storageRef = ref(storage, `${imgRoute}/${name}`);

    try {
      await uploadBytes(storageRef, file)
      console.log(file)
      const url = await getDownloadURL(storageRef);
      return url
    } catch (err) {
      console.error("Error uploading img: " + err.message)
    }

  }

  handleStoryBookState();
  return (

    <div id="add-product" className={modalState}>
      <h2> Add a new product</h2>
      <p> 1. Set name of the product</p>
      <input id="name" type="text" placeholder="Name" />
      <p> 2. Set the brand of the product</p>
      <input id="brand" type="text" placeholder="Brand" />
      <p> 3. Set the price</p>
      <input id="price" type="number" placeholder="Price" />

      <p> 4. Upload the image of the product</p>
      <input id="add-img" placeHolder="select a file" type="file" />
      <button onClick={() => { handleAddNewProduct() }}> Add to the database </button>
    </div>
    
  )
}

export default AddProduct