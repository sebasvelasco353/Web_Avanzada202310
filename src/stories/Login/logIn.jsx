import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Table, TableHead, TableRow, 
		 TableCell, TableBody, TextField,
		 Button, FormGroup, Typography,
		 Container, Grid } from "@mui/material";
import "./login.css";

function Login({ user, onLogin}) {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      const q = query(collection(db, "usuario"), where("correo", "==", email));
      const querySnapshot = await getDocs(q);
      const querySnapshotFormatted = querySnapshot.docs.map((manga) => ({
        ...manga.data(),
      }));
      user([email, password, querySnapshotFormatted[0].tipo]);
      onLogin(true);
      navigate("/mangas");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
    <Container>
    <Grid container spacing={2}>
	    <Grid xs={4}></Grid>
	    <Grid xs={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="h3" align="center">Ingresar</Typography>
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
                    id="password"
                    label="Contraseña"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                  <Button variant="contained" onClick={handleLogIn}>
                    Ingresar
                  </Button>
              </TableCell>
              <TableCell>
              	<Button variant="contained" onClick={handleSignIn}>
                    Registrarse
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

export default Login;
