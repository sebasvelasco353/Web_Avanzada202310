import UserContext from "./UserContext";
import {useReducer, useState} from "react";
import {CartItem, User} from "../../interfaces/interfaces";
import {userReducer} from "./userReducer";

interface IProps {
    children : JSX.Element | JSX.Element[]
}

export const UserProvider = (props: IProps) => {

    const defaultState :User = {
        id : "INVALID",
        username: "none"
    }

    const [userState, dispatch] = useReducer(userReducer, defaultState);

    const setUser = (user: User) => {
        dispatch({type: "set", payload: user});
    }

    const clear = () => {
        dispatch({type: "clear", payload: null});
    }

    return (
        <UserContext.Provider value={{...userState, setUser, clear}} >
            { props.children }
        </UserContext.Provider>
    );
}