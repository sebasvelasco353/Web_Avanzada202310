import "./App.css"
import React from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Router,
    Routes
  } from "react-router-dom";

import Products from "./components/products-view";
import Cart from "./components/cart";

function App(){
    return(
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink to="/products">Ver productos</NavLink></li>
                    <li><NavLink to="/cart">Carrito</NavLink></li>
                    <li><NavLink to="/">Usuario</NavLink></li>
                    <li><NavLink to="/">Logout</NavLink></li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;