import React from 'react'
import './List.css'
import { useContext } from "react";
import { productsContext, cartContext } from "../../App";

function List({ handleSetCartStatus }) {

    let actualList = useContext(productsContext)
    let actualCart = useContext(cartContext)
    //console.log(productsList)

    function handleAddToCart(name, price, id) {
        console.log("Previo estado del carro: ", actualCart)
        let cartObj = {
            name: name,
            price: price,
            units: document.getElementById("units-number").value,
            id: id
        }

        handleSetCartStatus(cartObj)
       
    }

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            <div id="products-title">
                <span> Take a look at our products!</span>
                <img src="https://em-content.zobj.net/source/microsoft-teams/363/package_1f4e6.png" alt="" />
            </div>
           
            <div className="card-container">

                {
                    actualList.map((item, index) => {
                        return <section key={index} className="card">
                            <img src={item.img ? item.img : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"} alt="" />
                            <h1> {item.name} </h1>
                            <h3>{item.brand} </h3>
                            <p> {USDollar.format(item.price)
                            } </p>
                            <div id="units-card">
                                <label htmlFor=""> How many are you taking?</label>
                                <input id="units-number" type="number" placeholder='1' />
                            </div>

                            <button onClick={() => { handleAddToCart(item.name, item.price, item.id) }}> Add to the cart </button>
                        </section>
                    })
                }

            </div>
      </> 
  )
}

export default List