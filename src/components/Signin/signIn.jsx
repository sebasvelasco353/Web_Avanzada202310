import React, {useState} from "react";
import {auth, db} from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import "./sigin.css"

function Sigin({user}){

	const [alias, setAlias] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignIn = async () => {
		console.log(email)
		console.log(password)
		try {
			console.log("Antes de conectar")
			await createUserWithEmailAndPassword(auth, email, password);
			console.log("Despues de conectar")
			const docRef = await addDoc(collection(db, "usuario"), {
						    			  correo: email,
										  tipo: "client"
										});
			console.log("Despues de conectar 2")
			navigate("/login")
		} catch (error) {
			console.log("Error")
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
		        		<tr></tr>
		        		<tr></tr>
		        		<tr>
		        			<td></td>
		        			<td></td>
		        			<td></td>
		        			<td></td>
		        			<td>
		        				<div className="form-group">
						          <label htmlFor="email">Correo electrónico:</label>
						          <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
						        </div></td>
		        		</tr>
		        		<tr>
		        			<td></td>
		        			<td></td>
		        			<td></td>
		        			<td></td>
		        			<td>
		        				<div className="form-group">
						          <label htmlFor="password">Contraseña:</label>
						          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
						        </div></td>
		        		</tr>
		        		<tr>
		        			<td></td>
		        			<td></td>
		        			<td></td>
		        			<td></td>
		        			<td></td>
		        			<td>
		        				 <div className="form-group">
						         <button onClick={handleSignIn}>Signin</button>
						         <button onClick={handleLogIn}>Login</button>
						        </div></td>
		        		</tr>
		        	</tbody>
			    </table>
		    </form>
	    </div>
		);
}
export default Sigin;