import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // user: localStorage.getItem('user') ?? false,
  user: false,
};

export const userSlc = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      // localStorage.setItem('user', action.payload);
    },
    logOut: state => {
      state.user = false;
    },
  },
});

export const { logIn, logOut } = userSlc.actions;

export default userSlc.reducer;
