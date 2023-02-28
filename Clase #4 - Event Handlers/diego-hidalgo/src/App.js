import './App.css';
import './components/Table.js'
import React, { useState } from 'react';
import Table from './components/Table'
import { v4 as uuidv4 } from 'uuid';

export const StudentContext = React.createContext();

function App() {
  const [ students, setStudents ] = useState([
    {
      id: uuidv4(),
      name: "Diego",
      age: 19,
      carreer: "Ing. Sistemas",
      semester: 7
    },
    {
      id: uuidv4(),
      name: "Juan",
      age: 19,
      carreer: "Ing. Sistemas",
      semester: 7
    }
  ]);

  const onAdd = () => {
    let name = prompt("Nombre: ");
    let age = parseInt(prompt("Edad: "));
    let carreer = prompt("Carrera: ");
    let semester = parseInt(prompt("Semestre: "));
    if(name === "" || age === "" || carreer === "" || semester === "") {
      alert("Deben llenarse todos los campos");
      return;
    }
    if(Number.isNaN(age) || Number.isNaN(semester)) {
      alert("La edad y el semestre deben ser un número");
      return;
    }
    setStudents(
      [
        ...students,
        {
          id: uuidv4(),
          name: name,
          age: age,
          carreer: carreer,
          semester: semester
        }
      ]
    );
  }

  const onEdit = (id) => {
    let student = students.find(s => s.id === id);
    let name = prompt("Nombre: ", student.name);
    let age = parseInt(prompt("Edad: ", student.age));
    let carreer = prompt("Carrera: ", student.carreer);
    let semester = parseInt(prompt("Semestre: ", student.semester));
    if(name === "" || age === "" || carreer === "" || semester === "") {
      alert("Deben llenarse todos los campos");
      return;
    }
    if(Number.isNaN(age) || Number.isNaN(semester)) {
      alert("La edad y el semestre deben ser un número");
      return;
    }
    setStudents(
      students.map(s => {
        if(s.id === id) {
          return {
            ...s,
            name: name,
            age: age,
            carreer: carreer,
            semester: semester
          };
        } else {
          return s;
        }
      })
    );
  }

  const onChangeSemester = (e, id, val) => {
    e.stopPropagation();
    setStudents(
      students.map(s => {
        if(s.id === id) {
          return {
            ...s,
            semester: s.semester + val
          };
        } else {
          return s;
        }
      })
    );
  }

  const onRemove = (e, id) => {
    e.stopPropagation();
    setStudents(
      students.filter(s => s.id !== id)
    );
  }

  return (
    <div className="App">
      <button onClick={onAdd}>Agregar</button>
      <StudentContext.Provider value={students}>
        <Table onEdit={onEdit} onChangeSemester={onChangeSemester} onRemove={onRemove}></Table>
      </StudentContext.Provider>
    </div>
  );
}

export default App;
