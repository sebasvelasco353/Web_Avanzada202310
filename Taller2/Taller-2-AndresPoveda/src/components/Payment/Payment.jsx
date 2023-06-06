import React from 'react'
import './Payment.css'
import { useContext } from "react";
import { isPayingContext } from "../../App";



function Payment({ handleIsPaying }) {
    

    let isPaying = useContext(isPayingContext);

    function hidePayingSection(){
        document.getElementById("payment-container").classList.remove('payment-open');
        document.getElementById("payment-container").classList.add('payment-closed');

        let cartDisplayStatus = document.getElementById("cart-container");
        cartDisplayStatus.classList.add("cart-closed")
        cartDisplayStatus.classList.remove("cart-open")
        handleIsPaying(!isPaying)
    }

  return (
      <div id="payment-container" className={isPaying ? 'payment-open': 'payment-closed'}>
          <h2> Completa el pago</h2>
          <section>
              <h3>1) Informacion personal</h3>
              <section className="payment-h-cotainer">
                  
                  <div>
                      <label htmlFor=""> Nombre</label>
                      <input type="text" placeholder="Nombre" />
                  </div>
                  <div>
                      <label htmlFor=""> Apellido</label>
                      <input type="text" placeholder="Apellido" />
                  </div>
                 
              </section>
          
              <section className="payment-h-cotainer">

                  <div>
                      <label htmlFor=""> Cedula </label>
                      <input type="number" placeholder="Cedula" />
                  </div>
                  <div>
                      <label htmlFor=""> Lugar de expedicion </label>
                      <input type="text" placeholder="Ciudad o Municipio" />
                  </div>

              </section>

              <section className="payment-h-cotainer">

                  <div>
                      <label htmlFor="">Fecha de nacimiento</label>
                      <input type="date" placeholder="Nombre" />
                  </div>
                  <div>
                      <label htmlFor=""> Pais de Nacimiento</label>
                      <input type="text" placeholder="Pais de Nacimiento" />
                  </div>

              </section>

          </section>
        
          <section>
              <h3>2) Informacion de pago</h3>
              <section className="payment-h-cotainer">

                  <div>
                      <label htmlFor=""> Numero de tarjeta </label>
                      <input type="number" placeholder="" />
                  </div>
                  <div>
                      <label htmlFor=""> Nombre propietario de la tarjeta</label>
                      <input type="text" placeholder="" />
                  </div>

              </section>

              <section className="payment-h-cotainer">

                  <div>
                      <label htmlFor=""> CCV </label>
                      <input type="number" placeholder="" />
                  </div>
              

              </section>

          </section>

     

          <button onClick={() => { hidePayingSection() }} id="finish-button"> Pagar </button>
      </div>

 

  )
}

export default Payment