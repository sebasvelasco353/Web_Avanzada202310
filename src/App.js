import "./App.css"
import React, {useState, useEffect} from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Router,
    Routes
  } from "react-router-dom";

import Products from "./components/products-view";
import Cart from "./components/cart";
import UserInfo from "./components/user";
import reducer, {initialState} from "./AppContext";

export const EcommerceContext = React.createContext();

function App(){

    const [state, dispatch] = React.useReducer(reducer, initialState )
    const [logBtnText, setText] = useState("")
    const [products, setProducts] = useState([
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        },
        {
            name: "Chain saw Man tomo 1",
            description: "",
            price: "40000"
        }
    ]);

    useEffect(()=>{
        setText((state.isLoggedIn)?"Log out":"Log in");
    }, []);

    const handleLog = (e) => {
        dispatch({type: (!state.isLoggedIn)?'LOGIN':'LOGOUT', user: []});
        setText((state.isLoggedIn)?"Log out":"Log in");
    }


    return(
        <HashRouter>
            <div>
            <ul className="header">
                <div className="left-container">
                    <li><NavLink to="/products">Ver productos</NavLink></li>
                    <li><NavLink to="/cart">Carrito</NavLink></li>
                </div>
                <div className="right-container">
                    <li><NavLink to="/usuario">Usuario</NavLink></li>
                    <button className="logout" onClick={(e) => handleLog(e)}>{logBtnText}</button>
                </div>
            </ul>

            </div>
            <EcommerceContext.Provider value={products}>
                <div className="content">
                    <Routes>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/usuario" element={<UserInfo/>}/>
                    </Routes>
                </div>
            </EcommerceContext.Provider>
        </HashRouter>
    );
}

export default App;