import React, { useContext, useState } from 'react';
import { StudentsContext } from '../../App';
import './EditStudent.css';

function EditStudent({ idx, saveChanges, closeEditView }) {
    const students = useContext(StudentsContext);

    const [student, setStudent] = useState(students.at(idx));

    const handleChange = (event) => {
        var input = event.target;
        setStudent({...student, [input.name]: input.value})
    }

    return (
        <div className="Container" style={{ alignItems: 'center', justifyContent: 'center' }}>
            
            <div style={{ width: 'fit-content', margin: 'auto', border: '1px solid black', padding: 15, borderRadius: 10 }}>
                <h2 style={{ marginTop: 0 }}>Edit Student</h2>
                <div className="field">
                    <p> Name: </p>
                    <input type="text" name="name" value={student.name} onChange={handleChange} />
                </div>
                <div className="field">
                    <p> Age: </p>
                    <input type="number" name="age" value={student.age} onChange={handleChange} />
                </div>
                <div className="field">
                    <p> Career: </p>
                    <input type="text" name="career" value={student.career} onChange={handleChange} />
                </div>
                <div className="field">
                    <p> Semester:&nbsp; </p>
                    <input type="number" name="semester" value={student.semester} onChange={handleChange} />
                </div>
                <div style={{ marginTop: 10 }}>
                    <button onClick={() => {saveChanges(idx, student); closeEditView()}} > Save </button>
                </div>
            </div>
        </div>
    )
}

export default EditStudent