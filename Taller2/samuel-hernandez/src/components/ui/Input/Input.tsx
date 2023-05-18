import React, {useState} from "react";
import "./Input.css";

export const Input = (
    props : {
        type : string,
        label : string | JSX.Element,
        name : string,
        icon? : JSX.Element,
        required? : boolean,
        autoFocus? : boolean,
        actionIcon? : JSX.Element,
        actionClick? : React.MouseEventHandler<HTMLButtonElement>
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


    return props.type === "area" ? (
        <div tabIndex={1} onFocus={handleFocusIn} onBlur={handleFocusOut}
             className={`input ${isFocused ? "input__focused" : ""}`}>
            <label htmlFor={props.name} className={"input__label"}>{props.label}</label>
            <textarea {...props} className={"input__box"}/>
        </div>
    ) : (
        <div tabIndex={1} onFocus={handleFocusIn} onBlur={handleFocusOut}
             className={`input ${isFocused ? "input__focused" : ""}`}>
            <label htmlFor={props.name} className={"input__label"}>{props.label}</label>
            {props.icon || <div className={"input__icon"}/>}
            <input {...props} className={"input__box"}/>
            {props.actionClick && <button tabIndex={0} onClick={props.actionClick}>
                {props.actionIcon || <></>}
            </button>}
        </div>
    );
}