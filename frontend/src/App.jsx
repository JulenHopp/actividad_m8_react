import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Contacto from './pages/contacto/Contacto'
import Dashboard from './pages/dashboard/Dashboard';

import './App.css'

function App() {
  const [isLogged, setIsLogged] = useState(false);


  return (
    <>
      <Router>
        {isLogged ? 
        (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </>
        ) : (
          <Login setIsLogged={setIsLogged}/>
        )}
      </Router>
    </>
  )
}

export default App
