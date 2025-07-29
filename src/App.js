import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import the router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Notfound from './components/Notfound';
import NotAuthorized from './components/NotAuthorized';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/register' element={<RegisterComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
