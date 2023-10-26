import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import VacancyForm from './pages/VacancyForm/VacancyForm';
import VacancyActive from './pages/VacancyActive/VacancyActive';
import VacancyArchive from './pages/VacancyArchive/VacancyArchive';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/vacancy" element={<VacancyForm />} />
        <Route path="/vacancy/active" element={<VacancyActive />} />
        <Route path="/vacancy/archive" element={<VacancyArchive />} />
      </Routes>
    </>
  );
}
