import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Login} from "../../pages/Login/Login";
import {Cart} from "../../pages/Cart/Cart";
import {ItemPage} from "../../pages/ItemPage/ItemPage";
import {NotFound} from "../../pages/NotFound/NotFound";
import {Profile} from "../../pages/Profile/Profile";
import {Navbar} from "../ui/Navbar/Navbar";
import {SessionProvider} from "../../context/Session/SessionProvider";
import {RoutingProvider} from "../../context/Routing/RoutingProvider";

function App() {
    return (
        <BrowserRouter>
            <SessionProvider>
                <RoutingProvider>
                    <Navbar/>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path={"login"} element={<Login/>}/>
                        <Route path={"/cart"} element={<Cart/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/item/:itemID"} element={<ItemPage/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Routes>
                </RoutingProvider>
            </SessionProvider>
        </BrowserRouter>
    );
}

export default App;
