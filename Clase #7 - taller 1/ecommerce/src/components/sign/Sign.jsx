import './Sign.css'
import React, { useState } from 'react';
import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        setEmail("")
        setPassword("")
        alert("Usuario registrado.")
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form_container'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Sign;