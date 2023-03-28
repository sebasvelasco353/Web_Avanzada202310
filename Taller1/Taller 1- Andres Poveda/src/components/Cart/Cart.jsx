import React from 'react'
import "./Cart.css"
import { useContext } from "react";
import { cartContext } from "../../App";
import { isPayingContext } from "../../App";

function Cart({ handleSetCartStatus, handleIsPaying, handleChangeCar}) {

    let myCartStatus = useContext(cartContext);
    let isPaying = useContext(isPayingContext);
    
//Delete car from item
    function deleteFromCart(itemID) {
        let findProduct = myCartStatus.findIndex((obj => obj.id === itemID))

        const newArr = [...myCartStatus]

        newArr.splice(findProduct, 1);

        
        handleChangeCar([...newArr])
    }

    function hideCartStatus() {
        handleIsPaying(!isPaying);
        console.log(isPaying)
    }

  return (
      <div className="cart-container cart-closed" id="cart-container">
          <div className="your-cart-logo">
              <img src="https://parspng.com/wp-content/uploads/2022/12/cartpng.parspng.com-2.png" alt="" />
              <h2> Tu carrito </h2>  
          </div>
          

          {
              myCartStatus.map((item, index) => {
                  return <div className="cart-object" key={index}>
                      <section>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="" />
                          <div>
                              <p> <span> {item.name} </span> </p>
                              <p> Precio por unidad: {item.price * item.units} </p>
                              <p> Total: <span>{item.price} </span>  </p>
                              <p> Unidades: <span> {item.units} </span></p>
                          </div>
                      </section>
                      <button onClick={() => {deleteFromCart(item.id)} }> Borrar del carrito</button>
                  </div>
              }) 
          }
        
          <button onClick={() => { hideCartStatus() }} id="buy-button"> Finalizar compra </button>
          
      </div>
  )
}

export default Cart