import React, { useState } from 'react';
import './AddProduct.css'
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

function AddProduct(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [newProduct, setNewProduct] = useState({});
    const collectionProduct = collection(db, 'product')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collectionProduct, {...newProduct, creatoId: auth?.currentUser.uid});
            setName('')
            setPrice('')
            setDescription('')
            setNewProduct({})
        } catch (error){
            console.error(error)
        }
    }

    const handleName =(e)=>{
        setNewProduct({
            ...newProduct, 
            name: e.target.value
        })

        setName(e.target.value)
    }

    const handlePrice =(e)=>{
        setNewProduct({
            ...newProduct, 
            price: e.target.value
        })

        setPrice(e.target.value)
    }

    const handleDescription =(e)=>{
        setNewProduct({
            ...newProduct, 
            description: e.target.value
        })

        setDescription(e.target.value)
    }


    return (
        <div className='container'>
            {props.isVisible && <div className='form_container'>
                <div className='sales_card_bar'>
                    <button className='sales_card_bar__close_button' 
                    onClick={()=> props.changeVisible(!props.isVisible)}></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form_field'>
                    <label>Name:</label>
                        <input type="text"
                        value={name}
                        onChange={handleName}
                        required/>
                    </div>

                    <div className='form_field'>
                        <label>Price:</label>
                        <input type="number"
                        value={price}
                        onChange={handlePrice} 
                        required/>
                    </div>
                    
                    <div className='form_field'>
                        <label>Description:</label>
                        <textarea id="description"
                        value={description}
                        onChange={handleDescription} 
                        required
                        />
                    </div>
                    <button type="submit" className='add_button'>Add Product</button>
                </form>
            </div>}
        </div>
    );
};

export default AddProduct;
