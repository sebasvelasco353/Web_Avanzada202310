import { firebaseAuth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("handleSignIn");
    try {
        createUserWithEmailAndPassword(firebaseAuth, email, password).then((res) => {
        })
    } catch (error) {
        console.error(error);
    }
  }
  return (
    <>
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
    </>
  )
}

export default SignIn;