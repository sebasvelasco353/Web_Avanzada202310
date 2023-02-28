import React, { createContext } from 'react';
import {StudentType} from "../../components/Student/StudentType";

interface IStudentContext {
    students : StudentType[],
    addStudent? : (student : StudentType) => boolean,
    removeStudent? : (id : string) => boolean,
    updateStudent? : (id : string, student : StudentType) => boolean,
}

const defaultState = {
    students : [
        {
            id: "A00368069",
            name: "Samuel Hernández",
            age: 19,
            career: "Systems Engineering",
            semester : 7
        },
        {
            id: "A00369521",
            name: "Kennet Sánchez",
            age: 19,
            career: "Systems Engineering",
            semester : 7
        },
    ],
}

const StudentContext = createContext<IStudentContext>(defaultState);

export default StudentContext;