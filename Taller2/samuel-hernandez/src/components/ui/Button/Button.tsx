import {Button as MuiButton, SxProps, Theme} from "@mui/material";
import "./Button.css";
import {MouseEventHandler, ReactNode} from "react";

export interface IPropTypes {
    children: string | ReactNode[] | ReactNode,
    className?: string,
    type?: "button" | "reset" | "submit",
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    sxProps?: SxProps<Theme>,
    variant?: "outlined" | "text" | "contained"
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = (
    props: IPropTypes
) => {
    return (
        <MuiButton onClick={props.onClick} type={props.type} sx={props.sxProps} color={props.color} className={props.className}
                   variant={props.variant || "contained"}>
            {props.children}
        </MuiButton>
    );
}
