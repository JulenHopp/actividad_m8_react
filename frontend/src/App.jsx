import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Contacto from './pages/contacto/Contacto'
import Dashboard from './pages/dashboard/Dashboard';

import './App.css'

function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("token"));
  }, []);


  return (
    <Router>
      {isLogged ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="*" element={<Login setIsLogged={setIsLogged} />} />
        </Routes>
      )}
    </Router>
  )
}

export default App
