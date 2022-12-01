import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../redux/addSlc';

function AddingItem() {
  const { items } = useSelector(state => state.addingItem);
  console.log(items);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');
  console.log(todo);

  const submitHandle = e => {
    e.preventDefault();

    dispatch(addItem(todo));
  };

  return (
    <form onSubmit={submitHandle} className="form">
      <div className="form-comps">
        <input type="text" />
        <button type="submit" onChange={e => setTodo(e.target.value)}>
          Add
        </button>
      </div>
    </form>
  );
}

export default AddingItem;
