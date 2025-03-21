import React from "react";
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.aboutSection}>
            <h2>About Me</h2>
            <div className={styles.aboutBox}>
                <h3 className={styles.aboutTitle}>Education</h3>
                <div className={styles.aboutBox2}>
                    <a href="https://www.otago.ac.nz" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/otagouni.png" 
                            alt="Otago University logo" 
                            className={styles.aboutImage} 
                        />
                    </a>
                    <p className={styles.aboutDesc}>I am in my third year of my Bachelor of Science at the University of Otago, majoring in Computer Science and minoring in Mathematics. I have achieved highly in disciplines such as Web Development, Software Development, Data Structures and Algorithms, Databases, and Operating Systems Programming, and I am yet to complete papers in Artificial Intelligence. I currently hold a GPA of 7.6 out of 9, which reflects my ability to work hard and hold myself to high standards. I am also proficient in Linear Algebra and Differential Equations - I thoroughly enjoy the problem solving side of Computer Science and Mathematics.</p>
                </div>
            </div>
            <div className={styles.aboutBox}>
                <h3 className={styles.aboutTitle}>Hobbies</h3>
                <div className={styles.aboutBox2}>
                    <img 
                        src="/musicstu.png" 
                        alt="music studio photo" 
                        className={styles.aboutImage2} 
                    />
                    <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a digital audio workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud <a href="https://soundcloud.com/theodore-nz" target="_blank" rel="noopener noreferrer">here.</a> The world of software instruments and plugins is already super vast, and it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
                </div>
                {/* <div className={styles.aboutBox2}>
                    <img 
                        src="/musicstu.png" 
                        alt="music studio photo" 
                        className={styles.aboutImage2} 
                    />
                    <p className={styles.aboutDesc}>Outside of coding, I enjoy making electronic music using Ableton, a digital audio workstation on my computer. I have been teaching myself over the past two years and have uploaded some of my finished tracks on my soundcloud <a href="https://soundcloud.com/theodore-nz" target="_blank" rel="noopener noreferrer">here.</a> The world of software instruments and plugins is already super vast, and it fascinates me how many sounds and effects can be achieved through software, and I would love to one day be able to code my own! </p>
                </div> */}
            </div>
        </section>
    )
}

