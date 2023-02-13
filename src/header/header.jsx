import {useState, useRef} from "react";
import './header.css';

function Header(){
    const element = useRef(null);
    const [headerTitle, setHeaderTitle] = useState("");
    const [showHeader, setShowHeader] = useState(true);

    const handleShowHeader = (e) => {
        setShowHeader(!showHeader)
        setHeaderTitle((showHeader)?"Este es el header de la pagina":"")
        console.log('Todo bien hasta aquí')
    }

    const handleChangeBackground = () => {
        const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        var defaultColor = "#"
        for(let i = 0; i < 6; i++){
            var index = Math.floor(Math.random() * 16);
            defaultColor += colors[index];
        }
        element.current.style.backgroundColor = defaultColor;
    }

    return(
        <header className="header" ref={element}>
            <h1 className="header__title" id="header_title">{headerTitle}</h1>
            <button className="header_button" onClick={(e) => handleShowHeader(e)}>Show header</button>
            <button className="header_button_change_color" onClick={handleChangeBackground}>Change background</button>
        </header>
    )
}

export {Header}