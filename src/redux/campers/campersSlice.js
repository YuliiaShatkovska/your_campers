import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const initialState = {
  campers: [],
  isLoading: false,
  favorite: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.campers = payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
