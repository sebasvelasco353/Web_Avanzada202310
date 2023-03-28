import React from "react";
import { EcommerceContext } from "../App";
import "./products-view.css"

function Products({addToCart}){
  const products = React.useContext(EcommerceContext)

  const productGroups = products.reduce((groups, product, index) => {
    if (index % 3 === 0) {
      groups.push([]);
    }
    groups[groups.length - 1].push(product);
    return groups;
  }, []);
  
  return (
    <div>
      {productGroups.map((group) => (
        <div className="product-group">
          {group.map((product) => (
            <div className="card">
              <div className="container">
                <h4><b>{product.name}</b></h4>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Products;
