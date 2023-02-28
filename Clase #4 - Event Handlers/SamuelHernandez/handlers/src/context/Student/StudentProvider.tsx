import React, {ReactNode, useState} from 'react';
import {StudentType} from "../../components/Student/StudentType";
import StudentContext from "./StudentContext";

export const StudentProvider = ({children} : {children: ReactNode[] | ReactNode}) => {
    const initial : StudentType[] = [] as StudentType[]
    const [students, setStudents] = useState(initial);

    const addStudent = (student : StudentType) => {
        const id = student.id;
        const studentExists = students.find(s => s.id === id) !== undefined;
        if (studentExists) return false;
        setStudents([
            ...students,
            student
        ]);
        return true;
    }

    const removeStudent = (id : string) => {
        const studentNotExists = students.find(s => s.id === id) !== undefined;
        if (studentNotExists) return false;
        setStudents(
            students.filter(s => s.id !== id)
        );
        return true;
    }

    const updateStudent = (id : string, student : StudentType) => {
        const studentNotExists = students.find(s => s.id === id) === undefined;
        if (studentNotExists) return false;
        const newStudents = students.map((s, i) => {
            if (s.id === id) return student;
            else return s;
        });
        setStudents(newStudents);
        return true;
    }

    return (
        <StudentContext.Provider value={{
            students,
            addStudent,
            removeStudent,
            updateStudent
        }}>
            {children}
        </StudentContext.Provider>
    );
}