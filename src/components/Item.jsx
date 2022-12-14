import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/slices/addSlc';
import { openModal } from '../redux/slices/popupSlc';

function Item({ name, title, done, id }) {
  const { user } = useSelector(state => state.userSlc);
  const dispatch = useDispatch();

  const editHandle = () => {
    dispatch(
      openModal({
        name: 'edit',
        data: { title, name, id, done },
      })
    );
  };

  const deleteHandle = () => {
    dispatch(deleteItem(id));
  };

  return (
    <li>
      <div className="item">
        <div>
          <p className={done ? 'checked' : ''}>
            {title} - {name}
          </p>
        </div>
        <div>
          {user.name === name && (
            <div className="icons">
              <button className="icon" onClick={editHandle}>
                <BiEdit />
              </button>
              <button className="icon" onClick={deleteHandle}>
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
