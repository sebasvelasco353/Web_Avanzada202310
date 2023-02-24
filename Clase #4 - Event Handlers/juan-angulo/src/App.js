import './App.css';
import React, { useState } from 'react';
import Content from './components/Content';

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

  const modifySemester = (idx, action) => {
    const newArr = students.map(student => {
      if (students.indexOf(student) === idx) {
        if (action === "increase") {
          student.semester += 1;
        } else if (action === "decrease") {
          if (student.semester - 1 > 0) {
            student.semester -= 1;
          }
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

  const addStudent = (student) => {
    const newArr = [...students, student];
    setStudents(newArr);
  }

  return (
    <div className="App">
      <StudentsContext.Provider value={students}>
        <Content modifySemester={modifySemester} removeStudent={removeStudent} saveChanges={saveChanges} addStudent={addStudent} />
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
