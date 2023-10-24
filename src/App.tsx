import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import VacancyForm from './pages/VacancyForm/VacancyForm'
import Table from './pages/Table/Table'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/vacancy" element={<VacancyForm />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  );
}
