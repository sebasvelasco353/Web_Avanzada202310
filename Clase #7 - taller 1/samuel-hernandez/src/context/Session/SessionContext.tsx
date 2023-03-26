import {createContext} from "react";

interface ISessionContext {
    logged : boolean
    login : () => boolean
    logout : () => boolean,
}

const defaultState :ISessionContext = {
    logged : false,
    login: () => false,
    logout: () => false,
}

const SessionContext = createContext<ISessionContext>(defaultState);

export default SessionContext;