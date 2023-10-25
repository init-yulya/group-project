import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Header from './components/header/Header';
import Profile from './pages/profile/Profile';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
