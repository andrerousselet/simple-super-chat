import SignOut from "./SignOut";

export default function Header({ user }) {
  return (
    <header>
      {user && <SignOut />}
    </header>
  )
};
