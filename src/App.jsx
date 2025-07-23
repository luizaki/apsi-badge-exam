import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandPage from './pages/LandPage';
import LogInPage from './pages/LogInPage';
import RegPage from './pages/RegPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/register' element={<RegPage />} />
      </Routes>
    </Router>
  );
}

export default App;
