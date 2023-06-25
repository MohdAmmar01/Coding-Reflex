"use client"
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/navigation';
import { Satisfy } from 'next/font/google';

const shadow = Satisfy({
  weight: '400',
  subsets: ['latin'],
});


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const router=useRouter()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarBrand}>
          <span  onClick={()=>{router.push("/")}} className={`${styles.navbarBrandLink} ${shadow.className}`} >
  Coding Reflex
          </span>
        </div>
        <div className={`${styles.menuIcon} ${styles.showOnMobile}`} onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </div>
        <div className={`${styles.navbarLinks} ${styles.showOnDesktop}`}>
          <span onClick={()=>{router.push("/")}} className={styles.navbarLink}>
            Home
          </span>
          <span  onClick={()=>{router.push("/about")}} className={styles.navbarLink}  >
            About
          </span>
          <span onClick={()=>{router.push("/blogs")}}  className={styles.navbarLink} >
            Blogs
          </span>
          <span onClick={()=>{router.push("/contact")}} className={styles.navbarLink} >
            Contact
          </span>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.closeIcon} onClick={toggleMenu}>
              <HiX />
            </div>
            <span  onClick={()=>{router.push("/");toggleMenu()}}  className={styles.ham_links} >
              Home
            </span>
            <span  onClick={()=>{router.push("/about");toggleMenu()}}  className={styles.ham_links} >
              About
            </span>
            <span  onClick={()=>{router.push("/blogs");toggleMenu()}}  className={styles.ham_links} >
              Blogs
            </span>
            <span  onClick={()=>{router.push("/contact");toggleMenu()}}  className={styles.ham_links} >
              Contact
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
