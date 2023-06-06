import './Login.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch()
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

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
        } catch (error) {
            setShowAlert(true)
        }
    };

    const handleCloseAlert=()=>{
        setShowAlert(false)
    }

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
        <Snackbar open={showAlert} autoHideDuration={4000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="info" sx={{ width: '100%' }}>
                El usuario no se encuentra registrado.
            </Alert>
        </Snackbar>
    </form>
    
  );
};

export default Login;