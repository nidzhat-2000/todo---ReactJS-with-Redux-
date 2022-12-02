import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: false,
  data: false,
  opened: false,
};

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.name = action.payload.name;
      state.data = action.payload.data || false;
      state.opened = true;
    },
    closeModal: state => {
      state.opened = false;
      state.user = false;
      state.data = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modal.actions;

export default modal.reducer;
