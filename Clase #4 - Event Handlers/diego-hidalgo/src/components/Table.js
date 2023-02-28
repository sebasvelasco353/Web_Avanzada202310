import { useContext } from "react";
import { StudentContext } from "../App";

function Table({onEdit, onChangeSemester, onRemove}) {
  const students = useContext(StudentContext)
  return (
    <div>
      <table class="table table-bordered table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Carrera</th>
            <th scope="col">Semestre</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
              <tr key={student.id} onClick={() => onEdit(student.id)}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.carreer}</td>
                <td class="d-flex justify-content-center">
                  <button type="button" onClick={(e) => onChangeSemester(e, student.id, -1)}> - </button>
                  {student.semester}
                  <button type="button" onClick={(e) => onChangeSemester(e, student.id, 1)}> + </button>
                </td>
                <td><button type="button" onClick={(e) => onRemove(e, student.id)}> Eliminar </button></td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;