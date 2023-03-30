import './TableItem.css';
import EditBox from '../EditBox';
import * as React from 'react'
import { useStudents } from '../../context/studentsReducer';

export default function TableItem({ student }) {
  /*
  ** Con el metodo dispatch que creamos anteriormente vamos a modificar el estado de nuestro contexto entregandole **
  ** el tipo de accion que queremos despachar (type) y datos que necesitamos para realizar la accion (payload)    **
  */
  const { state: { selectedStudent }, dispatch } = useStudents();

  const handleCloseEditBox = () => {
    dispatch({ type: 'selectStudent', payload: null });
  }

  const handleShowEditBox = () => {
    if (selectedStudent?.id === student.id) {
      return <EditBox handleCloseEditBox={handleCloseEditBox}/>
    }
    return;
  }

  return (
    <>
      <tr onClick={() => dispatch({ type: 'selectStudent', payload: student })}>
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
      { handleShowEditBox() }
    </>
  )
}
