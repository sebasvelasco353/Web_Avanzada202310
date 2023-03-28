import React from 'react'
import './Header.css'

function Header({handleLogIn, handleDisplayAddProduct, isLogged, modalAddProduct}) {

    const loginSstyles = {
        logged:"",
        notLogged:"admin-header-section"
    }



  

    function handleDisplayCart () {
        let cartDisplayStatus = document.getElementById("cart-container");
        if (cartDisplayStatus.classList.contains("cart-closed")) {
            cartDisplayStatus.classList.remove("cart-closed")
            cartDisplayStatus.classList.add("cart-open")
        } else {
            cartDisplayStatus.classList.add("cart-closed")
            cartDisplayStatus.classList.remove("cart-open")
        }
      
        //cartDisplayStatus.classList.remove("cart-closed"
    }

    return (

        
        <header id="header">
            
            {/* Header contiains an image of the logo and a separate section for cart, user photo and login  */}

            <img src="https://thumbs.dreamstime.com/b/logotipo-oval-122856198.jpg" alt="" />
            <div id="header-buttons">
                <button id="log-in-button" className={isLogged ? "not-showing" :""} onClick={() => { handleLogIn() }}> Iniciar Sesión </button>
                <div id="admin-header-section" className={isLogged ? loginSstyles.logged : loginSstyles.notLogged}>

                    {/* Admin Content  */}
                    <p> Admin User </p>
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    </a>
                    <button onClick={() => { handleDisplayAddProduct()} }> Añade un producto </button>
                    <button className="log-out-button"onClick={() => { handleLogIn() }}> Salir </button>
                </div>
                <div className="group-div"> 1</div>
                <a onClick={() => { handleDisplayCart() }} href="#">
                    <img src="https://parspng.com/wp-content/uploads/2022/12/cartpng.parspng.com-2.png" alt="" />
                </a>
            </div>
            
        </header>
  )
}

export default Header