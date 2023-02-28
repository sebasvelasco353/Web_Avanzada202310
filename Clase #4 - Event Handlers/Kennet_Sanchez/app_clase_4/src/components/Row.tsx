import { render } from '@testing-library/react';
import React from 'react';
import { isConstructorDeclaration } from 'typescript';

const Row = (
    props : {
                name: string,
                carrer: string,
                age: number,
                sem : number;
            }
) => {

    const [name, setName] = React.useState(props.name);
    const [carrer, setCarrer] = React.useState(props.carrer);
    const [age, setAge] = React.useState(props.age);
    const [semester, setSemester] = React.useState(props.sem);
    const rowSemesterId = "inputRowSemester";

    function getElementUsingId(id: string) {
        return document.getElementById(id);
    }



    function incrementSemester(event: React.MouseEvent<HTMLButtonElement>) {
        setSemester(semester+1)
    }

    function decrementSemester(event: React.MouseEvent<HTMLButtonElement>) {
        setSemester(semester-1)

    }

    function removeStudent(event: React.MouseEvent<HTMLButtonElement>) {

    }



    function updateStudent(){

        render(
            <div>
                <input type="text" name="newName" id="newName" defaultValue={name}/>
                <input type="text" name="newCarrer" id="newCarrer" defaultValue={carrer}/>
                <input type="number" name="newAge" id="newAge" />
                <input type="number" name="newSemester" id="newSemester" />
            </div>
        )

        console.log(getElementUsingId("newName"))
        const newName = prompt("New name: ", name);
        const newCarrer = prompt("New carrer: ", carrer);
        const newAge = prompt("New age: ", (age+""));
        const newSemester = prompt("New semester: ", (semester+""));
        setName(newName!);
        setCarrer(newCarrer!);
        setAge(parseInt(newAge!));
        setSemester(parseInt(newSemester!));
    }

    return (
        <div className="rowDiv" onClick={updateStudent}>
            
            <input className="rowInput" type="text" name="name" id="inputRowName" placeholder="Jhon" value={name}/>
            
            <input className="rowInput" type="text" name="career" id="inputRowCareer" placeholder="Software engineering" value={carrer}/>

            <input className="rowInput" type="number" name="age" id="inputRowAge" placeholder="18" value={age}/>

            <button className="iconButton" onClick={decrementSemester}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                </svg>
            </button>

            <input className="rowInput" type="number" name="semester" id="inputRowSemester" value={semester}/>

            <button className="iconButton" onClick={incrementSemester}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
            </button>

           <button className="rowInput" onClick={removeStudent}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
           </button>



        </div>
    );
}

export default Row;