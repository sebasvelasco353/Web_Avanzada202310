import React from "react";
import "./manga.css"
import { useState, useEffect } from "react";
import {auth, db} from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function Catalogue({addToCart}){

	const [mangas, setMangas] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	const fetchMangas = async () => {
		try {			
			const q = (searchQuery != "")
			?query(collection(db, "mangas"), where("name", "==", searchQuery))
			:collection(db, "mangas")
			const querySnapshot = getDocs(q);
			const formatted = querySnapshot.docs.map( (manga) => ({
				...manga.data(), id: manga.id
			}));
			setMangas(formatted);
		}catch(error){console.error(error);}
	}

	useEffect(()=>{
		fetchMangas();
    }, [searchQuery]);

    const mangaGroups = mangas.reduce((groups, manga, index) => {
	    if (index % 4 === 0)
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
	  <div>
	    <div className="browser">
	      <form onSubmit={handleSearch}>
	        <lu>
		  <li><input type="text" id="manga_name" name="manga_name" placeholder="Buscar manga"/></li>
		  <li><button type="submit">search</button></li>
		</lu>
	      </form>
	    </div>
	    <div className="catalogue">
	      {mangaGroups.map((group) => (
	        <div className="product-group">
	          {group.map((product) => (
	            <div className="card">
	              <div className="container">
	                <h4><b>{product.name}</b></h4>
	                <p>{product.price}</p>
	                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
	              </div>
	            </div>
	          ))}
	        </div>
	      ))}
	    </div>
	  </div>
	);
}
export default Catalogue;