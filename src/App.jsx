import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandPage from './pages/LandPage';
import LogInPage from './pages/LogInPage';
import RegPage from './pages/RegPage';
import Dashboard from './pages/Dashboard';
import './App.css'
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/register' element={<RegPage />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
