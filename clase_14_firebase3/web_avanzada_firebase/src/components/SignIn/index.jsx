import { firebaseAuth, db, storage } from "../../config/firebase";
import { v4 } from "uuid";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './signin.css'
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function SignIn() {
  const usersCollectionRef = collection(db, "users"); // h
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleSignIn = () => {
    const filesFolderReference = ref(storage, `userImages/${v4()+file.name}`); // save in the random folder
    try {
        uploadBytes(filesFolderReference, file).then(res => {
          return getDownloadURL(res.ref);
        }).then(url => {
          createUserWithEmailAndPassword(firebaseAuth, email, password).then((res) => {
            addDoc(usersCollectionRef, { edad: 12, test: true, uid: res.user.uid, profileImage: url});
          });
        });
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className="SignIn">
        <h3>Dont have an account?</h3>
        <input
          placeholder='email@email.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignIn;