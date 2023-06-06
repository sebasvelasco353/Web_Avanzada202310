import React, {useState} from "react";
//import "./addManga.css"
import {auth, db} from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Table, TableHead, TableRow, 
		 TableCell, TableBody, TextField,
		 Button, FormGroup, Typography,
		 Container, Grid, Select, MenuItem} from "@mui/material";

function AddManga(){

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [amount, setAmount] = useState("");
	const [available, setAvailable] = useState("");
	const [image, setImage] = useState("");

	const isEmpty = (value) => {
	  return value === "";
	};

	const handleAddManga = async () => {
		if(!isEmpty(name) && !isEmpty(price) && 
    		!isEmpty(amount) && !isEmpty(available) && !isEmpty(image)){
			try{
				const docRef = await addDoc(collection(db, "mangas"), {
							    			  Cantidad: amount,
											  Disponible: available,
											  Nombre: name,
											  Precio: price,
											  image: image
											});
				alert("Manga agregado correctamente")
			}catch(error){
				console.log(error)
			}
			window.location.href = "#/mangas";	
		}else{
			alert("Llena todos los campos")
		}
		
	}
	
	return(
		<>
		<Container>
		  	<Grid container spacing={2}>
			  	<Grid xs={2}></Grid>
			  	<Grid xs={8}>
			  		<Table>
			          <TableHead>
			            <TableRow>
			              <TableCell colSpan={2}>
			                <Typography variant="h3" align="center">Agregar nuevo manga</Typography>
			              </TableCell>
			            </TableRow>
			          </TableHead>
			          <TableBody>
			            <TableRow>
			              <TableCell>
			              	<label>Cantidad:</label>
			              </TableCell>
			              <TableCell>
			                  <TextField
			                    id="amount"
			                    label="Cantidad"
			                    onChange={(e) => setAmount(e.target.value)}
			                  />
			              </TableCell>
			            </TableRow>
			            <TableRow>
			              <TableCell>
			              	<label>Disponible:</label>
			              </TableCell>
			              <TableCell>
				              <Select
				                id="available"
				                label="Disponible"
				                value={available}
				                onChange={(e) => setAvailable(e.target.value)}
				              >
				                <MenuItem value={true}>True</MenuItem>
				                <MenuItem value={false}>False</MenuItem>
				              </Select>
			              </TableCell>
			            </TableRow>
			            <TableRow>
			              <TableCell>
			              	<label>Nombre:</label>
			              </TableCell>
			              <TableCell>
			                  <TextField
			                    id="name"
			                    label="Nombre"
			                    onChange={(e) => setName(e.target.value)}
			                  />
			              </TableCell>
			            </TableRow>
			            <TableRow>
			              <TableCell>
			              	<label>Precio:</label>
			              </TableCell>
			              <TableCell>
			                  <TextField
			                    id="price"
			                    label="Precio"
			                    onChange={(e) => setPrice(e.target.value)}
			                  />
			              </TableCell>
			            </TableRow>
			            <TableRow>
			              <TableCell>
			              	<label>Imagen url:</label>
			              </TableCell>
			              <TableCell>
			                  <TextField
			                    id="image"
			                    label="Imagen"
			                    onChange={(e) => setImage(e.target.value)}
			                  />
			              </TableCell>
			            </TableRow>
			            <TableRow>
			              <TableCell>
			                  <Button variant="contained" onClick={handleAddManga}>
			                    Agregar
			                  </Button>
			              </TableCell>
			            </TableRow>
			          </TableBody>
			        </Table>
			  	</Grid>
		  	</Grid>
		</Container>
		</>
	);
}

export default AddManga;