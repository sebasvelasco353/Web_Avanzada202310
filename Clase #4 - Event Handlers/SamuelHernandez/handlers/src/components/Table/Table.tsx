import StudentContext from "../../context/Student/StudentContext";
import {useContext} from "react";
import {Student} from "../Student/Student";
import "./Table.css";

interface IProps {
    modalState: { shown: any, setShown: any, setMode: any }
}

export const Table = (props: IProps) => {

    const {students} = useContext(StudentContext);

    return (

        <section className={"table"}>
            <section className={"table__headers"}>
                <h3>Code</h3>
                <h3>Name</h3>
                <h3>Age</h3>
                <h3>Career</h3>
                <h3>Semester</h3>
                <h3>-</h3>
            </section>
            <section className={"table__body"}>
                {students.map((student) => {
                    const {id, name, age, career, semester} = student;
                    return <Student key={id} id={id} name={name} age={age} career={career} semester={semester} modalState={props.modalState}/>
                })}
            </section>
        </section>
    );
}