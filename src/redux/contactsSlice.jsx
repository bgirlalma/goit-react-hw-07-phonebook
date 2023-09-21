import { createSlice } from '@reduxjs/toolkit';
 import { fetchContacts } from "./contactsOperation";

 const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
 
const contactsSlice = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {},
// Добавляем обработку внешних экшенов
    extraReduсers: builder => {
      builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
            state.error = null;
            state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
            state.error = action.payload;
      })
    }
  });

  export const contactsReducer = contactsSlice.reducer;

