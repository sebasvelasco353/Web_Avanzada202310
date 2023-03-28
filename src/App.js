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
import LogIn from "./components/logIn";
import reducer, {initialState} from "./AppContext";
import { v4 as uuidv4 } from 'uuid';

export const EcommerceContext = React.createContext();

function App(){

    const [state, dispatch] = React.useReducer(reducer, initialState )
    const [logBtnText, setText] = useState("")
    const [productsInCart, setProductsInCart] = useState([])
    const [products, setProducts] = useState([
        {
            id: uuidv4(),
            name: "Chain saw Man volumen 1",
            description: "",
            price: "40000"
        },
        {
            id: uuidv4(),
            name: "Oyasumi pum pum volumen 1",
            description: "",
            price: "40000"
        },
        {
            id: uuidv4(),
            name: "Baki volumen 2",
            description: "",
            price: "40000"
        },
        {
            id: uuidv4(),
            name: "Jujutsu kaisen volumen 3",
            description: "",
            price: "40000"
        },
        {
            id: uuidv4(),
            name: "One piece volumen 1",
            description: "",
            price: "40000"
        },
        {
            id: uuidv4(),
            name: "Nana",
            description: "",
            price: "40000"
        },
        {
            id: uuidv4(),
            name: "Hunter X Hunter volumen 5",
            description: "",
            price: "40000"
        },
        {
            id: uuidv4(),
            name: "Afro samurai",
            description: "",
            price: "40000"
        }
    ]);

    useEffect(()=>{
        setText((state.isLoggedIn)?"Log out":"Log in");
    }, []);

    const handleLog = (e) => {
        if(state.isLoggedIn){
            dispatch({type: 'LOGOUT', user: null});
            setText((state.isLoggedIn)?"Log out":"Log in");
        }else{
            window.location.href = "#/login";
        }
    }

    const handleAddToCart = (manga) => {
        if(!productsInCart.includes(manga)){
            const newCart = [...productsInCart, manga];
            setProductsInCart(newCart);
        }
    }

    const deleteMangaFromCart = (manga) => {
        const mangaIndex = productsInCart.findIndex((toDelete) => toDelete.id === manga.id);
        if (mangaIndex !== -1) {
            productsInCart.splice(mangaIndex, 1);
        }
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
                        <Route path="/products" element={<Products addToCart = {handleAddToCart}/>}/>
                        <Route path="/" element={<Products addToCart = {handleAddToCart}/>}/>
                        <Route path="/cart" element={<Cart cart = {productsInCart} handleDelete = {deleteMangaFromCart}  /> }/>
                        <Route path="/usuario" element={<UserInfo/>}/>
                        <Route path="/login" element={<LogIn/>}/>
                    </Routes>
                </div>
            </EcommerceContext.Provider>
        </HashRouter>
    );
}

export default App;