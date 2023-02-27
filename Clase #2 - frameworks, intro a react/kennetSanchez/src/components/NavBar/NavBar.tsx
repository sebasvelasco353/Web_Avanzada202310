import React, { useRef } from "react";
import './NavBar.css'

export const NavBar = () =>{
    
    const [elementClass, setElementClass] = React.useState(false);
    
    function toggleClass(){
        setElementClass(!elementClass)
    }

    return (
      <div className={`navBar${elementClass ? "" : "--dark"}`}>
        <a href="/" className={`navBar__links${elementClass ? "" : "--dark"}`}>Home</a>
        <a href="/products" className={`navBar__links${elementClass ? "" : "--dark"}`}>Products</a>
        <a href="/about" className={`navBar__links${elementClass ? "" : "--dark"}`}>About</a>
        <p className={`navBar__paragraph${elementClass ? "" : "--dark"}`}>This is an updatable div :3</p>
        <button className={`toggleButton${elementClass ? "" : "--dark"}`} onClick={toggleClass}>Change class!</button>
      </div>  
    );
}