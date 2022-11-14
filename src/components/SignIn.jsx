import { auth } from '../firebaseInit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = async () => {
    await signInWithPopup(auth, googleProvider);
  }

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <button 
        className='btn btn-lg btn-outline-primary'
        onClick={ googleSignIn }
      >
        Sign in with Google
      </button>
    </div>
  )
}