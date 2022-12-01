import { configureStore } from '@reduxjs/toolkit';
import addSlc from './slices/addSlc';
import userSlc from './slices/userSlc';

export const store = configureStore({
  reducer: { addingItem: addSlc, userSlc },
});
