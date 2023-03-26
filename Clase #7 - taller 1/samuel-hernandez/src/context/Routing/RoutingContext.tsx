import {createContext} from "react";

export type Routes = "home" | "cart" | "login" | "profile" | "";

interface IRoutingContext {
    current : Routes;
    setCurrent : (route : Routes) => string
}

const defaultState :IRoutingContext = {
    current : "",
    setCurrent : (route) => route
}

const RoutingContext = createContext<IRoutingContext>(defaultState);

export default RoutingContext;