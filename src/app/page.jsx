import React from 'react'
import "./globals.css"
import styles from "../app/styles/home.module.css"

import Image from 'next/image'
import { latestblogs } from '../../utils/blogsFunctions'
import Link from 'next/link'
import { Sora } from 'next/font/google';

const shadow = Sora({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Coding Reflex',
  description: ` Welcome to Coding Reflex, the ultimate blog application for coding enthusiasts. Discover insightful articles, expert tips, and practical resources to enhance your coding skills. From beginner-friendly tutorials to advanced topics like machine learning and web development, our curated content covers it all.`} 


async function page() {
  const data=await latestblogs()
  return (
        <div className={styles.mainContainer}>

       <div className={styles.container}>
 
        <div className={styles.hed}>
        <h1 className={`${styles.heading} `}>Coding Reflex</h1>
        </div>
       <Link  href="/blogs"> <button  className={`${styles.explore_button} ${shadow.className}}`}>Explore Blogs</button>  </Link> 
    </div>

    <div className={styles.allblogs}>
    <h1 className={styles.myblogs}>Latest Blogs</h1>
     <div className={styles.recent}>
     {
    !data || data.length===0 ?
      <>
          <div className={styles.noblogs}>
     <h3 className={styles.no_blogs}>No  blogs available right now !</h3>
          </div>
      </>
      :
     data.map((elem,i) => {
       return (
        <div key={i} className={styles.blog_item}>
             <Image   loading="lazy"  alt="blog_img" src={elem.frontmatter.image} width={200} height={200} className={styles.blog_img} />

       <div  className={styles.blog}  > 
         <div className={styles.date}>
              {elem.frontmatter.date}
             </div>
        <h1 className={shadow.className}>{elem.frontmatter.title}</h1>
        <div className={styles.blog_desc}>{(elem.frontmatter.description).substring(0,200)+ '...'}</div>
      
             <Link href={`/blog/${elem.frontmatter.slug}`} >
              Read More
             </Link>
       </div>
        </div>
       )})
       
       
       }

     </div>
       <Link href="/blogs"> <button  className={styles.more}>Explore More</button>  </Link> 
     </div>
        </div>
  )
}

export default page
