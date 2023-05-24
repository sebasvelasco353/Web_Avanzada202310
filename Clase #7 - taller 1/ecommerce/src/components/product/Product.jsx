import React, {useState} from 'react'
import Modal from '../modal/Modal'
import './Product.css'
import { useSelector,useDispatch } from 'react-redux'
import { db } from '../../config/firebase';
import { deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { async } from '@firebase/util';
import UpdateModal from '../updateModal/UpdateModal';

function Product (props){
    
    const [showEditModal, setShowEdit] = useState(false)
    const showModal = useSelector(state => state.showModal);
    const dispatch = useDispatch();

    const clickProductCard =()=>{

        if(showModal){
            dispatch({type: 'HideModal'});
        } else {
            dispatch({type: 'SetProduct', payload: props})
            dispatch({type: 'ShowModal'})
        }
    }

    const displayModal = ()=> {
        if(showModal){
            return <Modal name={props.name} price={props.price} description={props.description} showModal={showModal}/>
        }
    }

    const handleDelete=async()=>{
        if(confirm('¿Estás segur@ que quieres eliminar este producto?')){
            const productDoc = doc(db, 'product', props.id)
            await deleteDoc(productDoc)
        }
    }

    const handleEdit=async()=>{
        if(showEditModal){
            setShowEdit(false)
        } else {
            setShowEdit(true)
        }
    }

    return(
        <div className='productcard'>
            {props.active && <div className='productcard_bar'>
                <button className='productcard_bar__delete_button' onClick={handleDelete}></button>
                <button className='productcard_bar__edit_button' onClick={handleEdit}></button>
            </div>}
            <div className='productcard_container__info' onClick={clickProductCard}>
                <h1>{props.name}</h1>
                <h2>${props.price}</h2>
                <p>{props.description}</p>
            </div>
            {showEditModal && <UpdateModal product={props}/>}
            {displayModal()}
        </div>       
    )
}

export default Product;