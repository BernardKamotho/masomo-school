import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import the router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Notfound from './components/Notfound';
import NotAuthorized from './components/NotAuthorized';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import AdminDashboard from './components/admin/AdminDashboard';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import ParentDashboard from './components/parent/ParentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/notAuthorized' element={<NotAuthorized />} />
        <Route path='/login' element={< LoginComponent  />} />
        <Route path='/admin-dashboard' element={< AdminDashboard />} />
        <Route path='/teacher-dashboard' element={< TeacherDashboard />} />
        <Route path='/parent-dashboard' element={< ParentDashboard />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
