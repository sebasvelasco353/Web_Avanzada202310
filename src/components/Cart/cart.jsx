import React from "react";
import NotUserLogged from "../../components/Error/NoLogIn";
import { EcommerceContext } from "../../App2";
import InCart from "./mangasInCart";

function Cart({cart, handleDelete}){

	const user = React.useContext(EcommerceContext)
	const renderCart = () => {
		if (user.length > 0){
			return(<><InCart cart = {cart} handleDelete = {handleDelete}/></>);
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