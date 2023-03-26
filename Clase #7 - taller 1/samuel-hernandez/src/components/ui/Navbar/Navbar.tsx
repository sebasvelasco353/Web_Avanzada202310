import './Navbar.css';
import {CupHot} from "react-bootstrap-icons";
import React, {useState} from "react";

interface IProps {

}

export const Navbar = (props: IProps) => {

    const [isLoggedIn, setLoggedIn] = useState(true); // This is a placeholder for auth context

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        setLoggedIn(!isLoggedIn);
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
                <li className={`${isLoggedIn ? "shown" : "hidden"} selected`}>
                    <a href={"/"}>Home</a>
                </li>
                <li className={isLoggedIn ? "shown" : "hidden"}>
                    <a href={"/cart"}>Cart</a>
                </li>
                <li className={isLoggedIn ? "shown" : "hidden"}>
                    <a href={"/profile"}>Profile</a>
                </li>
                <li>
                    <button onClick={handleLogout} >{isLoggedIn ? "Logout" : "Login"}</button>
                </li>
            </ul>
        </nav>
    );
}