import { useState } from "react";
import "./Header.css";

function Header(){

    const [clicked, setClicked] = useState(true);
    const [clicks, setClicks] = useState(0);

    function handleEvent(){
        setClicks(clicks + 1);

        if(clicked){
            setClicked(false);
        } else {
            setClicked(true);
        }
        console.log(clicked)
    }

    function reset(){
        setClicked(false);
        setClicks(0);
    }

    return(
        <div className={`container__div${(clicked)?"--special":""}`}>
            <button className="container__button" onClick={handleEvent}>Change color</button>
            <button className="cotainer__button2" onClick={reset}>Reset</button>
            <h1>Number of cliks: {clicks}</h1>
        </div>
    );
}

export default Header;
