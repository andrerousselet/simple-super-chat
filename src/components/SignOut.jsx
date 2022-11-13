import { auth } from '../firebaseInit';
import { signOut } from 'firebase/auth';

export default function SignIn() {

  const signOutUser = async () => {
    await signOut(auth);
  }

  return (
    <button onClick={ signOutUser }>Sign out</button>
  )
}