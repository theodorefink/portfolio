import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashOnHome() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ScrollToHashOnHome />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
