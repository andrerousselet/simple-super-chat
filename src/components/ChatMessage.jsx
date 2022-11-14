import { auth } from '../firebaseInit';

export default function ChatMessage({ message }) {
  const { uid, text, createdAt, photoURL } = message;
  const date = createdAt.toDate().toLocaleString();

  const messageClass = uid === auth.currentUser.uid ? 'flex-row-reverse' : '';

  return (
    <div className={ `d-flex gap-2 my-2 ${messageClass} `}>
      <img
        className='rounded-circle mt-1'
        style={ { width: '40px', height: '40px' } }
        src={ photoURL }
        alt="user"
      />
      <div className='border rounded-3 p-1 px-2 border-opacity-10'>
        <p
          className='card-subtitle text-muted text-end'
          style={ { fontSize: '12px' } }
        >
          { date }
        </p>
        <p className='card-text'>{ text }</p>
      </div>
    </div>
  );
}