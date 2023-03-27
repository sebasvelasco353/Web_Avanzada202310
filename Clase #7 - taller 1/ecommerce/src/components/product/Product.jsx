import './Product.css'

function Product (props){

    return(
        <div className='productcard'>
            <h1>{props.name}</h1>
            <h2>${props.price}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Product