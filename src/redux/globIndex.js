import { configureStore } from '@reduxjs/toolkit';
import addSlc from './addSlc';
import userSlc from './userSlc';

export const store = configureStore({
  reducer: { addingItem: addSlc, userSlc },
});
