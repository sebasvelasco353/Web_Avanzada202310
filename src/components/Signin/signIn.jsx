import React, {useState} from "react";
import {auth} from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

function Sigin({user}){

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate("/login")
		} catch (error) {
			console.error(error);
		}
	}

	const handleLogIn = () => {
		navigate("/login")
	}

	return(
		<div>
		    <form>
			<table>
			  <thead>
	            <tr>
			      <th colSpan="2">Sign in</th>
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
			   		<button onClick={handleSignIn}>Sign in</button>
			   		<button onClick={handleLogIn}>Log in</button>
			   	</td>
			   	<td></td>
			   </tr>
			  </tbody>
			</table>
		    </form>
	  </div>
		);
}

export default Sigin;