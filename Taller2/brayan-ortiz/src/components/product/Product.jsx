import React, {useState} from 'react'
import Modal from '../modal/Modal'
import './Product.css'
import { useSelector,useDispatch } from 'react-redux'
import { db } from '../../config/firebase';
import { deleteDoc, doc } from '@firebase/firestore';
import UpdateModal from '../updateModal/UpdateModal';
import Alert from '../alertMaterialUI/Alert.jsx';

function Product (props){
    
    const [showEditModal, setShowEdit] = useState(false)
    const showModal = useSelector(state => state.showModal);
    const [showAlert, setShowAlert] = useState(false)

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

    const handleDelete=()=>{
        setShowAlert(true)
    }

    const handleConfirm=async(confirmation)=>{
        if(confirmation){
            const productDoc = doc(db, 'product', props.id)
            await deleteDoc(productDoc)
            dispatch({ type: 'ChangeDocument'})
            setShowAlert(false)
        } else {
            setShowAlert(false)
        }
    }

    const handleEdit=()=>{
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
            <Alert title ={"Confirmación"} state={showAlert} 
            message={"¿Estás segur@ que quieres eliminar el producto?"} 
            onConfirmation={handleConfirm}/>

            <UpdateModal product={props} isVisible ={showEditModal} setShowEdit={setShowEdit}/>
            {displayModal()}
        </div>       
    )
}

export default Product;