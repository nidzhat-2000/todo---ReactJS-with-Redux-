import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../redux/slices/addSlc';
import { nanoid } from 'nanoid';

function AddingItem() {
  const { items } = useSelector(state => state.addingItem);
  const { user } = useSelector(state => state.userSlc);
  const id = nanoid();

  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');

  const submitHandle = e => {
    e.preventDefault();

    dispatch(
      addItem({
        name: user.name,
        id: id,
        title: todo,
        done: false,
      })
    );
  };

  return (
    <form onSubmit={submitHandle} className="form">
      <div className="form-comps">
        <input
        className='add-item'
        placeholder='Type here...'
          type="text"
          onChange={e => {
            setTodo(e.target.value);
          }}
        />
        <button disabled={!user} type="submit" className='add-btn'>
          Add
        </button>
      </div>
    </form>
  );
}

export default AddingItem;
