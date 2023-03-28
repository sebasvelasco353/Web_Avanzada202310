import React from "react";
import { EcommerceContext } from "../App";
import "./products-view.css"

function Products(){
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
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

   /* return(
        <div>
          {
            products.map((product) => (
              <div class="card">
                <div class="container">
                  <h4><b>{product.name}</b></h4>
                  <p>{product.price}</p>
                </div>
              </div>
            ))
          } 
        </div>
    );*/
}

export default Products;
