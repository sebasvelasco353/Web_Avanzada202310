import React, { useState } from 'react';
import './UpdateModal.css'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

function UpdateModal(props) {
    const [name, setName] = useState(props.product.name);
    const [price, setPrice] = useState(props.product.price);
    const [description, setDescription] = useState(props.product.description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productDoc = doc(db, 'product', props.product.id)
        await updateDoc(productDoc, {
            name: name,
            price: price,
            description: description
        })
        alert('Producto actualizado')
    }

    const handleName =(e)=>{
        setName(e.target.value)
    }

    const handlePrice =(e)=>{
        setPrice(e.target.value)
    }

    const handleDescription =(e)=>{
        setDescription(e.target.value)
    }

    return (
        <div className='container'>
            {props.isVisible && 
            <div className='form_container'>
                <div className='edit_card_bar'>
                    <button className='edit_card_bar__close_button' 
                    onClick={()=>props.setShowEdit(!props.isVisible)}></button>
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
                    <button type="submit" className='add_button'>Actualizar</button>
                </form>
            </div>}
        </div>
    );
};

export default UpdateModal;