import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const addSlc = createSlice({
  name: 'add',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // editItem: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = addSlc.actions;

export default addSlc.reducer;
