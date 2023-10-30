import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'https://tracker-hiring.ddns.net/api/';

// eslint-disable-next-line import/prefer-default-export
export const userLogin = createAsyncThunk(
  'auth/jwt/create/',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${backendURL}auth/jwt/create/`,
        { email, password },
        config,
      );

      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.error_message) {
        return rejectWithValue(error.response.data.error_message);
      }
      return rejectWithValue(error.message);
    }
  },
);
