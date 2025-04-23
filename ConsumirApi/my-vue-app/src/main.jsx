import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Footer from './layouts/footer.jsx'
import './index.css';
import App from './App.jsx';
import Navbar from './layouts/navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
      </BrowserRouter>
    </>
  </StrictMode>,
);