import React, { useRef, useState } from 'react';

function Header() {
    
    const elem = useRef(null);
    const[count, setCount] = useState(0);
    const[color, setColor] = useState(false);

    const changeColor = () => {
      if(color) {
        elem.current.style.backgroundColor = 'red';
      } else {
        elem.current.style.backgroundColor = 'white';
      }
      setColor(!color)
    }

    return (
      <header className="Header" ref={elem}>
        <h1> This is a header </h1>
        <p>You have clicked {count} times</p>
        <div>
          <button onClick={() => setCount(count + 1)}>
            Count
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
          <button onClick={changeColor}>
            Change colors
          </button>
        </div>
      </header>
    )
}

export default Header;