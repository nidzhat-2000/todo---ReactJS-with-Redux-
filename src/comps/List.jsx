import React from 'react';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';

function List() {
  const { items } = useSelector(state => state.addingItem);

  console.log(items);
  return <ul>{/* <Item /> */}</ul>;
}

export default List;
