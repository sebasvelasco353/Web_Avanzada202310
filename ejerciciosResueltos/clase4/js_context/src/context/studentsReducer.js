import * as React from 'react';
import { students } from '../assets/students';

const StudentsContext = React.createContext(); // Creamos el contexto que usaremos para pasar el estado.

/*
** Mi reducer recibe el estado actual y una accion, y dependiendo del tipo de accion va **
** a modificar el estado, despues va a retornar ese nuevo estado generando un re render  **
*/
function StudentsReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      const studentIndex = state.students.findIndex((student) => student.id === action.payload);
      const newArr = [...state.students];
      newArr[studentIndex].semester += 1;
      return { students: newArr };
    }
    case 'decrement': {
      const studentIndex = state.students.findIndex((student) => student.id === action.payload);
      const newArr = [...state.students];
      newArr[studentIndex].semester -= 1;
      return { students: newArr };
    }
    case 'delete': {
      const studentIndex = state.students.findIndex((student) => student.id === action.payload);
      const newArr = [...state.students];
      newArr.splice(studentIndex, 1);
      return { students: newArr };
    }
    case 'newEntry': {
      //TODO: Must add a new student
      console.log(action.type);
      return state;
    }
    case 'modify': {
      //TODO: Must change student values.
      console.log(action.type);
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

/*
** El provider es un componente que se va a encargar de entregar el contexto o estado **
** y el metodo dispatch a los componentes hijos, en este caso el componente Table que **
** usamos en App.JS                                                                   **
*/
function StudentsProvider({ children }) {
  const [state, dispatch] = React.useReducer(StudentsReducer, { students })
  const value = {state, dispatch}
  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>
}

/*
** useStudents es una funcion que nos devuelve el context de la aplicacion y lo vamos **
** a usar siempre que necesitemos acceder al state o cuando vamos a usar dispatch     **
*/
function useStudents() {
  const context = React.useContext(StudentsContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {StudentsProvider, useStudents}
