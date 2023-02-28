import React, {useState } from "react"
import { useContext } from "react";
import { detailsContext } from "../App";

const Details = ({ handleEdit }) => {

    const actualItem = useContext(detailsContext)

    // Lo estaba utilizando para probar pero apunta el mismo error
    const [param, setParam] = useState("")
   
    // Organizo diferetnes set para cambiar el valor en cada uno de ellos
    const [nameParam, setNameParam] = useState("");
    const [ageParam, setAgeParam] = useState("");
    const [semesterParam, setSemesterParam] = useState("");
    const [majorParam, setMajorParam] = useState("");

    //En la funcion setValues los asigno a un arreglo para mas adelante poder llamarlos en handle change
    const handleSetValues = async (event, pos) => { 
        const setValues =
            [setNameParam(event.target.value),
                setAgeParam(event.target.value),
                setSemesterParam(event.target.value),
                setMajorParam(event.target.value)
            ]
        return setValues[pos]
    }


    //Cambiar a manera correcta de hacer con await
    const handleChange = async (event, paramName, setValuePosition, paramValue) => {
        await handleSetValues(event, setValuePosition)
        //setParam(event.target.value);
        await handleEdit(paramValue, paramName, actualItem.id);
        console.log("Valor del parametro", paramValue)
        console.log("Nombre del parametro", paramName)
        console.log("Evento: ", event)
    }

    return (
        <div className="details" id="details">
            <section>
                <h1> Name: <span> {actualItem.name} </span>  </h1>
               
              <input placeholder=" New Name" value={nameParam} onChange={(e) => handleChange(e, "name", 0, nameParam)}></input>
                { /*   <button onClick={() => handleEdit(null, "name", actualItem.id)}> Edit </button>*/}
            </section>
            <section>
                <h3> Age: <span> {actualItem.age} </span></h3>
                <input placeholder=" New Age"  value={ageParam} onChange={(e) => handleChange(e, "age", 1, ageParam)}></input>
            </section>
            <section>
                <h3> Semester:  <span>{actualItem.semester} </span> </h3>
                <input placeholder="New Semester"  value={semesterParam} onChange={(e) => handleChange(e, "semester", 2, semesterParam)}></input>
            </section>
            <section>
                <h3> Major: <span>  {actualItem.major}  </span> </h3>
                <input placeholder="New Major"  value={semesterParam} onChange={(e) => handleChange(e, "major", 3, majorParam)}></input>
            </section>
        </div>     
    )
};
export default Details;
