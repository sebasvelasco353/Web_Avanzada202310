import {createContext} from "react";
import {SessionState} from "../../interfaces/interfaces";

interface ISessionContext {
    sessionState: SessionState
    login : () => void
    logout : () => void,
}

const SessionContext = createContext<ISessionContext>({} as ISessionContext);

export default SessionContext;