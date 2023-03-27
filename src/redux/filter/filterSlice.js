import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const contactsFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { filterData } = contactsFilter.actions;

export const filterReducer = contactsFilter.reducer;
