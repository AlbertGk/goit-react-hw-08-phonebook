import { createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  loginUser,
  logoutUser,
  checkIfStillAuthenticated,
} from '../api/requests';

const initialState = {
  isUserAuthenticated: false,
  user: {
    status: 'idle',
  },
};

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //create
      .addCase(createUser.pending, state => {
        state.user.status = 'fetching';
      })
      .addCase(createUser.rejected, state => {
        state.user.status = 'error';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = {
          status: 'success',
          email: action.payload.user.email,
          name: action.payload.user.name,
        };

        state.isUserAuthenticated = true;
      })

      //login
      .addCase(loginUser.pending, state => {
        state.user.status = 'fetching';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = {
          status: 'success',
          email: action.payload.user.email,
          name: action.payload.user.name,
        };
        state.isUserAuthenticated = true;
      })
      .addCase(loginUser.rejected, state => {
        state.user.status = 'error';
      })

      //log out
      .addCase(logoutUser.fulfilled, state => {
        state.user = {};
        state.isUserAuthenticated = false;
      })
      .addCase(logoutUser.rejected, state => {
        state.user = {};
        state.isUserAuthenticated = false;
      })

      //check authentication
      .addCase(checkIfStillAuthenticated.pending, state => {
        state.user.status = 'fetching';
      })
      .addCase(checkIfStillAuthenticated.fulfilled, (state, action) => {
        state.user = {
          status: 'success',
          email: action.payload.email,
          name: action.payload.name,
        };
        state.isUserAuthenticated = true;
      })
      .addCase(checkIfStillAuthenticated.rejected, state => {
        state.user = {};
        state.isUserAuthenticated = false;
      });
  },
});
