import React, { useContext, useState } from 'react';
import { StudentsContext } from '../../App';
import './Table.css';
import EditStudent from '../EditStudent';
import AddStudent from '../AddStudent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus, faGraduationCap, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function Table({ handleStudents }) {
    const students = useContext(StudentsContext);

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [addStudentView, setAddStudentView] = useState(false);

    const modifySemester = (idx, action) => {
        // const newArr = students.map(student => {
        //     if (students.indexOf(student) === idx) {
        //         if (action === "increase") {
        //             student.semester += 1;
        //         } else if (action === "decrease") {
        //             if (student.semester - 1 > 0) {
        //                 student.semester -= 1;
        //             }
        //         }
        //     }
        //     return student;
        // });

        const newArr = [...students];
        newArr[idx] = { ...newArr[idx], semester: (newArr[idx].semester - 1 > 0) ? newArr[idx].semester + action : newArr[idx].semester };

        handleStudents(newArr);
    }

    const saveChanges = (idx, newStudent) => {
        const newArr = students.map(student => {
            if (students.indexOf(student) === idx) {
                student = newStudent;
            }
            return student;
        });
        handleStudents(newArr);
    }

    const removeStudent = (idx) => {
        const newArr = [...students];
        newArr.splice(idx, 1);
        handleStudents(newArr);
    }

    const addStudent = (student) => {
        const newArr = [...students, student];
        handleStudents(newArr);
    }

    const manageAddView = (action) => {
        setAddStudentView(action);
    }

    const manageEditView = (idx) => {
        setSelectedStudent(idx);
    }

    const checkIfSelectedWhenRemove = (idx) => {
        if (idx === selectedStudent) {
            manageEditView(null);
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
                        <tr className="dlinfo hover02" key={idx} onClick={() => manageEditView(idx)}>
                            <td className="dlinfo"> {student.name} </td>
                            <td className="dlinfo"> {student.age} </td>
                            <td className="dlinfo"> {student.career} </td>
                            <td className="dlinfo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon={faCircleMinus} onClick={(e) => { e.stopPropagation(); modifySemester(idx, -1) }} />
                                <p style={{ width: 30 }}> {student.semester} </p>
                                <FontAwesomeIcon icon={faCirclePlus} onClick={(e) => { e.stopPropagation(); modifySemester(idx, +1) }} />
                            </td>
                            <td className="dlinfo">
                                <button onClick={(e) => { e.stopPropagation(); checkIfSelectedWhenRemove(idx); removeStudent(idx) }}>
                                    Remove <FontAwesomeIcon icon={faUserMinus} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{ marginTop: 20 }} onClick={() => manageAddView(true)}>Add <FontAwesomeIcon icon={faUserPlus} /></button>
            {addStudentView && <AddStudent addStudent={addStudent} manageAddView={manageAddView} />}
            {selectedStudent != null && <EditStudent idx={selectedStudent} saveChanges={saveChanges} manageEditView={manageEditView} />}
        </div>
    )
}

export default Table