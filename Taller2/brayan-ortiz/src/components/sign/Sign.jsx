import './Sign.css'
import React, { useState } from 'react';
import {auth} from "../../config/firebase"
import {createUserWithEmailAndPassword } from "firebase/auth"
import Alert from '../alertMaterialUI/Alert';

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);

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
        setShowAlert(true)
    } catch (error) {
        setErrorAlert(true)
    }
  };

  const handleConfirm=()=>{
    setErrorAlert(false)
    setShowAlert(false)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form_container'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
        <button type="submit">Registrarse</button>
      </div>
      <Alert title={"Usuario registrado"} state={showAlert} message={"Usuario registrado con éxito."} onConfirmation={handleConfirm}/>
      <Alert title={"Registro fallido"} state={showErrorAlert} message={"El usuario ya se escuentra registrado."} onConfirmation={handleConfirm}/>
    </form>
  );
};

export default Sign;