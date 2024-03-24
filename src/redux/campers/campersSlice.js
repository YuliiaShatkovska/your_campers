import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations';

const initialState = {
  campers: [],
  isLoading: false,
  favorite:
    JSON.parse(localStorage.getItem('persist:favorites'))?.favorite ?? [],
  total: 13,
};

const handlePending = state => {
  state.isLoading = true;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorite.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      console.log(payload);
      state.favorite = state.favorite.filter(camper => camper._id !== payload);
    },
  },
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

export const { addToFavorites, removeFromFavorites } = campersSlice.actions;
