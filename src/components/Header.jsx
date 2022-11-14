import SignOut from "./SignOut";

export default function Header({ user }) {
  console.log(user);
  return user && (
    <header className='d-flex bg-secondary align-items-center justify-content-between p-2 fixed-top'>
      <span
        className='me-2'
      >
        Welcome, <span className='badge bg-light fw-semibold text-dark text-wrap'>
          {user.displayName}
        </span>!
      </span>
      <SignOut />
    </header>
  )
};
