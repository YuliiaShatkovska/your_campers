import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65800a646ae0629a3f5432c2.mockapi.io/api';

export const getCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/campers');
      console.log(data);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
