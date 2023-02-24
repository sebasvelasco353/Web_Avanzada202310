import './App.css';
import React, { useState } from 'react';
import Content from './components/Content';

export const StudentsContext = React.createContext();

function App() {

  const [students, setStudents] = useState([
    {
      name: 'Juan',
      age: 20,
      career: 'Sistemas',
      semester: 8
    },
    {
      name: 'Hugo',
      age: 18,
      career: 'DMI',
      semester: 7
    },
    {
      name: 'Paco',
      age: 18,
      career: 'Sistemas',
      semester: 3
    },
    {
      name: 'Luis',
      age: 22,
      career: 'Telemática',
      semester: 10
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
    setStudents(newArr);
  }

  const saveChanges = (idx, newStudent) => {
    const newArr = students.map(student => {
      if (students.indexOf(student) === idx) {
        student = newStudent;
      }
      return student;
    });
    setStudents(newArr);
  }

  const removeStudent = (idx) => {
    const newArr = [...students];
    newArr.splice(idx, 1);
    setStudents(newArr);
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
