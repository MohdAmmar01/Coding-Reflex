import React from 'react'

import logo from "../../../public/images/logo.png"
import Image from 'next/image'

import {AiFillLinkedin,AiOutlineMail,AiOutlineGithub} from "react-icons/ai"

import styles from "../styles/contact.module.css"
import Link from 'next/link'

function page() {
  return (
    <div id="contact" className={styles.contact_container}>
    <p className={styles.headingp}>Don't be shy! Hit me up! 👇</p>
        <Image className={styles.logo} src={logo} alt="Location" />
    <div className={styles.logos}>
   <Link href="sgsg" > <AiFillLinkedin className={styles.log}  /> </Link> 
   <Link href="sgsg" > <AiOutlineMail className={styles.log}  /> </Link> 
   <Link href="sgsg" > <AiOutlineGithub className={styles.log}  /> </Link> 
  
    </div>
      
  </div>
  )
}

export default page
