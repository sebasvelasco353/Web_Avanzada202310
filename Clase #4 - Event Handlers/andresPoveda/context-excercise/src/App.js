import List from './components/List.jsx';
import Details from './components/Details.jsx';
//import Editing from './components/Editing.jsx';
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
  
  //Item context for Details
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

  function deleteStudent(itemID) { 
    let findStudent = studentsList.findIndex((obj => obj.id === itemID))
    console.log("index: ", findStudent);
    const newArr = [...studentsList];
    newArr.pop(findStudent);
    
    setStudentList(newArr);
  }


  //Remove a semester
  function removeSemester(itemID) {

    /* Find the index of the desired object making the comparison of the obj ID and item ID*/
    let findStudent = studentsList.findIndex((obj => obj.id === itemID))
  
    /* Create a new copy of the array studentList */
    const newArr = [...studentsList]

    /* Asignar el nuevo valor en la posicion del arreglo y cambia el dato de semestre*/
    newArr[findStudent] = {
      //Hago un copia del arreglo en el valor que coincide
      ...newArr[findStudent],
      semester: newArr[findStudent].semester - 1
    }
    setStudentList(newArr)
  }

 // Asign value to item in order to give context to "details" component
  function showDetails(data) {
    setItemContext(data);
    console.log(itemContext)
    const setOpacity = document.getElementById("details").style.opacity = "1.0"
  } 

  //Handles the editing in the details component
  function handleEdit(newParam, param, itemID) {
    let findStudent = studentsList.findIndex((obj => obj.id === itemID))
    console.log("index: ", findStudent)

    const newArr = [...studentsList]

    newArr[findStudent][param] = newParam;

    setStudentList(newArr)
    //Si param es name
    //newArr[findStudent].name
  }


  return (
    <div className="App">
      <studentsContext.Provider value={studentsList}>
        <List addSemester={addSemester} removeSemester={removeSemester} showDetails={showDetails} deleteStudent={deleteStudent} />
        <detailsContext.Provider value = {itemContext}>
          <Details handleEdit={handleEdit} />
          {/*<Editing /> */}
        </detailsContext.Provider>
      </studentsContext.Provider>
    </div>
  );
}

export default App;
