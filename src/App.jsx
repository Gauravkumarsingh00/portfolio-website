import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div
        className={`min-h-screen transition-all duration-700 ${
          isDark
            ? 'bg-black'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}
      >
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={<Home isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/skills" element={<Skills isDark={isDark} />} />
          <Route path="/projects" element={<Projects isDark={isDark} />} />
          <Route path="/resume" element={<Resume isDark={isDark} />} />
          <Route path="/Contact" element={<Contact isDark={isDark} />} />
        </Routes>
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;
