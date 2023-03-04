import React, { useState } from 'react';
import './AddStudent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function AddStudent({ addStudent, manageAddView }) {
    const [newStudent, setNewStudent] = useState({});

    const handleChange = (event) => {
        var input = event.target;
        setNewStudent({ ...newStudent, [input.name]: (input.name === "semester") ? parseInt(input.value) : input.value });
    }

    return (
        <div className="container" style={{ paddingTop: 30 }}>
            <div className="modal-card">
                <div style={{ display: 'flex', justifyContent: 'right' }}>
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" onClick={() => manageAddView(false)} />
                </div>
                <h2 style={{ marginTop: -15 }}>Add Student</h2>
                <div className="field">
                    <p> Name: </p>
                    <input type="text" name="name" value={newStudent.name} onChange={handleChange} />
                </div>
                <div className="field">
                    <p> Age: </p>
                    <input type="number" name="age" value={newStudent.age} onChange={handleChange} />
                </div>
                <div className="field">
                    <p> Career: </p>
                    <input type="text" name="career" value={newStudent.career} onChange={handleChange} />
                </div>
                <div className="field">
                    <p> Semester:&nbsp; </p>
                    <input type="number" name="semester" value={newStudent.semester} onChange={handleChange} />
                </div>
                <div style={{ marginTop: 10, marginBottom: 3 }}>
                    <button onClick={() => { addStudent(newStudent); manageAddView(false) }} > Add </button>
                </div>
            </div>
        </div>
    )
}

export default AddStudent