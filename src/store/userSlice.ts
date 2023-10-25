import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../utils/axios';
import { LoginRequestData, RegisterRequestData, UserSlice } from './userSlice.types';

const GET_USER = 'GET_USER';
const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';
const LOGOUT = 'LOGOUT';

export const initialStateUser: UserSlice = {
  user: {
    id: undefined,
    login: '',
    first_name: '',
    second_name: '',
    display_name: '',
    email: '',
    phone: '',
  },
  isUserLoading: true,
};

export const signinUser = createAsyncThunk(
  `user/${SIGN_IN}`,
  async (data: LoginRequestData) => {
    const response = await axiosInstance({
      method: 'POST',
      url: '/auth/signin',
      data,
    });

    return response.data;
  },
);

export const signupUser = createAsyncThunk(
  `user/${SIGN_UP}`,
  async (data: RegisterRequestData) => {
    const response = await axiosInstance({
      method: 'POST',
      url: '/auth/signup',
      data,
    });

    return response.data;
  },
);

export const logoutUser = createAsyncThunk(
  `user/${LOGOUT}`,
  async (_) => {
    const response = await axiosInstance({
      method: 'POST',
      url: '/auth/logout',
    });

    return response.data;
  },
);

export const getUser = createAsyncThunk(
  `user/${GET_USER}`,
  async (_) => {
    const response = await axiosInstance({
      method: 'GET',
      url: '/auth/user',
    });

    return response.data;
  },
);

const user = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    clearUser: (state: UserSlice) => ({ ...state, user: initialStateUser.user }),
    updateUser: (state: UserSlice, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state: UserSlice) => {
      state.user = initialStateUser.user;
    });
    builder.addCase(getUser.fulfilled, (state: UserSlice, action) => {
      state.user = action.payload;
      state.isUserLoading = false;
    });
    builder.addCase(getUser.rejected, (state: UserSlice) => {
      state.user = initialStateUser.user;
      state.isUserLoading = false;
    });
  },
});

export const {
  actions: { clearUser, updateUser },
  reducer: userReducer,
} = user;
