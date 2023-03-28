import React, { useState } from 'react'
import "./../styles/NavBar.css"
import LogIn from "./../resources/box-arrow-in-left.svg"
import LogOut from "./../resources/box-arrow-in-right.svg"
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const [userToken, setToken] = useState("");
    const [userName, setUserName] = useState("");
    
    const navigate = useNavigate();

    const logOut = () =>{
        setToken("");
        setUserName("");
    }

    const logIn = () =>{
        setToken("token_100%_real_no_fake");
        setUserName("Jhon Doe");
        navigate('/Home')
    }

    

    const renderSesionInformation = () =>{
        if(userToken === ""){

            return(
                <div className='NavBar__session__information'>
                    <button className="NavBar__loginButton" onClick={logIn}>
                    <p>Iniciar sesión</p>
                    <img src={LogIn} alt="Button image" />
                    </button>            
                </div>
            )

        }else{
            return(
                <div className='NavBar__session__information'>
                    <p className='NavBar__session__information__userName'>Hola de nuevo, {userName}</p>

                    <button className="NavBar__loginButton" onClick={logOut}>
                    <p>Cerrar sesión</p>
                    <img src={LogOut} alt="Button image" />
                    </button>
                </div>
            )

        }
    }

  return (

    <div className='NavBar'>
        <div className='NavBar__links'>
            <a href="/Home" className="NavBar__link">Inicio</a>
            <a href="/Places" className="NavBar__link">Lugares</a>
            <a href="/Events" className="NavBar__link">Eventos</a>
            <a href="/Business" className="NavBar__link">Comercios</a>
        </div>
        <div className='NavBar__session'>
            
            {renderSesionInformation()}
            
        </div>
    </div>

  )
}
