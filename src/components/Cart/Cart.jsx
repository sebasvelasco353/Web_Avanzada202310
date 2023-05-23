import React from "react";

function Cart(){

	const user = React.useContext(EcommerceContext)
	const renderCart = () => {
		if (user.length == 0){
			return(
				)
		}
	}

	return(
	  <div>
	  	{renderCart()}
	  </div>
	);
}