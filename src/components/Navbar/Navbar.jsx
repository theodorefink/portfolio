import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import { FaHome } from 'react-icons/fa';

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // State to track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) { 
      setShowNavbar(false); 
    } else { 
      setShowNavbar(true); 
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${!showNavbar && styles.hidden}`}>
      <Link to="/">
        <FaHome className={styles.homeIcon} />
      </Link>
      <div>
        <ul className={styles.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};
