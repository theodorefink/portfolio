import React from "react";
import styles from './Navbar.module.css';
import { FaHome } from 'react-icons/fa';


export const Navbar = () => {
    return <nav>
        <a href="/" target="_blank" rel="noopener noreferrer">
            <FaHome className={styles.homeIcon} />
        </a>
        <div>
            <ul className={styles.navList}>
                <li>
                    <a href = "#about">About</a>
                </li>
                <li>
                    <a href = "#projects">Projects</a>
                </li>
                <li>
                    <a href = "#experience">Experience</a>
                </li>
                <li>
                    <a href = "#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
};