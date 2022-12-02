import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modals from '../modals';
import { editItem } from '../redux/slices/addSlc';
import { closeModal } from '../redux/slices/popupSlc';
import EditItem from './EditItem';

function Popup() {
  const { data, name } = useSelector(state => state.modal);
  console.log(data);

  const dispatch = useDispatch();

  const itemData = modals.find(el => el.name === name);
  // console.log(modals);
  // console.log(itemData.element);

  const closePopup = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-inner">
        <EditItem closePopup={closePopup} data={data} />
        {/* <itemData.element closePopup={closePopup} data={data} /> */}
      </div>
    </div>
  );
}

export default Popup;
