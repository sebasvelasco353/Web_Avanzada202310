import React, {useState} from "react";
import "./Input.css";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";

export const Input = (
    props: {
        type: string,
        label: string | JSX.Element,
        name: string,
        icon?: JSX.Element,
        required?: boolean,
        autoFocus?: boolean,
        actionIcon?: JSX.Element,
        actionClick?: React.MouseEventHandler<HTMLButtonElement>
        passwordState?: string
    }
) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocusIn = (e: React.FocusEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsFocused(true);
    }

    const handleFocusOut = (e: React.FocusEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsFocused(false);
    }

    return (
        <TextField type={props.type} label={props.label} className={"input"} InputProps={
            {
                endAdornment: (
                    <InputAdornment className={"input__adornment"} position="end">
                        {props.actionIcon || <div className={"input__icon"}/>}
                    </InputAdornment>
                ),
                startAdornment: (
                    <InputAdornment className={"input__adornment"} position={"start"}>
                        {props.icon || <></>}
                    </InputAdornment>
                ),
            }}>

        </TextField>
    );
}