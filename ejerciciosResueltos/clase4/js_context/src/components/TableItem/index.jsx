import * as React from 'react'
import { useStudents } from '../../context/studentsReducer';

export default function TableItem({ student }) {
  /*
  ** Con el metodo dispatch que creamos anteriormente vamos a modificar el estado de nuestro contexto entregandole **
  ** el tipo de accion que queremos despachar (type) y datos que necesitamos para realizar la accion (payload)    **
  */
  const { dispatch } = useStudents();
  return (
    <tr>
        <td>{ student.name }</td>
        <td>{ student.lastName }</td>
        <td>{ student.semester }</td>
        <td>{ student.major }</td>
        <td>
          <button onClick={() => dispatch({type: 'increment', payload: student.id})}>
            +1 semestre
          </button>
          <button onClick={() => dispatch({type: 'decrement', payload: student.id})}>
            -1 semestre
          </button>
          <button onClick={() => dispatch({type: 'delete', payload: student.id})}>
            Eliminar
          </button>
        </td>
    </tr>
  )
}
