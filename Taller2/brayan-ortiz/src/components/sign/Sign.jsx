import './Sign.css'
import React, { useState } from 'react';
import { auth, db } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from '@firebase/firestore';

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  //const collectionUsers = collection(db, 'users')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        //await addDoc(collectionUsers, {...{email: email, password: password}, creatoId: auth?.currentUser.uid});
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
        <input type="email" id="email" value={email} onChange={handleEmailChange} required/>

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
        <button type="submit">Registrarse</button>
      </div>
    </form>
  );
};

export default Sign;