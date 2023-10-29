import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './store/store';
import { Store } from './store/store.types';
import { getUser } from './store/userSlice';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Header from './components/header/Header';

import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';


export default function App() {
  const dispatch = useAppDispatch();
  const isUserLoading = useSelector((state: Store) => state.user.isUserLoading);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (isUserLoading) {
    return <div>Страница загруки - надо ли?</div>;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
