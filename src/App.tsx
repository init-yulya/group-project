import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './store/store';
import { Store } from './store/store.types';
import { getUser } from './store/userSlice';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import VacancyCard from './components/vacancyCard/VacancyCard';
import CreateVacancy from './pages/CreateVacancy/CreateVacancy';
import ActiveVacancies from './pages/ActiveVacanciesPage/ActiveVacanciesPage';
import ArchivedVacancies from './pages/ArchivedVacanciesPage/ArchivedVacanciesPage';

export default function App() {
  const dispatch = useAppDispatch();
  const isUserLoading = useSelector((state: Store) => state.user.isUserLoading);

  useEffect(() => {
    dispatch(getUser());
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<VacancyCard />} />
        <Route path="/vacancy" element={<CreateVacancy />} />
        <Route path="/vacancy/active" element={<ActiveVacancies />} />
        <Route path="/vacancy/archive" element={<ArchivedVacancies />} />
      </Routes>
    </>
  );
}
