import SignOut from "./SignOut";

export default function Header({ user }) {
  return user && (
    <header
      className='d-flex align-items-center justify-content-between ps-3 p-2 fixed-top'
      style={ { backgroundColor: '#e9ecef' } }
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
