import {Button as MuiButton} from "@mui/material";
import "./Button.css";

export interface PropsType {
    label: string,
    className?: string,
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning",
    variant?: "outlined" | "text" | "contained"
}

const Button = (
    props: PropsType
) => {
    return (
        <MuiButton color={props.color} className={props.className} variant={props.variant}>
            {props.label}
        </MuiButton>
    );
}

export default Button;