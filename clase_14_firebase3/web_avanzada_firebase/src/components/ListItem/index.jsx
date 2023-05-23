import React, { useState } from 'react';
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function ListItem({item}) {
  const [newScore, setNewScore] = useState(0);
  // file upload state
  const [file, setFile] = useState(null);

  const handleDelete = async () => {
    const movieDoc = doc(db, "movies", item.id);
    await deleteDoc(movieDoc);
  }
  const handleEditScore = async () => {
    const movieDoc = doc(db, "movies", item.id);
    await updateDoc(movieDoc, {score: newScore});
  }
  const handleUploadFile = () => {
    if (!file) return; // no empty files
    const filesFolderReference = ref(storage, `moviePoster/${v4()+file.name}`); // save in the random folder
    try {
      uploadBytes(filesFolderReference, file).then(res => {
        return getDownloadURL(res.ref);
      }).then(url => {
        console.log(url);
        const movieDoc = doc(db, "movies", item.id);
        updateDoc(movieDoc, {image: url}).then((res) => alert('uploaded!'));
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
        {item.image ? <img src={item.image} alt="random" /> : null }
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
        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
          <button onClick={handleUploadFile}>Submit</button>
        </div>
    </div>
  )
}
