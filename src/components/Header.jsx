import SignOut from "./SignOut";

export default function Header({ user }) {
  console.log(user);
  return user && (
    <header
      className='d-flex bg-light align-items-center justify-content-between ps-3 p-2 fixed-top'
    >
      <span>
        {'Welcome, '}
        <span
          className='fw-semibold text-wrap'
          style={ { fontSize: '15px' } }
        >
          {user.displayName}
        </span>!
      </span>
      <SignOut />
    </header>
  )
};
