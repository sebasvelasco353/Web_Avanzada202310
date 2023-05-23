import "./App.css"
import React, {useState} from "react";
import {
	Route,
	NavLink,
	HashRouter,
	Router,
	Routes,
	Navigate
} from "react-router-dom"; 
import LogIn from "./components/Login/logIn";
import Sigin from "./components/Signin/signIn";
import Cart from "./components/Cart/cart";
import Catalogue from "./components/Manga/manga";
import AddManga from "./components/Manga/addManga";

export const EcommerceContext = React.createContext();

function App(){
	//
	const [user, setUser] = useState([]);
	const [mangasInCart, setmangasInCart] = useState([])

	const handleAddToCart = (manga) => {
        if(!mangasInCart.includes(manga)){
            const newCart = [...mangasInCart, manga];
            setProductsInCart(newCart);
        }
    }

    const deleteMangaFromCart = (manga) => {
        const mangaIndex = mangasInCart.findIndex((toDelete) => toDelete.id === manga.id);
        if (mangaIndex !== -1) {
            mangasInCart.splice(mangaIndex, 1);
        }
    }

    const renderHeader = () => {
    	if(user[2] == 'admin'){
    		return(
    			<>
	    		<ul className="header">
			      <div className="left-container">
					<li><NavLink to="/mangas">Catalogo</NavLink></li>
					<li><NavLink to="/addManga">Agregar</NavLink></li>
			      </div>
			      <div className="right-container">	
					<li><NavLink to="/cart">Carrito</NavLink></li>
					<li><NavLink to="/signin">Usuario</NavLink></li>
			      </div>
			    </ul>
	    		</>
    			);
    	}else{
    		return(
    		<>
    		<ul className="header">
		      <div className="left-container">
				<li><NavLink to="/mangas">Catalogo</NavLink></li>
		      </div>
		      <div className="right-container">	
				<li><NavLink to="/cart">Carrito</NavLink></li>
				<li><NavLink to="/signin">Usuario</NavLink></li>
		      </div>
		    </ul>
    		</>
    		);
    	}//End if

    }//End renderHeader

	return(
		<HashRouter>
		  <div>
		    {renderHeader()}
		  </div>
		  <EcommerceContext.Provider value={user}>
			  <div className="content">
			    <Routes>
			    	<Route path="/login" element={<LogIn user = {setUser}/>}/>
			    	<Route path="/signin" element={<Sigin user = {setUser}/>}/>
			    	<Route path="/cart" element={<Cart cart = {mangasInCart} handleDelete = {deleteMangaFromCart}/>}/>
			    	<Route path="/mangas" element={<Catalogue addToCart = {handleAddToCart}/>}/>
			    	<Route path="/addManga" element={ (user[2] == 'admin') ? <AddManga/> : <Navigate to='/' />}/>
			    </Routes>
			  </div>
		  </EcommerceContext.Provider>
		</HashRouter>
	);
}

export default App;
