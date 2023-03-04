import './App.css';
import React, { useState } from 'react';
import Table from './components/Table';

export const StudentsContext = React.createContext();

function App() {

  const [students, setStudents] = useState([
    {
      name: 'Hugo',
      age: 17,
      career: 'DMI',
      semester: 1
    },
    {
      name: 'Paco',
      age: 19,
      career: 'SIS',
      semester: 5
    },
    {
      name: 'Luis',
      age: 21,
      career: 'TEL',
      semester: 9
    }
  ]);

  return (
    <div className="App">
      <StudentsContext.Provider value={students}>
        <Table handleStudents={setStudents} />
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
