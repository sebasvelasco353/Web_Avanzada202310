import {StudentType} from "./StudentType";
import "./Student.css";
import {Plus, Dash, Trash} from 'react-bootstrap-icons';
import React, {useContext} from "react";
import StudentContext from "../../context/Student/StudentContext";

export const Student = (props: StudentType) => {

    const {students, removeStudent, updateStudent} = useContext(StudentContext);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        alert("Modal, allegedly");
    };

    const increaseSemester = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const newVal = props.semester + 1;
        if (newVal === 13) {
            alert("Can't do more than 12 semesters!")
            return;
        }
        updateStudent!(props.id, {
            ...props,
            semester: newVal
        });
    };

    const decreaseSemester = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const newVal = props.semester - 1;
        if (newVal < 0) {
            alert("Can't do less than 0 semesters!")
            return;
        }
        updateStudent!(props.id, {
            ...props,
            semester: newVal
        });
    };

    const deleteStudent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        removeStudent!(props.id);
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
            <button className={"student__button student__button--delete"} onClick={deleteStudent}><Trash size={26}/>
            </button>
        </article>
    );
}