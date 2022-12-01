import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../redux/slices/userSlc';

function Header() {
  const { user } = useSelector(state => state.userSlc);
  // console.log(user);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="app name">
        <h2>Todo-List</h2>
      </div>

      <section className="users">
        <button
          className="user"
          onClick={() => dispatch(logIn({ name: 'Nijat', id: 1 }))}
        >
          Log In as Nijat
        </button>
        <button
          className="user"
          onClick={() => dispatch(logIn({ name: 'Ibrahim', id: 2 }))}
        >
          Log In as Ibrahim
        </button>
      </section>

      {user && <h3>Welcome, {user.name}</h3>}
    </div>
  );
}

export default Header;
