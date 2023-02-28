import React from 'react';
import logo from './logo.svg';
import './App.css';

import Row  from "./components/Row";
import Table from './components/Table';



export const StudentsContext = React.createContext({
  students: Array(), 
  setStudents:(newStudents: any [] )=>{}
});

const App = () => {


  const updateToken = (newStudents : Array<any> )=>{state.students = newStudents}

  const [state, setState] = React.useState(()=> ({
      students : Array(),
      setStudents : (newStudents: any[])=>{updateToken(newStudents)}
  }))

  return (
    <div className="App">
      <StudentsContext.Provider value={state}>
        <Table></Table>
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
