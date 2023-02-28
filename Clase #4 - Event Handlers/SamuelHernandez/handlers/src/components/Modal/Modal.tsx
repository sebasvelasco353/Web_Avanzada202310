import React, {useContext} from "react";
import StudentContext from "../../context/Student/StudentContext";
import "./Modal.css";
import {StudentType} from "../Student/StudentType";

interface IProps {
    mode: "add" | "edit",
    student?: StudentType,
    modalState: { shown: any, setShown: any }
}

export const Modal = (props: IProps) => {

    const {addStudent, updateStudent} = useContext(StudentContext);
    const {shown, setShown} = props.modalState;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const newStudent = {
            id : (form.id as unknown as HTMLInputElement).value,
            name : (form.name as unknown as HTMLInputElement).value,
            age : parseInt((form.age as unknown as HTMLInputElement).value),
            career : (form.career as unknown as HTMLInputElement).value,
            semester : parseInt((form.semester as unknown as HTMLInputElement).value),
        }
        if (props.mode === "add") addStudent(newStudent);
        else updateStudent(form.id, newStudent);
        setShown(false);
    };

    const dismiss = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setShown(false);
    };

    return (
        <section className={`modal__background ${shown? "shown" : "hidden"}`} onClick={e => dismiss(e)}>
            <form className={"modal"} onSubmit={e => handleSubmit(e)} onClick={e => e.stopPropagation()}>
                <h1>{props.mode === "add" ? "New Student" : "Edit Student"}</h1>
                <section className={"modal__data"}>
                    <h2>ID</h2>
                    <input type={"text"} name={"id"}/>
                </section>
                <section className={"modal__data"}>
                    <h2>Name</h2>
                    <input type={"text"} name={"name"}/>
                </section>
                <section className={"modal__data"}>
                    <h2>Age</h2>
                    <input type={"number"} name={"age"}/>
                </section>
                <section className={"modal__data"}>
                    <h2>Semester</h2>
                    <input type={"Number"} name={"semester"}/>
                </section>
                <section className={"modal__data"}>
                    <h2>Career</h2>
                    <input type={"text"} name={"career"}/>
                </section>
                <input className={"modal__submit"} type={"submit"} value={props.mode === "add" ? "Add" : "Save"}/>
            </form>
        </section>
    );
}