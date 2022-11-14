import { firestore } from '../firebaseInit';
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

export default function ChatRoom() {
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

  return (
    <>
      <main>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        <section>
          {messages?.map((msg) => (
            <ChatMessage key={ msg.createdAt } message={ msg }/>
          ))}
        </section>
      </main>
    </>
  )
}