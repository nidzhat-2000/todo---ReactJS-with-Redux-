import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { deleteItem } from '../redux/slices/addSlc';

function Item({ name, title, done, id }) {
  const { user } = useSelector(state => state.userSlc);
  console.log(user);
  const dispatch = useDispatch();

  return (
    <li>
      <div className="item">
        <div>
          {title} - {name}
        </div>
        <div>
          {user.name === name && (
            <div>
              <button className="icon">
                <BiEdit />
              </button>
              <button className="icon" onClick={() => dispatch(deleteItem(id))}>
                <MdDeleteOutline />
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default Item;
