import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Login} from "../../pages/Login/Login";
import {Cart} from "../../pages/Cart/Cart";
import {NotFound} from "../../pages/NotFound/NotFound";
import {Profile} from "../../pages/Profile/Profile";
import {Navbar} from "../ui/Navbar/Navbar";
import {SessionProvider} from "../../context/Session/SessionProvider";
import {UserProvider} from "../../context/User/UserProvider";
import {CartProvider} from "../../context/Cart/CartProvider";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../../config/mui";
import {Register} from "../../pages/Register/Register";

function App() {

    //TODO: change context to useReducer

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <SessionProvider>
                        <CartProvider>
                            <Navbar/>
                            <Routes>
                                <Route index element={<Home/>}/>
                                <Route path={"login"} element={<Login/>}/>
                                <Route path={"register"} element={<Register/>}/>
                                <Route path={"cart"} element={<Cart/>}/>
                                <Route path={"profile"} element={<Profile/>}/>
                                <Route path={"*"} element={<NotFound/>}/>
                            </Routes>
                        </CartProvider>
                    </SessionProvider>
                </UserProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
