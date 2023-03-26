import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoggedLayout} from "../ui/Layout/LoggedLayout";
import {Home} from "../../pages/Home/Home";
import {Login} from "../../pages/Login/Login";
import {Cart} from "../../pages/Cart/Cart";
import {ItemPage} from "../../pages/ItemPage/ItemPage";
import {NotFound} from "../../pages/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/"} element={<LoggedLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"cart"} element={<Cart/>}/>
                    <Route path={"item/:itemID"} element={<ItemPage/>}/>
                </Route>
                <Route path={"*"} element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
