import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Login} from "../../pages/Login/Login";
import {Cart} from "../../pages/Cart/Cart";
import {NotFound} from "../../pages/NotFound/NotFound";
import {Profile} from "../../pages/Profile/Profile";
import {SessionProvider} from "../../context/Session/SessionProvider";
import {UserProvider} from "../../context/User/UserProvider";
import {CartProvider} from "../../context/Cart/CartProvider";

function App() {

    //TODO: change context to useReducer

    return (
        <BrowserRouter>
            <UserProvider>
                <SessionProvider>
                    <CartProvider>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path={"/login"} element={<Login/>}/>
                            <Route path={"/cart"} element={<Cart/>}/>
                            <Route path={"/profile"} element={<Profile/>}/>
                            <Route path={"*"} element={<NotFound/>}/>
                        </Routes>
                    </CartProvider>
                </SessionProvider>
            </UserProvider>
        </BrowserRouter>
    );
}

export default App;
