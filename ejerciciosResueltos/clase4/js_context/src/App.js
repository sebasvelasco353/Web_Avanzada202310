import './App.css';
import React, { useState } from 'react';
import Table from './components/Table'
import Modal from './components/Modal';
import { StudentsProvider } from './context/studentsReducer';


function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const renderAddModal = () => {
    if (isModalOpen) {
      return <Modal handleCloseModal={() => setIsModalOpen(false)} />;
    }
    return;
  }

  return (
      <div className="App">
        <header className="App-header">
          Ejercicio de la clase 4 resuelto usando JS y React.context
        </header>

        <button onClick={() => setIsModalOpen(true)}>Nuevo estudiante</button>
        <StudentsProvider>
          {renderAddModal()}
          <Table />
        </StudentsProvider>
      </div>
  );
}

export default App;
