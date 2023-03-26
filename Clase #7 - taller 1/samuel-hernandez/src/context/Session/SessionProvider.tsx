import SessionContext from "./SessionContext";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
    children : JSX.Element | JSX.Element[]
}

export const SessionProvider = (props: IProps) => {

    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();

    const login = () : boolean => {
        setLogged(true);
        navigate("/");
        return logged;
    };

    const logout = () : boolean => {
        setLogged(false);
        navigate("/login");
        return logged;
    };

    return (
        <SessionContext.Provider value={{logged, login, logout}} >
            { props.children }
        </SessionContext.Provider>
    );
}