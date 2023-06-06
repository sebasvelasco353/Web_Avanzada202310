import React, {useState} from "react";
import {auth, db} from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import { Table, TableHead, TableRow, 
		 TableCell, TableBody, TextField,
		 Button, FormGroup, Typography,
		 Container, Grid } from "@mui/material";
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
	<>
    <Container>
    <Grid container spacing={2}>
	    <Grid xs={4}></Grid>
	    <Grid xs={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="h3" align="center">Registrate</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
              	<label>Correo electrónico:</label>
              </TableCell>
              <TableCell>
                  <TextField
                    id="email" 
                    label="Correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              	<label>Contraseña:</label>
              </TableCell>
              <TableCell>
                  <TextField
                    type="password" 
                    id="password" 
                    label="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                  <Button variant="contained" onClick={handleSignIn}>
                    Registrarse
                  </Button>
              </TableCell>
              <TableCell>
              	<Button variant="contained" onClick={handleLogIn}>
                    Ingresar
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
export default Sigin;