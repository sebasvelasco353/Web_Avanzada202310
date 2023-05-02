import { useState, useEffect} from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import ListItem from '../ListItem'

export default function List() {
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

  return (
    movies.map(movie => (
        <ListItem key={movie.id} item={movie} />
    ))
  )
}
