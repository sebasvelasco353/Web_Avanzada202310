import './App.css';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import { signOut } from 'firebase/auth';
import { firebaseAuth, db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from 'react';

// TODO: Hacer que cambie el UI dependiendo de si esta o no iniciada la sesion, esa informacion la encuentran en firebaseAuth.currentUser.
// TODO: Agregar Peliculas

function App() {
  const [movies, setMovies] = useState([]);
  const moviesCollectionRef = collection(db, "movies"); // hacemos una referencia a la coleccion que necesitamos

  const getMovies = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const formattedData = data.docs.map((doc) => ({
        ...doc.data(), //metodo incluido para obtener los datos
        id: doc.id // tenemos que sacar el id del documento, en nuestro caso tambien es el nombre o titulo de la pelicula.
      }))
      setMovies(formattedData); // seteamos las peliculas en nuestro estado
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => { // para correr esto justo cuando iniciamos la app
    getMovies();
  });

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      console.error(error);
    }
  }
  const renderHeaderContent = () => {
    return <><SignIn /><br /><LogIn /> <br/> <button onClick={handleSignOut}>Sign Out</button></>
  }

  return (
    <div className="App">
      <header className="App-header">
        { renderHeaderContent() }
        {
          movies.map(movie => (
            <div key={movie.id}>
              <h3>{movie.id} - {movie.release_date}</h3>
              <p>{movie.director}</p>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
