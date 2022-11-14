import { useState } from 'react';

export default function Footer() {
  const [message, setMessage] = useState('');

  return (
    <footer>
      <form>
      <input
        type="text"
        value={ message }
        onChange={ (e) => setMessage(e.target.value) }
      />
      <button
        type="submit"
        disabled={ !message }
      >
        Send
      </button>
      </form>
    </footer>
  )
};
