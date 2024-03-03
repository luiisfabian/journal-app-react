import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'authenticated', 'checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => { },
    logOuth: (state, payload) => { },
    checkingCredentials: (state) => {

      state.status = 'checking';
    },

  },
});

export const { login, logOuth, checkingCredentials } = authSlice.actions;