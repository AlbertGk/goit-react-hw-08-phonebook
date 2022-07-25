import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  // mockApiInstance,
  connectionsApiInstance,
  connectionsApiInstanceUser,
} from '../api/client';

//contacts
export const fetchContacts = createAsyncThunk('getFromApi', async () => {
  const response = await connectionsApiInstanceUser.get('contacts');
  return response.data;
});

export const saveContact = createAsyncThunk('postInApi', async contact => {
  const response = await connectionsApiInstanceUser.post('contacts', contact);
  return response.data;
});

export const removeContact = createAsyncThunk(
  'removeFromApi',
  async contactId => {
    const response = await connectionsApiInstanceUser.delete(
      `contacts/${contactId}`
    );
    return response.data;
  }
);

//user
//create
export const createUser = createAsyncThunk(
  'createUserRequest',
  async payload => {
    const { data } = await connectionsApiInstance.post('users/signup', payload);
    return data;
  }
);

//login
export const loginUser = createAsyncThunk('loginUserRequest', async payload => {
  console.log(payload);
  const { data } = await connectionsApiInstance.post('users/login', payload);
  localStorage.setItem('jwt_token', data.token);
  return data;
});

//log out
export const logoutUser = createAsyncThunk(
  'logoutUserRequest',
  async (arg, thunkAPI) => {
    try {
      await connectionsApiInstanceUser.post('/users/logout');
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      localStorage.removeItem('jwt_token');
    }
  }
);

//check if still authenticated
export const checkIfStillAuthenticated = createAsyncThunk(
  'checkIfStillAuthenticatedRequest',
  async () => {
    const { data } = await connectionsApiInstanceUser.get('/users/current');
    return data;
  }
);
