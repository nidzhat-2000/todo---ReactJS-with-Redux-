import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/slices/popupSlc';
import EditItem from './EditItem';

function Popup() {
  const { data } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-inner">
        <EditItem closePopup={closePopup} data={data} />
      </div>
    </div>
  );
}

export default Popup;
