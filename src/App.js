import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import ProfileVerifyPage from './pages/profileVerification';
import ProfilePage from './pages/profilePage';
import Dashboard from './pages/dashboard';
import JobDesc from './pages/jobdesc';

import ProfileSettingsPage from './pages/profSettings';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
