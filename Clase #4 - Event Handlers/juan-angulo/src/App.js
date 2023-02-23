import './App.css';
import React, { useState } from 'react';
import Content from './components/Content';

export const StudentsContext = React.createContext();

function App() {

  const [students, setStudents] = React.useState([
    {
      name: 'Juan',
      age: 20,
      career: 'Sistemas',
      semester: 8
    },
    {
      name: 'Pedro',
      age: 18,
      career: 'Sistemas',
      semester: 6
    }
  ]);

  const modifySemester = (idx, action) => {
    const newArr = students.map(student => {
      if (students.indexOf(student) === idx) {
        if (action === "increase") {
          student.semester += 1;
        } else if (action === "decrease") {
          student.semester -= 1;
        }
      }
      return student;
    });
    setStudents(newArr)
  }

  const saveChanges = (idx, newStudent) => {
    const newArr = students.map(student => {
      if (students.indexOf(student) === idx) {
        student = newStudent;
      }
      return student;
    });
    setStudents(newArr)
  }

  const removeStudent = (idx) => {
    setStudents(students.splice(idx + 1, 1));
  }

  return (
    <div className="App">
      <StudentsContext.Provider value={students}>
        <Content modifySemester={modifySemester} removeStudent={removeStudent} saveChanges={saveChanges} />
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
