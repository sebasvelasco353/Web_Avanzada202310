import './App.css';
import React, { useState } from 'react';
import Table from './components/Table'
import NewStudentModal from './components/NewStudentModal';
import { StudentsProvider } from './context/studentsReducer';


function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const renderAddNewStudentModal = () => {
    if (isModalOpen) {
      return <NewStudentModal handleCloseModal={() => setIsModalOpen(false)} />;
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
          {renderAddNewStudentModal()}
          <Table />
        </StudentsProvider>
      </div>
  );
}

export default App;
