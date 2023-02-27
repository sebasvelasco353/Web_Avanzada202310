import { useState} from "react";

const Content = () => {

    const [currentColor, setCurrentColor] = useState('red')

    let random;
    const colors = ["red", "green", "yellow", "blue", "pink", "purple", "orange", "brown"]

    const handleClick = () => {
    
            let min = Math.ceil(0);
            let max = Math.floor(8);
            random = colors[Math.floor(Math.random() * (max - min) + min)];

         // Make sure it doesnt pick same color twice.
        if (random !== currentColor) {
            return setCurrentColor(random)  
        } else {
            random = colors[Math.floor(Math.random() * (max - min) + min)];
            return setCurrentColor(random) 
        }
       
    }

    return <section style={{
        backgroundColor: `${currentColor}`,
    }} className="content">
        <h1> Andrés Poveda</h1>
        <h3> Web Avanzada  2023/1</h3>
        <button  onClick={handleClick} id="color-btn">
            Change color
        </button>

        {/* Como puedo hacer "ternearias"????? */}
    </section>;
};
export default Content;
