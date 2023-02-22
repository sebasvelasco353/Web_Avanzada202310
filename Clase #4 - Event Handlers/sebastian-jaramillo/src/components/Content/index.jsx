import React, { useContext } from 'react';
import './Content.css'
import { StudentsContext } from '../../App';

function Content() {
    const students = useContext(StudentsContext);

    return (
        <div className="content">
            <table className='students-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                {students.map((student,idx) => (
                    <tr key={idx}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.major}</td>
                        <td>{student.semester}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Content