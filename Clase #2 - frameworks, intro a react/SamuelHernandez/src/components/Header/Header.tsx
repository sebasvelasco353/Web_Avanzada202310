import React, { useState } from "react";
import { BoredButton } from "../BoredButton/BoredButton";
import "./Header.css";

export const Header = () => {

    const [index, setIndex] = useState(0);
    const styles : string[] = ["", "--magenta", "--cyan", "--yellow", "--red", "--green", "--blue"];
    let current : string = styles[index]; 

    const changeColor = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const MAX_INDEX : number = 6;
        setIndex(index === MAX_INDEX ? 0 : index + 1);
    }

    return (
        <header className={`nav nav${current}`}>
            <h1 className="nav__title">A test React site</h1>
            <ul className="nav__linktree">
                <li>
                    <a href="https://www.github.com/zacwastaken" target="_blank" rel="noreferrer">Github</a>
                </li>
                <li>
                    <BoredButton onClick={changeColor}>Bored</BoredButton>
                </li>
            </ul>
        </header>
    )
}