import './App.css';
import React, { useState } from 'react';
import Table from './components/Table'
import Modal from './components/Modal';
import { StudentsProvider } from './context/studentsReducer';

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

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
    // TODO: hacer un reducer que defina el estado del modal, cambiarlo para abrir y cerrarlo, el modal debe terminarse (agregar o modificar estudante).
      <div className="App">
        <header className="App-header">
          Ejercicio de la clase 4 resuelto usando JS y React.context
        </header>

        <button onClick={() => handleOpenModal()}>Nuevo estudiante</button>

          <StudentsProvider>
            {renderAddModal()}
            <Table />
          </StudentsProvider>
      </div>
  );
}

export default App;
