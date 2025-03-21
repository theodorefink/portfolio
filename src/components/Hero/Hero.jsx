import React from "react";
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.introduction}>
        <div className={styles.profileImageContainer}>
          <img 
            src="/profilepic.jpg" 
            alt="Photo of me" 
            className={styles.profileImage} 
          />
        </div>
        <h1>Theo Fink</h1>
      </div>

      <div className={styles.contact}>
        <ul className={styles.contactList}>
          <li>
            <a href="https://github.com/theodorefink" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theodore-fink/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="mailto:theodorefink11@gmail.com">
              <FaEnvelope className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.blurb}>
        <p>Hi! I'm Theo, a third year computer science student at the University of Otago. Outside of uni, I enjoy working on some personal coding projects, as well as my other hobbies. Navigate through this website to learn more about me, my experience in software development and my projects!</p>
      </div>

      {/* <div className={styles.previewPane}>
        <a href="#about" className={styles.previewBoxes}>
            <h2>About Me</h2>
        </a>
        <a href="#projects" className={styles.previewBoxes}>
            <h2>Projects</h2>
        </a>
        <a href="#experience" className={styles.previewBoxes}>
            <h2>Experience</h2>
        </a>
      </div> */}
    </section>
  );
};
