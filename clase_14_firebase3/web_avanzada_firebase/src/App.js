import './App.css';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import NewItem from './components/NewItem';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import List from "./components/List";
import { firebaseAuth } from "./config/firebase";
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const checkForUser = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
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
    if (user) return <button onClick={handleSignOut}>Sign Out</button>;
    return <><SignIn /><br /><LogIn /> <br/></>;
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
