import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import React, {useState} from 'react';

export const StudentsContext = React.createContext();

function App() {
  const [students, setStudents] = useState([
    {
      name: 'Sebastian Jaramillo',
      age: 21,
      major: 'Ingenieria de sistemas',
      semester: 9
    },
    {
      name: 'Juan Carlos Gonzalez',
      age: 19,
      major: 'Ciencias politicas',
      semester: 6
    }
  ]);


  return (
    <div className="App">
      <StudentsContext.Provider value={students}>
        <Header />
        <Content />
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
