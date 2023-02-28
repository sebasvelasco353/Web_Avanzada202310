import { useContext } from "react";
import { StudentContext } from "../App";

function Table({onEdit, onChangeSemester, onRemove}) {
  const students = useContext(StudentContext)
  return (
    <div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Semestre</th>
        </tr>
        {students.map((student) => (
            <tr key={student.id} onClick={() => onEdit(student.id)}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.carreer}</td>
              <td>
                <button type="button" onClick={(e) => onChangeSemester(e, student.id, -1)}> - </button>
                {student.semester}
                <button type="button" onClick={(e) => onChangeSemester(e, student.id, 1)}> + </button>
              </td>
              <td><button type="button" onClick={(e) => onRemove(e, student.id)}> Eliminar </button></td>
            </tr>
        ))}
      </table>
    </div>
  )
}

export default Table;