import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, firebaseAuth } from "../../config/firebase";
// import './NewItem.css'

function NewItem() {
    const moviesCollectionRef = collection(db, "movies"); // h
    const [newItem, setNewItem] = useState({});

    const handleNewItem = async () => {
      try {
        // Add new item to the DB
        await addDoc(moviesCollectionRef, { ...newItem, creatorId: firebaseAuth?.currentUser?.uid });
        await setNewItem({});
      } catch (error) {
          console.error(error);
      }
    }
    return (
      <div className="NewItem">
        <h3>Add a new movie</h3>
        <input
        placeholder='Title'
        onChange={(e) => setNewItem({
          ...newItem,
          title: e.target.value
        })}
        />
        <input
        placeholder='Director'
        onChange={(e) => setNewItem({
          ...newItem,
          director: e.target.value
        })}
        />
        <input
        placeholder='Release Date'
        type="number"
        onChange={(e) => setNewItem({
          ...newItem,
          release_date: e.target.value
        })}
        />
        <input
        placeholder='score'
        type="number"
        onChange={(e) => setNewItem({
          ...newItem,
          score: e.target.value
        })}
        />
        <button onClick={handleNewItem}>Save</button>
      </div>
    )
}

export default NewItem