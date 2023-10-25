import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const appDispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
