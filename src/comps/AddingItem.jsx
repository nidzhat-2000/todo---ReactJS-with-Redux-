import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../redux/slices/addSlc';
import { nanoid } from 'nanoid';

function AddingItem() {
  const { items } = useSelector(state => state.addingItem);
  const { user } = useSelector(state => state.userSlc);
  // console.log(user);
  // console.log(items);
  const dispatch = useDispatch();

  const id = nanoid();
  // console.log(id);

  const [todo, setTodo] = useState('');
  // console.log(todo);

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
          type="text"
          onChange={e => {
            setTodo(e.target.value);
          }}
        />
        <button disabled={!user} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddingItem;
