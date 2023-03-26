import React from "react";
import {Navbar} from "../Navbar/Navbar";


interface IProps {

}

export const LoggedLayout = (props: IProps) => {
    return (
        <main className={"layout"}>
            <Navbar />
        </main>
    );
}