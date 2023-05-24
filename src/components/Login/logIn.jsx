import React from "react";
import {auth, db} from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; 
import "./login.css"

function Login({user}){

	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogIn = async () => {
		try {
			const userData = await signInWithEmailAndPassword(auth, email, password);
			const q = query(collection(db, "usuario"), where("correo", "==", email));
			const querySnapshot = await getDocs(q);
			const querySnapshotFormatted = querySnapshot.docs.map( (manga) => ({
				...manga.data()
			}));
			console.log([email, password, querySnapshotFormatted[0].tipo]);
			user([email, password, querySnapshotFormatted[0].tipo]);
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
						         <button onClick={handleLogIn}>Login</button>
						         <button onClick={handleSignIn}>Signin</button>
						        </div></td>
		        		</tr>
		        	</tbody>
			    </table>
		    </form>
	    </div>
	);
}
export default Login;
