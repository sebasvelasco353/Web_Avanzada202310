import React from "react";
import Row from "./Row";
import { StudentsContext } from "../App";

const Table = () => {

    let firstTime = true;

    const {students, setStudents} = React.useContext(StudentsContext);
    const [tableStudents, setTableStudents] = React.useState(students);

    const studentsArray : any [] = [
        {
          id: 0,
          name : "Pablo",
          carrer: "Mercadeo",
          age: 45,
          semester : 4
        },
        {
          id: 1,
          name : "Fernando",
          carrer: "Medicina",
          age: 20,
          semester : 6
        },
        {
          id: 2,
          name : "Gabriel",
          carrer: "Sistemas",
          age: 21,
          semester : 8
        },
      ]

    if(firstTime){
        firstTime = !firstTime;
        setStudents(studentsArray)
    }

    return (
        <div>
            {tableStudents.map((student) => {
                return(
                    <Row id = {student.id} name = {student.name} age = {student.age} carrer = {student.carrer} semester= {student.semester}></Row>
                )
            })}
        </div>
    )
}

export default Table;