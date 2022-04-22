import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './Pages/Home';
import News from './Pages/News';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
