import React, {useContext, useState} from 'react';
import {Table} from "./components/Table/Table";
import "./App.css";
import {StudentProvider} from "./context/Student/StudentProvider";
import {Modal} from "./components/Modal/Modal";

function App() {

    const [shown, setShown] = useState(false);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShown(true);
    };

    return (
        <StudentProvider>
            <main className="app">
                <section className={"app__header"}>
                    <h2 className={"app__title"}>Student Table</h2>
                    <button onClick={handleOnClick} className={"app__button"}>Add Student</button>
                </section>
                <Table/>
                <Modal mode={"add"} modalState={{shown, setShown}}/>
            </main>
        </StudentProvider>
    );
}

export default App;
