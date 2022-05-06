import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import PageFooter from './component/footer';
import { MenuIcon } from './styles/Navbar';
import Home from './Pages/Home';
import News from './Pages/News';
import Contact from './Pages/Contact';
import About from './Pages/About';
import AboutUs from './Pages/AboutUs';
import TermPolicy from './Pages/TermPolicy';
import Community from './Pages/Community';
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/term-policy" element={<TermPolicy />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Button>click me !!</Button>
      <PrimaryBtn>Primary Button!</PrimaryBtn>
      <SecondaryBtn>Secondary Button!</SecondaryBtn>
      <PageFooter />
    </Router>
  );
}

export default App;
