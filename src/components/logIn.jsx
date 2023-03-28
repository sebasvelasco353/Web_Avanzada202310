import React from "react";
import reducer, {initialState} from "../AppContext";
import "./logIn.css"

function LogIn(){

    const [state, dispatch] = React.useReducer(reducer, initialState );

    const handleLogIn = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const alias = document.getElementById('alias').value.trim();
        if (nombre !== '' && alias !== '') {
            dispatch({type: 'LOGIN', user: [nombre, alias]});
            console.log(state.isLoggedIn)
            window.location.href = "#/products";
        }
    }

    return(
    <table className="form-table">
        <tbody>
            <tr>
                <td colSpan="2" className="form-title">Ingresar al sistema</td>
            </tr>
            <tr>
                <td><label >Nombre:</label></td>
                <td><input type="text" id="nombre" name="nombre" /></td>
            </tr>
            <tr>
                <td><label>Alias:</label></td>
                <td><input type="text" id="alias" name="alias" /></td>
            </tr>
            <tr>
                <td colSpan="2" className="form-btns" onClick={(e) => handleLogIn(e)}><button type="submit">Enviar</button></td>
            </tr>
        </tbody>
    </table>
    );
}

export default LogIn;