import React from "react";
import "./manga.css"
import { useState, useEffect } from "react";
import {auth, db} from "../../config/firebase";
import { collection, doc, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { Button, FormGroup, Typography,
		 Container, Grid, Card,
		 CardMedia, CardContent } from "@mui/material";

function DeleteManga(){

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

  	const handleDeleteManga = async (manga) => {
	  try {
	    const mangaRef = doc(db, "mangas", manga.id);
	    await deleteDoc(mangaRef);
	    console.log("Manga eliminado correctamente");
	    setMangas(mangas.filter((m) => m.id !== manga.id));
	  } catch (error) {
	    console.error("Error al eliminar el manga:", error);
	  }
	};

	return(
	  <>
	    <Grid xs={4}></Grid>
	    <Grid xs={8}>
	    <div className="catalogue">
	      {mangaGroups.map((group) => (
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
			    		<Button onClick={() => handleDeleteManga(product)}
			    			style={{ color: "red" }}>
		                    Eliminar
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
export default DeleteManga;