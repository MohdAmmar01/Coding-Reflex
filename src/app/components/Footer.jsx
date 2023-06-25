import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <p>Copyright &copy; 2023. All rights reserved.</p>
        </div>
        <div className={styles.right}>
        <Link href="https://www.linkedin.com/in/mohd-ammar-446bab248/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} color="#fff" />
          </Link>
          <Link href="https://github.com/MohdAmmar01" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} color="#fff" />
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
