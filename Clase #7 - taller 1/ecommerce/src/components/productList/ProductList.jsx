import './ProductList.css'
import Product from '../product/Product';

function ProductList({ products }){

  const uuidv4=()=> {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
  }

  return (
    <div className="product-list">
        {products.map((product) => (
            <Product
                id={uuidv4()}
                name={product.name} 
                price={product.price} 
                description={product.description}
            />
        ))}
    </div>
  );
};

export default ProductList;