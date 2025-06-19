import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import { FaHome } from 'react-icons/fa';


export const Navbar = () => {
 const [showNavbar, setShowNavbar] = useState(true);
 const [lastScrollY, setLastScrollY] = useState(0); 

 const handleScroll = () => {
   if (window.scrollY > lastScrollY) {
     setShowNavbar(false);
   } else {
     setShowNavbar(true);
   }
   setLastScrollY(window.scrollY);
 };

 const handleNavClick = () => {
   setTimeout(() => {
     setShowNavbar(false);
   }, 800);
 };

  const handleMouseAtTop = (e) => {
    if(e.clientY < 20) {
      setShowNavbar(true);
    }
  };

 useEffect(() => {
   window.addEventListener('scroll', handleScroll);

   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, [lastScrollY]);

 useEffect(() => {
   window.addEventListener('mousemove', handleMouseAtTop);

    return () => {
      window.removeEventListener('mousemove', handleMouseAtTop);
    }
 }, []);

 return (
   <nav className={`${styles.navbar} ${!showNavbar && styles.hidden}`}>
     <Link to="/#hero" onClick={handleNavClick}>
       <FaHome className={styles.homeIcon} />
     </Link>
     <div>
       <ul className={styles.navList}>
         <li><Link to="/#about" onClick={handleNavClick}>About</Link></li>
         <li><Link to="/#projects" onClick={handleNavClick}>Projects</Link></li>
         <li><Link to="/contact" >Contact</Link></li>
       </ul>
     </div>
   </nav>
 );
};
