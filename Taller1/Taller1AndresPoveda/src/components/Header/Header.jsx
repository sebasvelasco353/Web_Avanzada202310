import React from 'react'
import './Header.css'
import { useContext, useState } from "react";
import { cartModalContext } from "../../App";
import { app, auth, db } from "../../firebase.jsx"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

function Header({ handleLogIn, handleDisplayAddProduct, isLogged, handleSetDisplayCart, isLoogedInProp }) {

    //Firebase methods
    const firebaseMethods = {
        app: app,
        auth: auth,
        db: db
    }

    let isCartOpen = useContext(cartModalContext);
    let logInState;

    //Checks if user clicks the button to register or log in
    const [logInDisplayHandler, setlogInDisplayHandler] = useState(false);
    const [registerDisplayHandler, setregisterDisplayHandler] = useState(false);

    //User uid
    const [userUID, setuserUID] = useState("");

    //Header design for logged in users styles
    const loginSstyles = {
        logged: "",
        notLogged: "admin-header-section"
    }

    //Form for new user or registering users
    const logInDisplayHandlerStyles = {
        open: "flex",
        closed: "none"
    }

    const registerDisplayHandlerStyles = {
        open: "flex",
        closed: "none"
    }

    //Checks if reciving prop for storybook or functional
    function handleCheckHeaderDisplay() {
        if (isLoogedInProp !== undefined) { 
            logInState = isLoogedInProp;
        } else {
            logInState = isLogged;
        }
    }

    //Executes the function
    handleCheckHeaderDisplay();

    //Open the log in form when clicked button
    function handleDisplayLogInForm() {
        setlogInDisplayHandler(!logInDisplayHandler)
        console.log("Log in: " + logInDisplayHandler)
        setregisterDisplayHandler(false);
        
    }

    //Open the register in form when clicked button
    function handleDisplayRegisterForm() {
        setregisterDisplayHandler(!registerDisplayHandler);
        setlogInDisplayHandler(false)
    }

    //Display the cart section
    function handleDisplayCart() {
        console.log("Estado del cart en el header: " + isCartOpen)
        handleSetDisplayCart(!isCartOpen)
    }

    //Handles the registering of a new user
    function handleRegisterUser(e) {
        e.preventDefault();
        let newUserName = document.getElementById("input-register-name").value
        let newUserMail = document.getElementById("input-register-name").value
        let newUserPass = document.getElementById("input-register-password").value
        let newUserPassConfirmation = document.getElementById("input-register-password-confirmation").value

        //Creates the new user from the values in the input
        let newUserToRegister = {
            name: newUserName,
            mail: newUserMail,
            password: newUserPass,
            passwordConfirmation: newUserPassConfirmation
        }

        //Compares if the password is correct in both spaces befor calling the "new user" function
        if (newUserToRegister.password !== newUserToRegister.passwordConfirmation ) {
           alert("Las contraseñas no coinciden")
        }

        newUser(newUserToRegister.mail, newUserToRegister.password, firebaseMethods.auth)
        console.log("La compilación del usuario ha sido exitosa. Mandando a firebase...");
    }

//Function that makes the call to the firebase api when registering a new user
    function newUser(email_, password_, auth_) {
        console.log(" Entra en la funcion")
        createUserWithEmailAndPassword(auth_, email_, password_)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                console.error(error)
                // ..
            });
    }

    function handleFirebaseLogIn(e) {
        e.preventDefault();
        const logInUserMail = document.getElementById("input-login-mail").value
        const logInUserPass = document.getElementById("input-login-password").value

        let userToLogIn = {
            mail: logInUserMail,
            pass: logInUserPass     
        }
        
        singInUser(userToLogIn.mail, userToLogIn.pass)

        console.log(userToLogIn)
    }
    
//Function that makes the call to the firebase api when login in a new user
    function singInUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                const user = userCredential.user;
                console.log("Log in succesfull")
                setuserUID(user.uid)
                console.log(userUID)

                //Changes header design when logged in and closes section
                handleLogIn()
                handleDisplayLogInForm()
                //checkUserStatus(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Log in error")
            });
    }

    function checkUserStatus(user_) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
         
                setuserUID(user.uid)
                console.log(userUID)
                // ...
            } else {
                // ...
            }
        });
    }

    function logOut(e) {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                console.log('Log Out succesfully');
                handleLogIn();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    
    return (

        <>
        <header id="header">
            
            {/* Header contiains an image of the logo and a separate section for cart, user photo and login  */}

            <img src="https://thumbs.dreamstime.com/b/logotipo-oval-122856198.jpg" alt="" />
            <div id="header-buttons">
                    <button id="log-in-button" className={logInState ? "not-showing" : ""} onClick={() => { handleDisplayLogInForm() }}> Iniciar Sesión </button>
                    <button id="register-button" onClick={() => { handleDisplayRegisterForm() }}> Registrate </button>
                
                   {/* If user is admin */}
                <div id="admin-header-section" className={logInState ? loginSstyles.logged : loginSstyles.notLogged}>
                    <p> Admin User </p>
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    </a>
                    <button onClick={() => { handleDisplayAddProduct()} }> Añade un producto </button>
                        <button className="log-out-button" onClick={(e) => { logOut(e) }}> Salir </button>
                    </div>
                
                    
                <div className="group-div"> 1</div>
                <a onClick={() => { handleDisplayCart() }} href="#">
                    <img src="https://parspng.com/wp-content/uploads/2022/12/cartpng.parspng.com-2.png" alt="" />
                </a>
            </div>
            
        </header>

            {/* Log in and register form*/}
            <div id="sign-form">

                <div id="register-form" className="form" style={{ display: registerDisplayHandler ? registerDisplayHandlerStyles.open : registerDisplayHandlerStyles.closed}} >
                    <h1> Registrate! </h1>
                    <label htmlFor=""> Nombre </label>
                    <input id="input-register-name" type="text" />
                    <label htmlFor=""> Correo </label>
                    <input id="input-register-mail" type="mail" />
                    <label htmlFor=""> Contraseña</label>
                    <input id="input-register-password" type="password" />
                    <label htmlFor=""> Repite contraseña</label>
                    <input id="input-register-password-confirmation"  type="password" />
                    <button onClick={(e) => handleRegisterUser(e)}> Registrarse </button>
                </div> 

                <div id="log-in-form" className="form" style={{ display: logInDisplayHandler ? logInDisplayHandlerStyles.open : logInDisplayHandlerStyles.closed }}>
                    <h1> Inicia Sesión! </h1>
                    <label htmlFor=""> Correo </label>
                    <input id="input-login-mail"  type="text" />
                    <label htmlFor=""> Contraseña</label>
                    <input id="input-login-password" type="text" />
                    <button onClick={(e) => handleFirebaseLogIn(e)}> Entrar </button>
                </div>

            </div>
            
        </>
  )
}

export default Header