import React from "react";

function InCart({cart, handleDelete}){
	const productGroups = cart.reduce((groups, product, index) => {
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
                <button onClick={() => handleDelete(product)}>Eliminar del carrito</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default InCart;