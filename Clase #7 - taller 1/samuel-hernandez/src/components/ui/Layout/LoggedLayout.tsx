import React from "react";
import {Navbar} from "../Navbar/Navbar";


interface IProps {

}

export const LoggedLayout = (props: IProps) => {
    return (
        <div className={"layout"}>
            <Navbar />
        </div>
    );
}