import './Footer.css';
import React, { useState } from 'react';

function Footer({ value }) {

    // State management
    const [random, setRandom] = useState("");
    const [configList, setConfigList] = useState({
        "visible": true,
        "editable": false,
    });

    // Variables
    const currentYear = new Date().getFullYear();

    // Methods
    const handleInputChange = (e) => {
        setRandom(e.target.value);
    }
    const handleEditable = (e) => {
        setConfigList({
            ...configList,
            editable: e.target.value
        });
    }

    return (
        <footer className="footer">
            <input type="text" className="footer_input" disabled={configList.editable} onChange={(e) => handleInputChange(e)} />
            <input type="checkbox" name="footer_checkbox" onChange={(e) => handleEditable(e)} />
            <p> {random} </p>

            <p className='footer__copy'> This is a footer </p>
            <p className='footer__copy'> Copyrigth @ {currentYear} </p>
        </footer>
    );

}

export default Footer;
