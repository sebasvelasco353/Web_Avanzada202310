import {StudentType} from "./StudentType";
import "./Student.css";
import {Plus, Dash, Trash} from 'react-bootstrap-icons';
import React from "react";

export const Student = (props: StudentType) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        alert("Student Clicked!")
    };

    const increaseSemester = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        alert("Increment!")
    };

    const decreaseSemester = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        alert("Decrement!")
    };

    const removeStudent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        alert("Bye!!")
    };

    return (
        <article className={"student"} onClick={handleClick}>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p> {props.age}</p>
            <p>{props.career}</p>
            <div className={"student__semester"}>
                <button onClick={increaseSemester}
                        className={"student__button student__button--add"}><Plus size={26}/>
                </button>
                <p>{props.semester}</p>
                <button onClick={decreaseSemester}
                        className={"student__button student__button--remove"}><Dash size={26}/>
                </button>
            </div>
            <button className={"student__button student__button--delete"} onClick={removeStudent}><Trash size={26}/>
            </button>
        </article>
    );
}