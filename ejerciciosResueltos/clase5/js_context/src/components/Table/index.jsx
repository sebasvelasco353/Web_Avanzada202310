// import * as React from 'react';
import TableItem from '../TableItem';
import { useStudents } from '../../context/studentsReducer';

export default function Table() {
  const { state: { students } } = useStudents(); // Utilizando destructuring obtengo la variable students del objeto state.

  const renderStudents = () => {
    // Using a map function we will create a row for each element on the students array
    return students.map((row) => <TableItem key={row.id} student={row} />);
  }

  return (
    <>
      <table style={{ borderCollapse: 'collapse'}}>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Semestre</th>
                <th>Carrera</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {renderStudents()}
        </tbody>
      </table>
    </>
  )
}
