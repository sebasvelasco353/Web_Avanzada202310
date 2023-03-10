import { useState } from 'react';
import { useStudents } from '../../context/studentsReducer';

const styles = {
    EditBox: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid gray'
    },
    content: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        margin: '5px 8px'
    }
}

function EditBox({ handleCloseEditBox }) {
    const { state: { selectedStudent }, dispatch } = useStudents();
    const [studentInfo, setStudentInfo] = useState({
        name: selectedStudent?.name,
        lastName: selectedStudent?.lastName,
        semester: selectedStudent?.semester,
        major: selectedStudent?.major,
        id: selectedStudent?.id
    });
    const handleInfoChange = (event) => {
        setStudentInfo({ ...studentInfo, [event.target.name]: event.target.value });
    };
    const handleSave = (event) => {
        event.preventDefault();
        dispatch({ type: 'modify', payload: studentInfo});
        handleCloseEditBox();
    }

  return (
    <div className='editBox' style={styles.EditBox}>
        <h3>Editar un Estudiante</h3>
        <div className="editBox--content" style={styles.content}>
                <form>
                    <input
                        style={styles.input}
                        type="text"
                        name='name'
                        placeholder='Nombre'
                        value={studentInfo.name}
                        onChange={(e) => handleInfoChange(e)}
                    />
                    <input
                        style={styles.input}
                        type="text"
                        name='lastName'
                        placeholder='Apellido'
                        value={studentInfo.lastName}
                        onChange={(e) => handleInfoChange(e)}
                    />
                    <input
                        style={styles.input}
                        type="number"
                        name='semester'
                        placeholder='Semestre'
                        value={studentInfo.semester}
                        onChange={(e) => handleInfoChange(e)}
                    />
                    <input
                        style={styles.input}
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

export default EditBox