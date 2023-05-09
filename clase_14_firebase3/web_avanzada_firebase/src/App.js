import './App.css';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import NewItem from './components/NewItem';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import List from "./components/List";
import { firebaseAuth, db } from "./config/firebase";
import { useEffect, useState } from 'react';
import { getDocs, collection,  query, where  } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [ userDisplayData, setUserDisplayData] = useState(null);

  const checkForUser = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user)  return;
      if (user) setUser(user);
      const usersRef = collection(db, "users");
      // Create a query against the collection.
      const q = query(usersRef, where("uid", "==", user.uid));
      getDocs(q).then(querySnapshot => {
        const formattedData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        console.log(formattedData);
        setUserDisplayData(formattedData);
      })
    });
  }

  useEffect(() => {
    checkForUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  const renderHeaderContent = () => {
    if (user && userDisplayData) {
      return (
        <>
          <img src={userDisplayData[0].profileImage} alt='user profile' />
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )
    } else {
      return <><SignIn /><br /><LogIn /> <br/></>;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        { renderHeaderContent() }
      </header>
      <NewItem />
      {user ? <List /> : null}
    </div>
  );
}

export default App;
