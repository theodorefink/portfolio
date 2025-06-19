import React from "react";
import styles from './Projects.module.css';
import spellingBeePic from '../../assets/spellingbee.png';
import nzBirdsPic from '../../assets/nzbirds.png';
import andiePic from '../../assets/andie.png';

export const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <h2>My Projects</h2>
            <div className={styles.projectBox}>
                <h3 className={styles.projectTitle}>Spelling Bee Solver</h3>
                <div className={styles.projectBox2}>
                    <a href="https://pangram-solver.vercel.app" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={spellingBeePic}
                            alt="Photo of spelling bee project" 
                            className={styles.projectImage} 
                        />
                    </a>
                    <p className={styles.projectDesc}>This is my Spelling Bee solver web app that I made as a personal project. I love doing the New York Times spelling bee, but sometimes I get a bit stumped so I made this solver app!</p>
                </div>
            </div>
            <div className={styles.projectBox}>
                <h3 className={styles.projectTitle}>New Zealand Birds website</h3>
                <div className={styles.projectBox2}>
                    <p className={styles.projectDesc}>This is a website that I made to learn web design. It displays information about New Zealand birds and offers the ability to filter and search.</p>
                    <a href="https://nzbirds.vercel.app" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={nzBirdsPic}
                            alt="Photo of NZ birds project" 
                            className={styles.projectImage} 
                        />
                    </a>
                </div>
                
            </div>
            <div className={styles.projectBox}>
                <h3 className={styles.projectTitle}>ANDIE</h3>
                <div className={styles.projectBox2}>
                    <a href="https://github.com/theodorefink/ANDIE" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={andiePic}
                            alt="Photo of ANDIE" 
                            className={styles.projectImage} 
                        />
                    </a>
                    <p className={styles.projectDesc}>This is ANDIE - A Non-Destructive Image Editor, built using Java and its Swing and AWT libraries. This was a group project, where we collectively implemented over 40 features.</p>
                </div>
            </div>
        </section>
    )
}