import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';  // import your contact page

// function App() {

//   return (
//     <div className={styles.App}>
//       <Navbar/>
//       <Hero/>
//       <div id="projects">
//         <Projects />
//       </div>
//       <div id="about">
//         <About />
//       </div>
//     </div>
//   )
// }

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div id="projects">
                <Projects />
              </div>
              <div id="about">
                <About />
              </div>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App
