import React, { useState } from 'react';
import { useStudents } from '../../context/studentsReducer';
import './Modal.css';

function Modal({ handleCloseModal }) {

    const { state: { selectedStudent, students } , dispatch } = useStudents();
    const [studentInfo, setStudentInfo] = useState({
        name: selectedStudent ? selectedStudent.name : '',
        lastName: selectedStudent ? selectedStudent.lastName : '',
        semester: selectedStudent ? selectedStudent.semester : '',
        major: selectedStudent ? selectedStudent.major : '',
    });

    const handleInfoChange = (event) => {
        setStudentInfo({ ...studentInfo, [event.target.name]: event.target.value });
    };

    const handleSave = (event) => {
        event.preventDefault();
        let payload;
        if (selectedStudent !== undefined && selectedStudent !== null) {
            payload = {
                ...studentInfo,
                id: selectedStudent.id
            }
            dispatch({type: 'newEntry', payload});
        } else {
            payload = {
                ...studentInfo,
                id: students.length + 1
            }
            dispatch({type: 'modify', payload});
        }
        dispatch({ type: 'selectStudent', payload: null});
    }

    return (
        <div className='modal'>
            <div className="modal--header">
                <h3>{selectedStudent ? 'chagnge student info' : 'Add a new Student'}</h3>
                <button onClick={() => handleCloseModal()}>Close</button>
            </div>
            <div className="modal--content">
                <form>
                    <input
                        type="text"
                        name='name'
                        placeholder='Nombre'
                        value={studentInfo.name}
                        onChange={(e) => handleInfoChange(e)}
                    />
                    <input
                        type="text"
                        name='lastName'
                        placeholder='Apellido'
                        value={studentInfo.lastName}
                        onChange={(e) => handleInfoChange(e)}
                    />
                    <input
                        type="number"
                        name='semester'
                        placeholder='Semestre'
                        value={studentInfo.semester}
                        onChange={(e) => handleInfoChange(e)}
                    />
                    <input
                        type="text"
                        name='major'
                        placeholder='Carrera'
                        value={studentInfo.major}
                        onChange={(e) => handleInfoChange(e)}
                    />
                    <button onClick={(e) => handleSave(e)}>Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default Modal