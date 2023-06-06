import {createContext} from "react";
import {User} from "../../interfaces/interfaces";

interface IUserContext {
    id: string,
    username: string,
    getUser : () => User,
    setUser: (user : User) => void,
    clear: () => void,
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export default UserContext;