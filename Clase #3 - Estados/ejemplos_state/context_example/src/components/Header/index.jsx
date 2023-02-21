import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import './Header.css'

function Header({ onChangeTheme }) {
    const darkTheme = useContext(ThemeContext);
    return (
        <header className={`header ${darkTheme ? "" : "header--dark"}`}>
            <p>This is a header with {darkTheme ? "light" : "dark"} theme</p>
            <button onClick={onChangeTheme}>Toggle Dark Theme</button>
        </header>
    )
}

export default Header