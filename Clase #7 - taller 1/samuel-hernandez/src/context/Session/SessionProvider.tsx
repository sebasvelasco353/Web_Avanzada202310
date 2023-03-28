import SessionContext from "./SessionContext";
import {useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import {sessionReducer} from "./sessionReducer";
import {SessionState} from "../../interfaces/interfaces";
import {Session} from "inspector";

interface IProps {
    children : JSX.Element | JSX.Element[]
}

export const SessionProvider = (props: IProps) => {

    const defaultState :SessionState = {
        logged : false,
    }

    const [sessionState, dispatch] = useReducer(sessionReducer, defaultState);
    const navigate = useNavigate();

    const login = () => {
        dispatch({type: "toggle", payload: true});
        navigate("/");
    };

    const logout = () => {
        dispatch({type: "toggle", payload: false});
        navigate("/login");
    };

    return (
        <SessionContext.Provider value={{sessionState, login, logout}} >
            { props.children }
        </SessionContext.Provider>
    );
}