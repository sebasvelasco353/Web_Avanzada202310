import { firebaseAuth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './signin.css'

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    try {
        createUserWithEmailAndPassword(firebaseAuth, email, password).then((res) => {
        })
    } catch (error) {
        console.error(error);
    }
  }
  return (
    <div className="SignIn">
        <h3>Dont have an account?</h3>
        <input
          placeholder='email@email.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignIn;