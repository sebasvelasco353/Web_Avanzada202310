import './NavBar.css';
import React, { useState } from 'react';

function NavBar({ sitename }) {

    // State management
    const [bttnPressed, setbttnPressed] = useState(false);
    const [siteName, setSitename] = useState(sitename);

    // Methods
    const handleBttn = (e) => {
        setbttnPressed(!bttnPressed);
    }
    const handleInputChange = (e) => {
        setSitename(e.target.value);
    }

    return (
        <div className="navbar">
            <p> Welcome to {siteName} </p>

            <div style={{ backgroundColor: bttnPressed ? "red" : "green", height: 30, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={handleBttn}>
                {bttnPressed ? <p style={{ color: "white", padding: 8 }}>Cancel X</p>
                    :
                    <p style={{ color: "white", padding: 8 }}>Change sitename</p>}
            </div>

            <input type="text" style={{ visibility: bttnPressed ? "visible" : "hidden" }} onChange={(e) => handleInputChange(e)} />
        </div>
    );

}

export default NavBar;
