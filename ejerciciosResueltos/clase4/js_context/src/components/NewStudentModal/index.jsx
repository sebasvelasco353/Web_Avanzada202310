import React, { useState } from 'react';
import './NewStudentModal.css';

function NewStudentModal({ handleCloseModal }) {
    const [studentInfo, setStudentInfo] = useState({
        name: '',
        lastName: '',
        semester: '',
        major: ''
    });

    const handleInfoChange = (event) => {
        console.log(event);
        setStudentInfo({ ...studentInfo, [event.target.name]: event.target.value });
    };

    return (
        <div className='modal'>
            <div className="modal--header">
                <h3>Add a new Student</h3>
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
                    <button onClick={() => console.log(studentInfo)}>Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default NewStudentModal