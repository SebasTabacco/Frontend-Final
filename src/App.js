/*import React from 'react';*/
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';


import Contacto from './pages/contacto';
import Home from './pages/Home';
import Novedades from './pages/Novedades';
import Servicios from './pages/servicios';
import Staff from './pages/Staff';



function App() {

  return (
    <div className='App'>

      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='staff' element={<Staff />} />
          <Route path='Servicios' element={<Servicios />} />
          <Route path='Novedades' element={<Novedades />} />
          <Route path='contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <div className='footer-container'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
