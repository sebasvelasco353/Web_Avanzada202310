import React from 'react';
import "./../styles/Login.css";

import LoginForm from '../components/LoginForm';

import LoginBanner from './../resources/Banner_login_vi_sm.png';

export default function LoginPage() {
  return (
      <div className='container'>
        <div className='loginDiv'>
            
            <LoginForm/>

            <section className="login__image__section">
                <img id='login__banner' src={LoginBanner} alt="Login image" />
            </section>
        
        </div>
        
      </div>
  )
}
