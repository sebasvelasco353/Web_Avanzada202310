import React, { useContext, useState } from 'react';
import { StudentsContext } from '../../App';
import './Content.css';
import EditStudent from '../EditStudent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

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

    const checkIfSelectedWhenRemove = (idx) => {
        if (idx === selectedStudent) {
            closeEditView();
        }
    }

    return (
        <div className="container">
            <h1>Students <FontAwesomeIcon icon={faGraduationCap} /></h1>
            <table className="dltrc" style={{ width: '90%' }}>
                <tbody>
                    <tr className="dlheader">
                        <td className="dlheader">Name</td>
                        <td className="dlheader">Age</td>
                        <td className="dlheader">Career</td>
                        <td className="dlheader">Semester</td>
                        <td className="dlheader"></td>
                    </tr>
                    {students.map((student, idx) => (
                        <tr className="dlinfo hover02" key={idx} onClick={() => openEditView(idx)}>
                            <td className="dlinfo"> {student.name} </td>
                            <td className="dlinfo"> {student.age} </td>
                            <td className="dlinfo"> {student.career} </td>
                            <td className="dlinfo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon={faCircleMinus} onClick={(e) => { e.stopPropagation(); modifySemester(idx, "decrease") }} />
                                <p style={{ width: 30 }}> {student.semester} </p>
                                <FontAwesomeIcon icon={faCirclePlus} onClick={(e) => { e.stopPropagation(); modifySemester(idx, "increase") }} />
                            </td>
                            <td className="dlinfo"><button onClick={(e) => { e.stopPropagation(); checkIfSelectedWhenRemove(idx); removeStudent(idx) }}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedStudent != null && <EditStudent idx={selectedStudent} saveChanges={saveChanges} closeEditView={closeEditView} />}
        </div>
    )
}

export default Content