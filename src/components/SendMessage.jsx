import { auth } from '../firebaseInit';
import { Timestamp, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function Footer({ messagesCollection }) {
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    const newMessage = {
      uid,
      text: message,
      createdAt: Timestamp.now(),
    }
    await addDoc(messagesCollection, newMessage);
    setMessage('');
  }

  return (
    <form
      className='d-flex justify-content-between p-2 fixed-bottom'
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
        Send
      </button>
    </form>
  )
};
