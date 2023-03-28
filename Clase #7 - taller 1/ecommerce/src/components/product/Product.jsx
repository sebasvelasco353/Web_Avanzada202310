import React, {useState} from 'react'
import Modal from '../modal/Modal'
import './Product.css'
import { useSelector,useDispatch } from 'react-redux'

function Product (props){
    
    const showModal = useSelector(state => state.showModal);
    const dispatch = useDispatch();

    const clickProductCard =()=>{
        if(showModal){
            dispatch({type: 'HideModal'});
        } else {
            dispatch({type: 'ShowModal'})
        }
    }

    const displayModal = ()=> {
        if(showModal){
            return <Modal name={props.name} price={props.price} description={props.description}/>
        }
    }

    return(
        <div className='productcard' onClick={clickProductCard}>
            <h1>{props.name}</h1>
            <h2>${props.price}</h2>
            <p>{props.description}</p>
            {displayModal()}
        </div>       
    )
}

export default Product