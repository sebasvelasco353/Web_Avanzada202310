import './App.css';
import Table from './components/Table'
import { StudentsProvider } from './context/studentsReducer';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          Ejercicio de la clase 4 resuelto usando JS y React.context
        </header>
        <StudentsProvider>
          <Table />
        </StudentsProvider>
      </div>
  );
}

export default App;
