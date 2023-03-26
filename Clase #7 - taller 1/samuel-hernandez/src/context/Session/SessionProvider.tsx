import SessionContext from "./SessionContext";
import {useState} from "react";

interface IProps {
    children : JSX.Element | JSX.Element[]
}

export const SessionProvider = (props: IProps) => {

    const [logged, setLogged] = useState(true);

    const login = () : boolean => {
        setLogged(true);
        return logged;
    };

    const logout = () : boolean => {
        setLogged(false);
        return logged;
    };

    return (
        <SessionContext.Provider value={{logged, login, logout}} >
            { props.children }
        </SessionContext.Provider>
    );
}