import React, { useContext, useState, useEffect } from 'react';
import { StudentsContext } from '../../App';
import './EditStudent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function EditStudent({ idx, saveChanges, manageEditView }) {
    const students = useContext(StudentsContext);

    const [student, setStudent] = useState(students.at(idx));

    useEffect(() => {
        setStudent(students.at(idx));
    }, [idx]);

    const handleChange = (event) => {
        var input = event.target;
        setStudent({ ...student, [input.name]: input.value })
    }

    return (
        <div className="container" style={{ paddingTop: 30 }}>
            <div className="modal-card">
                <div style={{ display: 'flex', justifyContent: 'right' }}>
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" onClick={() => manageEditView(null)} />
                </div>
                <h2 style={{ marginTop: -15 }}>Edit Student</h2>
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
                <div style={{ marginTop: 10, marginBottom: 3 }}>
                    <button onClick={() => { saveChanges(idx, student); manageEditView(null) }} > Save </button>
                </div>
            </div>
        </div>
    )
}

export default EditStudent