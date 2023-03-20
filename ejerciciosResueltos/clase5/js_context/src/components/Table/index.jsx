import { useState } from 'react';
import TableItem from '../TableItem';
import Modal from '../Modal';
import { useStudents } from '../../context/studentsReducer';

export default function Table() {
  const { state: { students } } = useStudents(); // Utilizando destructuring obtengo la variable students del objeto state.
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const renderStudents = () => {
    // Using a map function we will create a row for each element on the students array
    return students.map((row) => <TableItem key={row.id} student={row} />);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const renderAddModal = () => {
    if (isModalOpen) {
      return <Modal handleCloseModal={() => handleCloseModal()} />;
    }
    return;
  }

  return (
    <>
      <button onClick={() => handleOpenModal()}>Nuevo estudiante</button>
      {renderAddModal()}
      <table style={{
          borderCollapse: 'collapse',
          width: '90vw',
          margin: '0 5vw'
        }}>
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
