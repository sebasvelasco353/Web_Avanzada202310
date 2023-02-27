import List from './components/List.jsx';
import Details from './components/Details.jsx';
import React, { useState } from 'react';
import './App.css';

//Creates react context
export const studentsContext = React.createContext();
export const detailsContext = React.createContext();

function App() {

  //Students list
  const [studentsList, setStudentList] = useState([{
    "name": "Andres Poveda",
    "age": "20",
    "semester": 2,
    "major": "Dmi",
    "id": 0
  },
  {
    "name": "Pedro Rodriguez",
    "age": "22",
    "semester": 5,
    "major": "CS",
    "id": 1
  },
  {
    "name": "Nick Martinez",
    "age": "19",
    "semester": 7,
    "major": "Drug Dealing",
    "id": 3
    }])
  
  const [itemContext, setItemContext] = useState("");

  //Add a semester
  function addSemester(itemID) {


    let findStudent = studentsList.findIndex((obj => obj.id === itemID))
    console.log("index: ", findStudent)

    const newArr = [...studentsList]

    newArr[findStudent] = {
      ...newArr[findStudent],
      semester: newArr[findStudent].semester + 1
    }

    console.log(newArr)
    setStudentList(newArr)
  }

  //Remove a semester
  function removeSemester(itemID) {

    /* Find the index of the desired object making the comparison of the obj ID and item ID*/
    let findStudent = studentsList.findIndex((obj => obj.id === itemID))
  
    /* Create a new copy of the array studentList */
    const newArr = [...studentsList]

    /* Asignar el nuevo valor en la posicion del arreglo y cambia el dato de semestre*/
    newArr[findStudent] = {
      ...newArr[findStudent],
      semester: newArr[findStudent].semester - 1
    }

    console.log(newArr)
    setStudentList(newArr)
  }




  function showDetails(data) {

    setItemContext(data);
    console.log(itemContext)
  
  } 



  return (
    <div className="App">
      <studentsContext.Provider value={studentsList}>
        <List addSemester={addSemester} removeSemester={removeSemester} showDetails={showDetails} />
        <detailsContext.Provider value = {itemContext}>
          <Details />
        </detailsContext.Provider>
      </studentsContext.Provider>
    </div>
  );
}

export default App;
