import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { authApi } from './authService';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export const appDispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
