import React from 'react';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';

function List() {
  const { items } = useSelector(state => state.addingItem);
  // console.log(items);

  return (
    <div className="items-list">
      <ol>
        {items.map((item, i) => {
          const { name, title, done, id } = item;
          return <Item key={i} {...item} />;
        })}
      </ol>
    </div>
  );
}

export default List;
