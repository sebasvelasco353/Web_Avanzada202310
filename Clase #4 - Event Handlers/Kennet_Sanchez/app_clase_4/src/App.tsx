import React from 'react';
import logo from './logo.svg';
import './App.css';

import Row  from "./components/Row";
import Table from './components/Table';


const studentsArray : any [] = [
  {
    name : "Pablo",
    carrer: "Mercadeo",
    age: 45,
    sem : 4
  },
  {
    name : "Fernando",
    carrer: "Medicina",
    age: 20,
    sem : 6
  },
  {
    name : "Gabriel",
    carrer: "Sistemas",
    age: 21,
    sem : 8
  },
]

function App() {
  return (
    <div className="App">
      <Table students = {studentsArray} ></Table>
    </div>
  );
}

export default App;
