import { auth } from '../firebaseInit';
import { Timestamp, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function SendMessage({ messagesCollection, dummy }) {
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    const newMessage = {
      uid,
      text: message,
      createdAt: Timestamp.now(),
      photoURL,
    }
    await addDoc(messagesCollection, newMessage);
    setMessage('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <form
      className='d-flex justify-content-between p-2 mt-5 fixed-bottom'
      style={ { backgroundColor: '#e9ecef' } }
      onSubmit={ sendMessage }
    >
      <input
        className='w-100 form-control me-2'
        type='text'
        placeholder='Write your message here...'
        value={ message }
        onChange={ (e) => setMessage(e.target.value) }
      />
      <button
        className='btn btn-success'
        type='submit'
        disabled={ !message }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
        </svg>
      </button>
    </form>
  )
};
