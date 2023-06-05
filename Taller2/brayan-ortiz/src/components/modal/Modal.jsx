import "./Modal.css"
import { useSelector, useDispatch } from "react-redux"

function Modal(){

    const props = useSelector(state=>state.product)
    const products = useSelector(state=>state.products)
    const dispatch = useDispatch();

    const addProductToShopping = () =>{
        dispatch({type: 'AddProduct', payload: props})
        alert("El producto fue agregado con éxito!")
        console.log(products)
        console.log(props)
    }

    const closeModal = (e) => {
        dispatch({type: 'HideModal'})
    }

    return(
        <div className="product_info" onClick={(e)=> e.stopPropagation()}>
            <div className="product_info__bar">
                <button className="product_info__bar--AddButton" onClick={addProductToShopping}></button>
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