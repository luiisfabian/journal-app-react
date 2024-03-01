import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
      },
    reducers: { 
        login: (state, action) => {},
        logOuth: (state, payload) => {},
        checkingCredentials: (state) => {},

     },
});

export const {login, logOuth, checkingCredentials} = authSlice.actions;