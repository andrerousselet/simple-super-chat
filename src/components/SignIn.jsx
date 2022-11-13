import { auth } from '../firebaseInit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = async () => {
    await signInWithPopup(auth, googleProvider);
  }

  return (
    <button onClick={ googleSignIn }>Sign in with Google</button>
  )
}