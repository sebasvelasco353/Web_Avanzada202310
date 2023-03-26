import UserContext from "./UserContext";
import {useState} from "react";

interface IProps {
    children : JSX.Element | JSX.Element[]
}

export const UserProvider = (props: IProps) => {

    const [id, setId] = useState("invalid");
    const [username, setUsername] = useState("none");

    return (
        <UserContext.Provider value={{id, username, setId, setUsername}} >
            { props.children }
        </UserContext.Provider>
    );
}