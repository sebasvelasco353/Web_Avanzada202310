import * as React from 'react'
import { students } from '../assets/students';

const StudentsContext = React.createContext()

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

function StudentsProvider({children}) {
  const [state, dispatch] = React.useReducer(StudentsReducer, { students })
  const value = {state, dispatch}
  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>
}

function useStudents() {
  const context = React.useContext(StudentsContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {StudentsProvider, useStudents}
