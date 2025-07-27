import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandPage from './pages/LandPage';
import LogInPage from './pages/LogInPage';
import Dashboard from './pages/Dashboard';
import './App.css';
import AddRecordsPage from './pages/AddRecordsPage';
import EditRecordsPage from './pages/EditRecordsPage';
import DeleteRecordsPage from './pages/DeleteRecordsPage';
import ReadRecordsPage from './pages/ReadRecordsPage';
import { UserProvider } from './providers/UserProvider';
import Error404Page from './pages/Error404Page';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LandPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='read' element={<ReadRecordsPage />} />
          <Route path='add' element={<AddRecordsPage />} />
          <Route path='update' element={<EditRecordsPage />} />
          <Route path='delete' element={<DeleteRecordsPage />} />
          <Route path='*' element={<Error404Page />} />

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
