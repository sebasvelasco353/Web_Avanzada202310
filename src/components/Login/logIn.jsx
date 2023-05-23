import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Login({user}){

	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogIn = async () => {
		try {
			const {userData} = signInWithEmailAndPassword(auth, email, password);
			user(userData);
			navigate("/mangas")
		} catch (error) {
			console.error(error);
		}
	}

	const handleSignIn = () => {
		navigate("/signin")
	}

	return(
	  <div>
	    <form>
		<table>
		  <thead>
            <tr>
		      <th colSpan="2">Log in</th>
		    </tr>
		  </thead>
		  <tbody>
		   <tr>
		     <td>Correo electronico: </td>
		     <td><input type="text" onChange={(e) => setEmail(e.target.value)}/></td>
		   </tr>
		   <tr>
		     <td>Contraseña: </td>
		     <td><input type="password" onChange={(e) => setPassword(e.target.value)}/></td>
		   </tr>
		   <tr>
		   	<td></td>
		   	<td>
		   		<button onClick={handleLogIn}>Log in</button>
		   		<button onClick={handleSignIn}>Sign in</button>
		   	</td>
		   	<td></td>
		   </tr>
		  </tbody>
		</table>
	    </form>
	  </div>
	);
}

export default Login;
