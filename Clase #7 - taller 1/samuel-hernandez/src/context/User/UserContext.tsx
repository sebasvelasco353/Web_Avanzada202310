import {createContext, Dispatch, SetStateAction} from "react";

interface IUserContext {
    id : string,
    username : string,
    setId : Dispatch<SetStateAction<string>>,
    setUsername : Dispatch<SetStateAction<string>>,
}

const defaultState :IUserContext = {
    id : "",
    username: "none",
    setId: (i ) => "none",
    setUsername: (u ) => "none",
}

const UserContext = createContext<IUserContext>(defaultState);

export default UserContext;