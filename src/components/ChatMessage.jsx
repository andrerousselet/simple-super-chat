export default function ChatMessage({ message }) {
  const { text, createdAt, photoURL } = message;
  const date = createdAt.toDate().toLocaleString();
  return (
    <div className='d-flex align-items-center gap-2'>
      <img
        className='rounded-circle'
        style={ { width: '40px', height: '40px' } }
        src={ photoURL }
        alt="user"
      />
      <div className='border rounded-4 p-1 my-2 border-opacity-10'>
        <p
          className='card-subtitle text-muted'
          style={ { fontSize: '12px' } }
        >
          { date }
        </p>
        <p className='card-text'>{ text }</p>
      </div>
    </div>
  );
}