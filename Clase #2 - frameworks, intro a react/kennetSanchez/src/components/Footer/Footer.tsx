import React, { ChangeEvent, ChangeEventHandler } from 'react'

export const Footer = (props:{value:string}) => {

    const [rndm, setRndm] = React.useState(0);
    const [nombreReal, setNombreReal] = React.useState("");
    const [alerta, setAlerta] = React.useState("");

    const currentYear = new Date().getFullYear();
    

    const getName = ()=>{
        return "nombre";
    }

    let inputValue : string = '';

    function handleChange(e:ChangeEvent<HTMLInputElement>){
      setAlerta(e.target.value);
    }

    return (
      <footer className='footer'>
        <input type='text' onChange={handleChange}></input>
        <p>P: {alerta}</p>
        <p className="footer__copy">This is a footer {props.value}</p>
        <p className="footer__copy--blue">Copyright @{currentYear}</p>
      </footer>
    )
}
