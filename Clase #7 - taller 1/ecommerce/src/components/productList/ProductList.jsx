import './ProductList.css'
import Product from '../product/Product';
import { v4 as uuidv4 } from 'uuid';

function ProductList({ products }){
  return (
    <div className="product-list">
        {products.map((product) => (
            <Product
                id={uuidv4.v4}
                name={product.name} 
                price={product.price} 
                description={product.description}
            />
        ))}
    </div>
  );
};

export default ProductList;