import { useRef, useEffect } from 'react';
import { firestore } from '../firebaseInit';
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import SendMessage from './SendMessage';

export default function ChatRoom() {
  const dummy = useRef();

  const messagesCollection = collection(firestore, 'messages');
  const messagesQuery = query(
    messagesCollection,
    orderBy('createdAt'),
    limit(25)
  );

  const [messages, loading, error] = useCollectionData(
    messagesQuery,
    { idField: 'id' },
  );
  
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <>
      <main className='container'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        <section style={ { marginTop: '65px', marginBottom: '65px' } }>
          {messages?.map((msg) => (
            <ChatMessage key={ msg.createdAt } message={ msg }/>
          ))}

          <span ref={ dummy }></span>
        </section>
      </main>
      <SendMessage messagesCollection={ messagesCollection }/>
    </>
  )
}