import { auth } from './firebaseInit';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>{user && <SignOut />}</header>
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  );
}

export default App;
