import './Shopping.css'
import { useSelector,useDispatch } from 'react-redux'

function Shopping(){

    const products = useSelector(state =>state.products)

    return(
        <div className='container_products'>
            {products.map((product) => (
            <div className='container_producs__product'>
                <h2>{product.name}</h2> 
                <h2>{product.price}</h2> 
            </div>))}
        </div>
    );
}

export default Shopping