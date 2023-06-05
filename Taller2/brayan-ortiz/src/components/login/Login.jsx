import './Login.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            dispatch({type: 'Login'})
            alert("Usuario autenticado.") 
        } catch (error) {
            alert("El usuario no se encuentra registrado.")
        }
    };

  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className='form_container'>
            <label>
                Email:
                <input type="email" id='email' value={email} onChange={handleEmailChange} required/>
            </label>
            <label>
                Password:
                <input type="password" id='password' value={password} onChange={handlePasswordChange} required/>
            </label>
            <button type="submit">LogIn</button>
        </div>  
    </form>
    
  );
};

export default Login;