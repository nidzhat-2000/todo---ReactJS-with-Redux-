import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/addSlc';
import { nanoid } from 'nanoid';

function AddingItem() {
  const { user } = useSelector(state => state.userSlc);
  const id = nanoid();

  const focus = useRef();

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
    e.target.reset();
    focus.current.focus();
  };

  return (
    <form onSubmit={submitHandle} className="form">
      <div className="form-comps">
        <input
          className="add-item"
          ref={focus}
          placeholder="Type here..."
          type="text"
          onChange={e => setTodo(e.target.value)}
        />
        <button
          disabled={!user}
          type="submit"
          className={!user ? 'disabled-add-btn' : 'add-btn'}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddingItem;
