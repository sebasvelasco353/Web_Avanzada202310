import {createContext} from "react";
import {User} from "../../interfaces/interfaces";

interface IUserContext {
    uid: string,
    displayName: string,
    getUser : () => User,
    setUser: (user : User) => void,
    clear: () => void,
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export default UserContext;