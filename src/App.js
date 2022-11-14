import { auth } from './firebaseInit';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import Header from './components/Header';

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <Header user={ user }/>
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  );
}

export default App;
