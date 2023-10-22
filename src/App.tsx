import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import Header from './components/header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}
