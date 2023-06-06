import './Navbar.css';
import {CupHot} from "react-bootstrap-icons";
import React, {useContext} from "react";
import SessionContext from "../../../context/Session/SessionContext";
import {useLocation, useNavigate} from "react-router-dom";
import UserContext from "../../../context/User/UserContext";
import CartContext from "../../../context/Cart/CartContext";
import {auth} from "../../../config/firebase";
import { signOut } from 'firebase/auth';

export const Navbar = () => {

    const {sessionState , logout} = useContext(SessionContext);
    const {logged} = sessionState;
    const {username, clear: clearUser} = useContext(UserContext);
    const {clear: clearCart} = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();
    const current  = location.pathname;

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signOut(auth).then(() => {
            clearCart();
            clearUser();
            logout();
        })
    };

    function handleChange(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        navigate((e.target as HTMLAnchorElement).href.replaceAll("http://localhost:3000", ""));
    }

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
                <li className={`${current === "/" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a href={"/"} onClick={handleChange}>Home</a>
                </li>
                <li className={`${current === "/cart" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a href={"/cart"} onClick={handleChange}>Cart</a>
                </li>
                <li className={`${current === "/profile" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a href={"/profile"} onClick={handleChange}>{username ? username : "Profile"}</a>
                </li>
                <li>
                    <button onClick={handleLogout} >{logged ? "Logout" : "Login"}</button>
                </li>
            </ul>
        </nav>
    );
}