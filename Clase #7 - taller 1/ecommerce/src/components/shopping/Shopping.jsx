import './Shopping.css'
import { useSelector,useDispatch } from 'react-redux'

function Shopping(){

    const products = useSelector(state =>state.products)

    return(
        <div className='container-products'>
            <div className='container-products__bar'>
                <button className='container-products__pay-button'>Pagar carrito</button>
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