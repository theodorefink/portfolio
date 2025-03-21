import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  )
}

export default App
