import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import vacancyReducer from './vacancySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    vacancy: vacancyReducer,
  },
});

export const appDispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
