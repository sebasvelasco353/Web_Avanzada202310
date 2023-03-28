import './Modal.css';
import { useState } from 'react';
import { useStudents } from '../../context/studentsReducer';

function Modal({ handleCloseModal }) {
    const { dispatch } = useStudents();
    const [studentInfo, setStudentInfo] = useState({
        name: '',
        lastName: '',
        semester: '',
        major: '',
    });

    const handleInfoChange = (event) => {
        setStudentInfo({ ...studentInfo, [event.target.name]: event.target.value });
    };

    const handleSave = (event) => {
        event.preventDefault();
        dispatch({ type: 'newEntry', payload: studentInfo});
        handleCloseModal();
    }

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
                    <button onClick={(e) => handleSave(e)}>Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default Modal