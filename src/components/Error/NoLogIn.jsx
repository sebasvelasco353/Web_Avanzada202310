import React from "react";
import { Button, FormGroup, Typography,
		 Container, Grid, Card,
		 CardMedia, CardContent, Paper } from "@mui/material";


function NotUserLogged(){
	return(
	  <div style={{ marginTop: "100px"}}>
	  <Container>
	  	<Grid container spacing={2}>
	  	<Grid xs={2}></Grid>
	  	<Grid xs={8}>
		    <img
		        src="https://s3.amazonaws.com/images.pymas.com.co/_600xAUTO_crop_center-center/carrito-de-compras-virtual.png"
		        alt="Portada"
		        className="card-image"
		        style={{
            	width: "100%",
            	height: "auto",
            	marginBottom: "16px",
          		}}
	        />
		    <Typography variant="h5">
		        Parece que aún no has ingresado al sistema. Regístrate para activar esta función.
		    </Typography>
	  	</Grid>
	  	</Grid>
	  </Container>
	  </div>
	);
}

export default NotUserLogged;