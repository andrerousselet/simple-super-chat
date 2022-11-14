import { auth } from '../firebaseInit';
import { signOut } from 'firebase/auth';

export default function SignOut() {

  const signOutUser = async () => {
    await signOut(auth);
  }

  return auth.currentUser && (
    <button 
      className='btn btn-outline-secondary'
      onClick={ signOutUser }
    >
      Sign out
    </button>
  )
}