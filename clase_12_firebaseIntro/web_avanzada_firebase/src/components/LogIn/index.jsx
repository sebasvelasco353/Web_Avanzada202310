import { useState } from "react";
import { firebaseAuth } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import './LogIn.css'

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = async () => {
      console.log("handleLogIn");
      try {
          await signInWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
          console.error(error);
      }
    }
    return (
      <div className="LogIn">
        <h3>Already have an account?</h3>
        <input
        placeholder='email@email.com'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        placeholder='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogIn}>Log In</button>
      </div>
    )
}

export default LogIn