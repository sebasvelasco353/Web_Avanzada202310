import React from "react";
import reducer, {initialState} from "../AppContext";

function UserInfo(){

    const [state, dispatch] = React.useReducer(reducer, initialState );

    if(state.isLoggedIn){
        return(
            <div>
                <div class="card">
                    <div class="info">
                      <h4><b>{state.user[0]}</b></h4>
                      <p>{state.user[1]}</p>
                    </div>
                  </div>
            </div>
        ); 
    }else{
        return(
            <div class="container">
                <h1>Tal parece que aún no te haz loggeado, da click en el botón log in
                    arriba a la derecha si deseas hacerlo.
                </h1>
            </div>
        )
    }
}

export default UserInfo;