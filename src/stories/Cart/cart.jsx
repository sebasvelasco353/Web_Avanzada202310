import React from "react";
import NotUserLogged from "../../components/Error/NoLogIn";
import { EcommerceContext } from "../../App2";
import InCart from "./mangasInCart";
import { Button, FormGroup, Typography,
		 Container, Grid, Card,
		 CardMedia, CardContent, Paper } from "@mui/material";

function Cart({cart, handleDelete}){

	const user = React.useContext(EcommerceContext)
	const renderCart = () => {
		if (user.length > 0){
			if(cart.length > 0)
				return(<><InCart cart = {cart} handleDelete = {handleDelete}/></>);
			else{
				return(
					<>
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
							    <Typography variant="h5" style={{ textAlign: "center" }}>
							        Aún no agregaste nada a tu carrito
							    </Typography>
						  	</Grid>
						  	</Grid>
						  </Container>
						</div>
					</>
					);
			}
		}
		else
			return(<><NotUserLogged/></>);
	}

	return(
	  <div>
	  	{renderCart()}
	  </div>
	);
}

export default Cart;