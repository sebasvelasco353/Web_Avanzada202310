import { render } from '@testing-library/react';
import React from 'react';
import { StudentsContext } from '../App';

const Row = (
    props : {
                id: number,
                name: string,
                carrer: string,
                age: number,
                semester : number;
            }
) => {

    const [name, setName] = React.useState(props.name);
    const [carrer, setCarrer] = React.useState(props.carrer);
    const [age, setAge] = React.useState(props.age);
    const [semester, setSemester] = React.useState(props.semester);

    const {students, setStudents} = React.useContext(StudentsContext);

    function getElementUsingId(id: string) {
        return document.getElementById(id);
    }



    function incrementSemester(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();
        setSemester(semester+1)
    }

    function decrementSemester(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();
        setSemester(semester-1)

    }

    function removeStudent(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();

        const newStudents = students.filter(student => {
            if(student.id != props.id){
                return student;
            }
        });

        setStudents(newStudents);

        getElementUsingId("rowStudent"+props.id)?.remove()

    }



    function updateStudentForm(){

        render(
            <div>
                <input type="text" name="newName" id={"newName"+props.id} defaultValue={name}/>
                <input type="text" name="newCarrer" id={"newCarrer"+props.id} defaultValue={carrer}/>
                <input type="number" name="newAge" id={"newAge"+props.id} defaultValue={age}/>
                <input type="number" name="newSemester" id={"newSemester"+props.id} defaultValue={semester}/>
                <button type="submit" onClick={()=>updateStudent(props.id)}>Save</button>
            </div>
        )

        
    }

    function updateStudent(id: number){
        let nameInput = getElementUsingId("newName"+id) as HTMLInputElement;
        let nameValue = nameInput.value;

        let carrerInput = getElementUsingId("newCarrer"+id) as HTMLInputElement;
        let carrerValue = carrerInput.value;


        let ageInput = getElementUsingId("newAge"+id) as HTMLInputElement;
        let ageValue = ageInput.value;

        let semesterInput = getElementUsingId("newSemester"+id) as HTMLInputElement;
        let semesterValue = semesterInput.value;

        let oldStudents = students;
        let newStudents : any [] = [];

        newStudents = oldStudents.map(student => {
            if(student.id == id){
                student.id = id;
                student.name = nameValue;
                student.carrer = carrerValue;
                student.age = parseInt(ageValue);
                student.semester = parseInt(semesterValue);

                setName(nameValue);
                setCarrer(carrerValue);
                setAge(parseInt(ageValue));
                setSemester(parseInt(semesterValue));
            }
            return student;
        });
        setStudents(newStudents);
    }

    return (
        <div id={"rowStudent"+props.id} className="rowDiv" onClick={updateStudentForm}>
            
            <input className="rowInput" type="text" name="name" id="inputRowName" placeholder="Jhon" value={name} readOnly={true}/>
            
            <input className="rowInput" type="text" name="career" id="inputRowCareer" placeholder="Software engineering" value={carrer} readOnly={true}/>

            <input className="rowInput" type="number" name="age" id="inputRowAge" placeholder="18" value={age} readOnly={true}/>

            <button className="iconButton" onClick={decrementSemester}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                </svg>
            </button>

            <input className="rowInput" type="number" name="semester" id="inputRowSemester" value={semester} readOnly={true}/>

            <button className="iconButton" onClick={incrementSemester}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
            </button>

           <button className="iconButton" onClick={removeStudent}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
           </button>



        </div>
    );
}

export default Row;