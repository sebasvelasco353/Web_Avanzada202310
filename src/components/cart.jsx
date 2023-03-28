import React from "react";

function Cart({cart}){
    const productsInCart = React.useContext(EcommerceContext)

    const productGroups = products.reduce((groups, product, index) => {
      if (index % 3 === 0) {
        groups.push([]);
      }
      groups[groups.length - 1].push(product);
      return groups;
    }, []);
    
    return (
      <div>
        
      </div>
    );
}

export default Cart