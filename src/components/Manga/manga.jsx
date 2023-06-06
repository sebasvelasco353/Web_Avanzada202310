import React from "react";
import "./manga.css"
import { useState, useEffect } from "react";
import {auth, db} from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Button, FormGroup, Typography,
		 Container, Grid, Card,
		 CardMedia, CardContent } from "@mui/material";

function Catalogue({addToCart}){

	const [mangas, setMangas] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	const fetchMangas = async () => {
		try {			
			const q = (searchQuery != "")
			?query(collection(db, "mangas"), where("Nombre", "==", searchQuery))
			:collection(db, "mangas")
			const querySnapshot = await getDocs(q);
			const formatted = querySnapshot.docs.map( (manga) => ({
				...manga.data(), id: manga.id
			}));
			setMangas(formatted);
			console.log(mangas)
		}catch(error){console.error(error);}
	}

	useEffect(()=>{
		fetchMangas();
    }, [searchQuery]);

    const mangaGroups = mangas.reduce((groups, manga, index) => {
	    if (index % 3 === 0)
	      groups.push([]);
	    groups[groups.length - 1].push(manga);
	    return groups;
  	}, []);

  	const handleSearch = (event) => {
	    event.preventDefault();
    	const query = event.target.elements.manga_name.value;
    	setSearchQuery(query);
  	};

	return(
	  <>
	    <div className="browser">
			<table>
			  <tbody>
			   <tr>
			     <td></td>
			     <td>
			       <form onSubmit={handleSearch}>
			        <lu>
					  <li><input type="text" id="manga_name" name="manga_name" placeholder="Buscar manga"/></li>
					  <li><button type="submit">search</button></li>
					</lu>
			       </form>
	      		</td>
			     <td></td>
			   </tr>
			  </tbody>
			</table>
	    </div>
	    <Grid xs={4}></Grid>
	    <Grid xs={8}>
	    <div className="catalogue">
	      { mangaGroups.length === 0?
	      <Container>
		  	<Grid container spacing={2}>
		  	<Grid xs={3}></Grid>
		  	<Grid xs={8}>
			    <img
			        src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
			        alt="Portada"
			        className="card-image"
			        style={{
	            	width: "70%",
	            	height: "60%",
	            	marginBottom: "16px",
	            	marginTop: "16px",
	          		}}
		        />
			    <Typography variant="h5">
			        No se encontrarón resultados.
			    </Typography>
		  	</Grid>
		  	</Grid>
		  </Container>
	      :mangaGroups.map((group) => (
	        <div className="product-group">
	          {group.map((product) => (
	            <Card className="card">
			    	<CardMedia
			    	component="img"
  					alt="Portada"
  					height="300"
  					image={product.image}
			    	/>
			    	<CardContent >
			    		<Typography variant="h5">
			    			<b>{product.Nombre}</b>
			    		</Typography>
			    		<Typography variant="h6" style={{ color: 'green' }}>
			    			<b>${product.Precio}</b>
			    		</Typography>
			    		<Typography component="p">
			    			Cantidad: {product.Cantidad}
			    		</Typography>
			    		<Typography component="p">
			    			{(product.Disponible)?'Disponible':'No disponible'}
			    		</Typography>
			    		<Button onClick={() => addToCart(product)}>
		                    Agregar al carrito
		                </Button>
			    	</CardContent>
			    </Card>
	          ))}
	        </div>
	      ))}
	    </div>
	    </Grid>
	  </>
	);
}
export default Catalogue;