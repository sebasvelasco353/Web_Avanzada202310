import {Button as MuiButton, SxProps, Theme} from "@mui/material";
import "./Button.css";

export interface IPropTypes {
    label: string,
    className?: string,
    type? : "button" | "reset" | "submit",
    color? : "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    sxProps? : SxProps<Theme>,
    variant?: "outlined" | "text" | "contained"
}

export const Button = (
    props: IPropTypes
) => {
    return (
        <MuiButton type={props.type} sx={props.sxProps} color={props.color} className={props.className} variant={props.variant || "contained"}>
            {props.label}
        </MuiButton>
    );
}
