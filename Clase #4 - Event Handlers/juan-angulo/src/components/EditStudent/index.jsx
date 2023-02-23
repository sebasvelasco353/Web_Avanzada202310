import React, { useContext } from 'react';
import { StudentsContext } from '../../App';
import './EditStudent.css';

function EditStudent({ idx }) {
    const students = useContext(StudentsContext);
    return (
        <div className="Container" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <h2>Edit Student</h2>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
                <div className="field">
                    <p> Name: </p>
                    <input type="text" value={students.at(idx).name} />
                </div>
                <div className="field">
                    <p> Age: </p>
                    <input type="text" value={students.at(idx).age} />
                </div>
                <div className="field">
                    <p> Career: </p>
                    <input type="text" value={students.at(idx).career} />
                </div>
                <div className="field">
                    <p> Semester: </p>
                    <input type="text" value={students.at(idx).semester} />
                </div>
                <button>Save</button>
            </div>
        </div>
    )
}

export default EditStudent