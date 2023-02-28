import React from 'react';
import {StudentProvider} from "./context/Student/StudentProvider";

function App() {
    return (
        <StudentProvider>
            <main className="app">

            </main>
        </StudentProvider>
    );
}

export default App;
