import React, { useState } from 'react';
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function ListItem({item}) {
  const [newScore, setNewScore] = useState(0);

  const handleDelete = async () => {
    const movieDoc = doc(db, "movies", item.id);
    await deleteDoc(movieDoc);
  }
  const handleEditScore = async () => {
    const movieDoc = doc(db, "movies", item.id);
    await updateDoc(movieDoc, {score: newScore});
  }

  return (
    <div>
        <h3>{item.title} - {item.release_date}</h3>
        <p>{item.director}</p>
        <p>score: {item.score}</p>
        <button onClick={handleDelete}>Delete</button>
        <input
          placeholder='score'
          type="number"
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={handleEditScore}>update score</button>
    </div>
  )
}
