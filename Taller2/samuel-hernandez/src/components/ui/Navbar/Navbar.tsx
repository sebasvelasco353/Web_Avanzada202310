import './Navbar.css';
import React, {useContext} from "react";
import SessionContext from "../../../context/Session/SessionContext";
import {useLocation, useNavigate} from "react-router-dom";
import UserContext from "../../../context/User/UserContext";
import CartContext from "../../../context/Cart/CartContext";

export const Navbar = () => {

    const {sessionState , logout} = useContext(SessionContext);
    const {logged} = sessionState;
    const {username} = useContext(UserContext);
    const {clear: clearCart} = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();
    const current  = location.pathname;

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        clearCart();
        logout();
    };

    function handleChange(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        navigate((e.target as HTMLAnchorElement).href.replaceAll("http://localhost:3000", ""));
    }

    return (
        <nav className={"navbar"}>
            <section className={"navbar__logo"}>
                <span className={"navbar__logo__image"}/>
                <section className={"navbar__logo__script"}>
                    <h1>Vallexplora</h1>
                    <p>¡Explora el Valle!</p>
                </section>
            </section>
            <ul className={"navbar__actions"}>
                <li className={`${current === "/" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a href={"/"} onClick={handleChange}>Inicio</a>
                </li>
                <li className={`${current === "/events" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a href={"/events"} onClick={handleChange}>Eventos</a>
                </li>
                <li className={`${current === "/challenges" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a href={"/challenges"} onClick={handleChange}>Desafíos</a>
                </li>
                <li className={`${current === "/profile" ? "selected" : ""} ${logged ? "shown" : "hidden"}`}>
                    <a href={"/profile"} onClick={handleChange}>{username ? username : "Perfil"}</a>
                </li>
                <li>
                    <button onClick={handleLogout} >{logged ? "Salir" : "Ingresar"}</button>
                </li>
            </ul>
        </nav>
    );
}