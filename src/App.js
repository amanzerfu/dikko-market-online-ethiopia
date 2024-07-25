// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GlobalStyle from './GlobalStyles';
import Hero from './pages/Hero';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
