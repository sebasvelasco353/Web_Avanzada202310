import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./../styles/Login.css"

export default function LoginForm() {

  const navigate = useNavigate();
  const logIn = () => {
    navigate('/Home');
  }

  return (
        <section className="login__input__section">
            
            <form>
                <label htmlFor="emailInput">Email</label>
                <br />
                <input className = "input" type="email" name="email" id="emailInput" required/>
                
                <br />
                <br />

                <label htmlFor="passwordInput">Password</label>
                <br />
                <input className = "input" type="password" name="password" id="passwordInput" required/>
            </form>
            
            <br />
            
            { /* TODO: make the button have red background and be disable when the input its not valid. Make it green once the input its valid. */}
            <button onClick={logIn} type='submit' className='login__button'>Iniciar sesión</button>
        </section>
  )
}
