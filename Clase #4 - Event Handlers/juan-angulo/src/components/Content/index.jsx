import React, { useContext, useState } from 'react';
import { StudentsContext } from '../../App';
import './Content.css';
import EditStudent from '../EditStudent';

function Content({ modifySemester, removeStudent, saveChanges }) {
    const students = useContext(StudentsContext);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const openEditView = (idx) => {
        console.log("selectedStudent: " + idx)
        setSelectedStudent(idx);
    }

    const closeEditView = () => {
        console.log("closeEditView");
        setSelectedStudent(null);
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
                    <tr key={idx} onClick={() => openEditView(idx)}>
                        <td> {student.name} </td>
                        <td> {student.age} </td>
                        <td> {student.career} </td>
                        <td>
                            <button onClick={(e) => {e.stopPropagation(); modifySemester(idx, "decrease")}}> - </button>
                            {student.semester}
                            <button onClick={(e) => {e.stopPropagation(); modifySemester(idx, "increase")}}> + </button>
                        </td>
                        <button onClick={(e) => {e.stopPropagation(); removeStudent(idx)}}>Remove</button>
                    </tr>

                ))}
            </table>
            {selectedStudent != null && <EditStudent idx={selectedStudent} saveChanges={saveChanges} closeEditView={closeEditView} />}
        </div>
    )
}

export default Content