import React, { useContext } from 'react';
import { StudentsContext } from '../../App';
import './Content.css';

function EditStudent({ idx }) {
    const students = useContext(StudentsContext);
    return (
        <div className="Container">
            <h2>Edit Student</h2>
            <p> Name: </p>
            <input type="text" value={students[idx].name} />
            <p> Age: </p>
            <input type="text" value={students[idx].age} />
            <p> Career: </p>
            <input type="text" value={students[idx].career} />
            <p> Semester: </p>
            <input type="text" value={students[idx].semester} />
        </div>
    )
}

export default EditStudent