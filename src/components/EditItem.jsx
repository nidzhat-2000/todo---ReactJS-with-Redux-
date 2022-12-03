import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/slices/addSlc';

function EditItem({ closePopup, data }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(data.title);
  const [done, setDone] = useState(data.done);

  const submitItem = e => {
    e.preventDefault();

    dispatch(
      editItem({
        id: data.id,
        title: title,
        done: done,
      })
    );
    closePopup();
  };

  return (
    <form onSubmit={submitItem}>
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <label className={done ? 'checked' : ''}>
        <input
          type="checkbox"
          checked={done}
          onChange={e => setDone(e.target.checked)}
        />
        Done
      </label>
      <br />
      <button type="submit">💹 Edit</button>
      <br />
      <button onClick={closePopup}>Close Modal</button>
    </form>
  );
}

export default EditItem;
