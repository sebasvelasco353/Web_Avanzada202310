import './Shopping.css'
import { useSelector,useDispatch } from 'react-redux'

function Shopping(){

    const products = useSelector(state =>state.products)
    const dispatch = useDispatch();

    const payShopping =()=>{
        alert("El pago fue realizado con exito!")
        dispatch({type: 'DeleteProducts'})
    }

    const closeShopping =()=>{
        
    }

    return(
        <div className='container-products'>
            <div className='container-products__bar'>
                <button className='container-products__bar--payButton' onClick={payShopping}>Pagar carrito</button>
                <button className='container-products__bar--closeButton' onClick={closeShopping}></button>
            </div>
            <div className='container-products__product-list'>
                {products.map((product) => (
                <div className='container-products__product'>
                    <h2 className='container-products__product-name'>{product.name}</h2> 
                    <h2 className='container-products__product-price'>{product.price}</h2> 
                </div>
                ))}
            </div>
        </div>
    );
}

export default Shopping