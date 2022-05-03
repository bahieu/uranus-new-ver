import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import PageFooter from './component/footer';
import { MenuIcon } from './styles/Navbar';
import Home from './Pages/Home';
import News from './Pages/News';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Button, { PrimaryBtn, SecondaryBtn } from './component/button';

function App() {
  return (
    <Router>
      <Navbar />
      <MenuIcon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Button>click me !!</Button>
      <PrimaryBtn>Primary Button!</PrimaryBtn>
      <SecondaryBtn>Secondary Button!</SecondaryBtn>
      <PageFooter />
    </Router>
  );
}

export default App;
