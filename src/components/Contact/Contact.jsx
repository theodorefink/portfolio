import React from "react";
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <h2>Contact Me</h2>
            <div className={styles.contactBox}>
                <div className={styles.contactBox2}>
                    <a href="tel:+64274364951">
                        <FaPhone className={styles.icon}/><span>027 436 4951</span>
                    </a>
                </div>
                <div className={styles.contactBox2}>
                    <a href="mailto:theodorefink11@gmail.com">
                        <FaEnvelope className={styles.icon} /><span>theodorefink11@gmail.com</span>
                    </a>
                </div>
                <div className={styles.contactBox2}>
                    <a href="https://www.linkedin.com/in/theodore-fink/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.icon} /><span>theodore-fink</span>
                    </a>
                </div>
                <div className={styles.contactBox2}>
                    <a href="https://github.com/theodorefink" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.icon} /><span>theodorefink</span>
                    </a>
                </div>
                {/* <ul className={styles.contactList}>
                    <li> 
                        <a href="tel:+64274364951">
                            <FaPhone className={styles.icon}/>027 436 4951
                        </a>
                    </li>
                    <li>
                        <a href="mailto:theodorefink11@gmail.com">
                            <FaEnvelope className={styles.icon} />theodorefink11@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/theodorefink" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icon} />theodorefink
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/theodore-fink/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.icon} />theodore-fink
                        </a>
                    </li>
                </ul> */}
            </div>
        </section>
    )
}

