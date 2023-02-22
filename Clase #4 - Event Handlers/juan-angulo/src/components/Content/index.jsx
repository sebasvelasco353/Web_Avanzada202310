import React, { useContext, useState } from 'react';
import { StudentsContext } from '../../App';
import './Content.css';

function Content({ modifySemester, removeStudent }) {
    const students = useContext(StudentsContext);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const openEditView = (idx) => {
        setSelectedStudent(idx);
    }

    return (
        <div className="Container">
            <h1>Students</h1>
            <table style={{ width: '100%' }}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Career</th>
                    <th>Semester</th>
                </tr>
                {students.map((student, idx) => (
                    <tr key={idx} onClick={openEditView}>
                        <td> {student.name} </td>
                        <td> {student.age} </td>
                        <td> {student.career} </td>
                        <td>
                            <button onClick={() => modifySemester(idx, "decrease")}> - </button>
                            {student.semester}
                            <button onClick={() => modifySemester(idx, "increase")}> + </button>
                        </td>
                        <button onClick={() => removeStudent(idx)}>Remove</button>
                    </tr>

                ))}
            </table>
            {selectedStudent != null && <EditStudent idx={selectedStudent} />}
        </div>
    )
}

export default Content