import React, { createContext } from 'react';
import {StudentType} from "../../components/Student/StudentType";

interface IStudentContext {
    students : StudentType[],
    addStudent? : (student : StudentType) => boolean,
    removeStudent? : (id : string) => boolean,
    updateStudent? : (id : string, student : StudentType) => boolean,
}

const defaultState = {
    students : [],
}

const StudentContext = createContext<IStudentContext>(defaultState);

export default StudentContext;