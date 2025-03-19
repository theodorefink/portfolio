import React from "react";
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.introduction}>
        <h1>Hi, I'm Theo</h1>
        <div className={styles.profileImageContainer}>
          <img 
            src="/profilepic.jpg" 
            alt="Photo of me" 
            className={styles.profileImage} 
          />
        </div>
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
    </section>
  );
};
