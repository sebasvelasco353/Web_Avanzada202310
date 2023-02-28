import React from 'react';
import {Table} from "./components/Table/Table";
import "./App.css";

function App() {
    return (
        <main className="app">
            <section className={"app__header"}>
                <h2 className={"app__title"}>Student Table</h2>
                <button className={"app__button"}>Add Student</button>
            </section>
            <Table/>
        </main>
    );
}

export default App;
