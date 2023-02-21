import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import './Content.css';

function Content() {
    const darkTheme = useContext(ThemeContext);
    return (
        <div className={`content ${darkTheme ? "" : "content--dark"}`}>Content</div>
    )
}

export default Content