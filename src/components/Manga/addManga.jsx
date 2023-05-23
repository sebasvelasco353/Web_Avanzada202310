import React, {useState} from "react";
//import {auth, db} from "../../config/firebase";
//import { collection, addDoc } from "firebase/firestore";

function AddManga(){

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [amount, setAmount] = useState("");
	const [available, setAvailable] = useState("");

	const handleAddManga = async () => {
		try{
			const docRef = await addDoc(collection(db, "mangas"), {
						    			  cantidad: amount,
										  Disponible: available,
										  Nombre: name,
										  Precio: price
										});
			alert("Manga agregado correctamente")
			navigate("/addManga")
		}catch(error){
			alert("No se ha podido agregar el manga")
		}
	}
	
	return(
	  <div>
	    <form>
		<table>
		  <thead>
            <tr>
		      <th colSpan="2">Agregar nuevo manga</th>
		    </tr>
		  </thead>
		  <tbody>
		   <tr>
		     <td>Nombre: </td>
		     <td><input type="text" onChange={(e) => setName(e.target.value)}/></td>
		   </tr>
		   <tr>
		     <td>Precio: </td>
		     <td><input type="password" onChange={(e) => setPrice(e.target.value)}/></td>
		   </tr>
		   <tr>
		     <td>Cantidad: </td>
		     <td><input type="password" onChange={(e) => setAmount(e.target.value)}/></td>
		   </tr>
		   <tr>
		     <td>Disponible: </td>
		     <td><input type="password" onChange={(e) => setAvailable(e.target.value)}/></td>
		   </tr>
		   <tr>
		   	<td></td>
		   	<td>
		   		<button onClick={handleAddManga}>Agregar</button>
		   	</td>
		   	<td></td>
		   </tr>
		  </tbody>
		</table>
	    </form>
	  </div>
	);
}

export default AddManga;