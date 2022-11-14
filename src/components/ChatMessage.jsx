

export default function ChatMessage({ message }) {
  const { text, createdAt } = message;
  const date = createdAt.toDate().toLocaleDateString();
  return (
    <div>
      <p>{ text } - { date }</p>
    </div>
  );
}