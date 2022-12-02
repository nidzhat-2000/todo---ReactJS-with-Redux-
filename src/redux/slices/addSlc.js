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
      localStorage.setItem('items', action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editItem: (state, action) => {
      state.items = state.items.map(item => {
        if (action.payload.id === item.id) {
          item.title = action.payload.title;
          item.done = action.payload.done;
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, editItem } = addSlc.actions;

export default addSlc.reducer;
