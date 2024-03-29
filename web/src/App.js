import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import { useState, useEffect ,useContext } from 'react';
import { tokenAuthorizationContext } from './components/context/TokenAuth';

function App() {
  const {isAuthenticated, setIsAuthenticated} = useContext(tokenAuthorizationContext)
  const location = useLocation();
  const [nav, setNav] = useState(true); 

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setNav(false);
    } else {
      setNav(true);
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/dashboard' element={isAuthenticated?<Dashboard/>:<Home/>}/>
        <Route path='/projects' element={isAuthenticated?<Projects/>:<Home/>}/>
      </Routes>
      {nav && <Footer />}
    </div>
  );
}

export default App;
