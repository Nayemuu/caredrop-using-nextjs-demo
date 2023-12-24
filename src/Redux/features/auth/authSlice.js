'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
  loginMessageStatus: '',
  logOutMessageStatus: '',
  signUpMessageStatus: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      // console.log('authSlice.reducer, userLoggedIn action.payload = ', action.payload)
      state.accessToken = action.payload.access_token;
    },

    addLoginMessageStatus: (state, action) => {
      state.loginMessageStatus = 'pending';
    },

    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.logOutMessageStatus = 'pending';
    },

    clearLoginMessage: (state) => {
      state.loginMessageStatus = '';
    },

    clearLogOutMessage: (state) => {
      state.logOutMessageStatus = '';
    },
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  clearLoginMessage,
  clearLogOutMessage,
  addLoginMessageStatus,
} = authSlice.actions;
export default authSlice.reducer;
