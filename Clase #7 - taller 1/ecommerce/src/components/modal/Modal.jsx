import "./Modal.css"

function Modal(props){

    const addProduct = () =>{
        
    }

    return(
        <div className="product_info">
            <div className="product_info__bar">
                <button className="product_info__bar--button_" onClick={addProduct}></button>
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