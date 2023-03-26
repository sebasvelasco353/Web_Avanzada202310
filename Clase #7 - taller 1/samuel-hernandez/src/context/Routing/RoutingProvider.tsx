import RoutingContext, {Routes} from "./RoutingContext";
import {Dispatch, SetStateAction, useState} from "react";

interface IProps {
    children : JSX.Element | JSX.Element[]
}

export const RoutingProvider = (props: IProps) => {

    const [route, setRoute] : [Routes, Dispatch<SetStateAction<Routes>>] = useState("login" as Routes);
    const setCurrent = (next : Routes) : Routes => {
        setRoute(next);
        return route;
    }

    return (
        <RoutingContext.Provider value={{current: route, setCurrent}} >
            { props.children }
        </RoutingContext.Provider>
    );
}