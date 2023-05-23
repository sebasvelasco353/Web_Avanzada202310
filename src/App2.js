import React, {useState} from "react";
import {
	Route,
	NavLink,
	HashRouter,
	Router,
	Routes
} from "react-router-dom"; 
import LogIn from "./components/Login/logIn";
import Sigin from "./components/Signin/signIn";

export const EcommerceContext = React.createContext();

function App(){
	//
	const [user, setUser] = useState([]);
	return(
		<HashRouter>
		  <div className="header">
		    <ul>
		      <div className="">
				<li><NavLink to="/mangas">Catalogo</NavLink></li>
		      </div>
		      <div className="">	
				<li><NavLink to="/cart">Carrito</NavLink></li>
				<li><NavLink to="/signin">Usuario</NavLink></li>
		      </div>
		    </ul>
		  </div>
		  <EcommerceContext.Provider value={user}>
			  <div className="content">
			    <Routes>
			    	<Route path="/login" element={<LogIn user = {setUser}/>}/>
			    	<Route path="/signin" element={<Sigin user = {setUser}/>}/>
			    </Routes>
			  </div>
		  </EcommerceContext.Provider>
		</HashRouter>
	);
}

export default App;
