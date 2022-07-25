import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, saveContact, removeContact } from '../api/requests';

const initialState = {
  items: [],
  filter: '',
  status: 'idle',
};

export const contactReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      //GET
      .addCase(fetchContacts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = [...action.payload];
        state.status = 'idle';
      })

      //POST
      .addCase(saveContact.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(saveContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.status = 'idle';
      })

      //DELETE
      .addCase(removeContact.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.status = 'idle';
      });
  },
});
