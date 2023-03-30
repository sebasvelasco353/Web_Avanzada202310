import './Login.css'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        dispatch({type: 'Login'})
    };

  return (
    <div className='container_login'>
        <form className='container_login__form' onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">LogIn</button>
        </form>
    </div>
  );
};

export default Login;