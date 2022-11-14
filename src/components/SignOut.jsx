import { auth } from '../firebaseInit';
import { signOut } from 'firebase/auth';

export default function SignOut() {

  const signOutUser = async () => {
    await signOut(auth);
  }

  return auth.currentUser && (
    <button onClick={ signOutUser }>Sign out</button>
  )
}