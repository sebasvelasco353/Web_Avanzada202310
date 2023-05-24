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
                <h4><b>{product.Nombre}</b></h4>
                  <p>{product.Precio}</p>
                  <p>{product.Cantidad}</p>
                  <p>{product.Disponible}</p>
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