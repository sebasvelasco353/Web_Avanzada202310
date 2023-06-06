import "./App.css"
import React, {useState, useEffect} from "react";
import {
	Route,
	NavLink,
	HashRouter,
	Router,
	Routes,
	Navigate
} from "react-router-dom"; 
import {auth, db} from "./config/firebase";
import LogIn from "./components/Login/logIn";
import Sigin from "./components/Signin/signIn";
import Cart from "./components/Cart/cart";
import Catalogue from "./components/Manga/manga";
import AddManga from "./components/Manga/addManga";
import { signOut } from 'firebase/auth';
import { AppBar, List, ListItem, ListItemText} from "@mui/material";

export const EcommerceContext = React.createContext();

function App(){
	const [user, setUser] = useState([]);
	const [mangasInCart, setmangasInCart] = useState([])
	const [logBtnText, setText] = useState("")

	const handleAddToCart = (manga) => {
		if(user.length > 0){
			if(!mangasInCart.some((item) => item.id === manga.id)){
	            const newCart = [...mangasInCart, manga];
	            setmangasInCart(newCart);
	            alert("Agregado correctamente")
        	}
		}else
			alert("Registrate para usar esta función")
    }

    const deleteMangaFromCart = (manga) => {
        const mangaIndex = mangasInCart.findIndex((toDelete) => toDelete.id === manga.id);
        if (mangaIndex !== -1) {
        	const cart = [...mangasInCart]
        	cart.splice(mangaIndex, 1)
        	setmangasInCart(cart);
        }   
    }

    const handleLogout = async () => {
    	if(user.length > 0){
	    	try {
		      await signOut(firebaseAuth);
		      setUser([]);
		    } catch (error) {
		      console.error(error);
		    }
    	}
	}

    useEffect(()=>{
        setText((user.length > 0)?"Log out":"Log in");
    }, []);

    const renderHeader = () => {
    	if(user[2] == 'admin'){
    		return(
	    		<ul className="header">
			      <div className="left-container">
					<li><NavLink to="/mangas">Catalogo</NavLink></li>
					<li><NavLink to="/addManga">Agregar</NavLink></li>
			      </div>
			      <div className="right-container">	
					<li><NavLink to="/cart">Carrito</NavLink></li>
					<li onClick={handleLogout}><NavLink to="/signin">{logBtnText}</NavLink></li>
			      </div>
			    </ul>
    			);
    	}else{
    		return(
    			<List className="header">
	    			<div className="left-container">
	    				<ListItem>
	    					<NavLink to="/mangas">Catalogo</NavLink>
	    				</ListItem>
			      	</div>
			      	<div className="right-container">
			      		<ListItem>
			      			<NavLink to="/cart">Carrito</NavLink>
			      		</ListItem>	
						<ListItem onClick={handleLogout}>
							<NavLink to="/signin">{logBtnText}</NavLink>
						</ListItem>
				    </div>
    			</List>
    		);
    	}//End if

    }//End renderHeader

	return(
		<HashRouter>
		  <AppBar position="fixed">
			  	{renderHeader()}
		  </AppBar>
		  <EcommerceContext.Provider value={user}>
			  <div className="content" style={{ marginTop: "64px"}}>
			    <Routes>
			    	<Route path="/login" element={<LogIn user = {setUser}/>}/>
			    	<Route path="/signin" element={<Sigin user = {setUser}/>}/>
			    	<Route path="/cart" element={<Cart cart = {mangasInCart} handleDelete = {deleteMangaFromCart}/>}/>
			    	<Route path="/mangas" element={<Catalogue addToCart = {handleAddToCart}/>}/>
			    	<Route path="/" element={<Catalogue addToCart = {handleAddToCart}/>}/>
			    	<Route path="/addManga" element={ (user[2] == 'admin') ? <AddManga/> : <Navigate to='/' />}/>
			    </Routes>
			  </div>
		  </EcommerceContext.Provider>	
		</HashRouter>
	);
}

export default App;
