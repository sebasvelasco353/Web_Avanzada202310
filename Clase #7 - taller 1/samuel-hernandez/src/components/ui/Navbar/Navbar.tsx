import './Navbar.css';
import {CupHot} from "react-bootstrap-icons";
import React, {useContext, useState} from "react";
import SessionContext from "../../../context/Session/SessionContext";
import RoutingContext, {Routes} from "../../../context/Routing/RoutingContext";
import {useNavigate} from "react-router-dom";
import UserContext from "../../../context/User/UserContext";
import CartContext from "../../../context/Cart/CartContext";

interface IProps {

}

export const Navbar = (props: IProps) => {

    const {logged, logout} = useContext(SessionContext);
    const {current, setCurrent} = useContext(RoutingContext);
    const {username} = useContext(UserContext);
    const {clear: clearCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrent("login");
        clearCart();
        logout();
    };

    const handleRouteChange = (e: React.MouseEvent<HTMLAnchorElement>, next : Routes) => {
        e.preventDefault();
        setCurrent(next);
        navigate(next !== "home" ? `/${next}` : "/");
    };

    return (
        <nav className={"navbar"}>
            <section className={"navbar__logo"}>
                <CupHot size={38}/>
                <section className={"navbar__logo__script"}>
                    <h1>Hotshop</h1>
                    <p>brewed for you</p>
                </section>
            </section>
            <ul className={"navbar__actions"}>
                <li className={`${current === "home" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a onClick={e => handleRouteChange(e, "home")} href={"/"}>Home</a>
                </li>
                <li className={`${current === "cart" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a onClick={e => handleRouteChange(e, "cart")} href={"/cart"}>Cart</a>
                </li>
                <li className={`${current === "profile" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a onClick={e => handleRouteChange(e, "profile")} href={"/profile"}>{username ? username : "Profile"}</a>
                </li>
                <li>
                    <button onClick={handleLogout} >{logged ? "Logout" : "Login"}</button>
                </li>
            </ul>
        </nav>
    );
}