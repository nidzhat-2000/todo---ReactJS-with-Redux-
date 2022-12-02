import React from 'react';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/slices/userSlc';
import { editItem } from '../redux/slices/addSlc';

function List() {
  const { items } = useSelector(state => state.addingItem);
  const { user } = useSelector(state => state.userSlc);
  // console.log(user);
  const dispatch = useDispatch();

  // console.log(items);
  return (
    <div className="items-list">
      <ol>
        {items.map((item, i) => {
          const { name, title, done, id } = item;
          return <Item key={i} {...item} />;
        })}
      </ol>

      {/* {user && ( */}
      <div>
        <button
          disabled={!user}
          className={!user ? 'logout-btn' : ''}
          onClick={() => dispatch(logOut())}
          className="logout"
        >
          Log out
        </button>
      </div>
      {/* )} */}
    </div>
  );
}

export default List;
