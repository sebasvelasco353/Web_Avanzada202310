import React from "react";
import Row from "./Row";

const Table = (props:{
    students : any []
}) => {
    return (
        <div>
            {props.students.map((student) => {
                return(
                    <Row name = {student.name} age = {student.age} carrer = {student.carrer} sem= {student.sem}></Row>
                )
            })}
        </div>
    )
}

export default Table;