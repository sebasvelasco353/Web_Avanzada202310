import { useState } from "react";


function Header() {
    const [clicked, setClicked] = useState(true);

    const handleClick = () => {
        setClicked(!clicked);
    }


    return (
      <header className = "header">
        <p>Hola mundo</p>
        <button onClick={handleClick} style = {{backgroundColor: clicked ? "green" : "red"}}>Click me</button>
      </header>
    );
  }
  
  export default Header;