import "./Modal.css"
import { useSelector, useDispatch } from "react-redux"

function Modal(props){

    const showModal = useSelector(state => state.showModal);
    const dispatch = useDispatch();

    const addProduct = () =>{
        
    }

    const closeModal = (e) => {
        dispatch({type: 'HideModal'})
    }

    return(
        <div className="product_info" onClick={(e)=> e.stopPropagation()}>
            <div className="product_info__bar">
                <button className="product_info__bar--AddButton" onClick={addProduct}></button>
                <button className="product_info__bar--CloseButton" onClick={closeModal}></button>
            </div>

            <div className="product_info__info">
                <h1>{props.name}</h1>
                <h2>${props.price}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Modal