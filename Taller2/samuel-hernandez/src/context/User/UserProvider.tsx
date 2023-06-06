import UserContext from "./UserContext";
import {useReducer} from "react";
import {User} from "../../interfaces/interfaces";
import {userReducer} from "./userReducer";

interface IProps {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = (props: IProps) => {

    const defaultState: User = {
        email: "none@none.no",
        hasSpent: 0,
        isAdmin: false,
        uid: "INVALID",
        displayName: "none"
    }

    const [userState, dispatch] = useReducer(userReducer, defaultState);

    const setUser = (user: User) => {
        dispatch({type: "set", payload: user});
    }

    const getUser = () => {
        dispatch({type: "get", payload: null});
        return userState;
    }

    const clear = () => {
        dispatch({type: "clear", payload: null});
    }

    return (
        <UserContext.Provider value={{...userState, getUser, setUser, clear}}>
            {props.children}
        </UserContext.Provider>
    );
}