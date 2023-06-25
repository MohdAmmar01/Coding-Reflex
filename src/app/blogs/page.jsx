import React from 'react'
import styles from "../styles/blogs.module.css"
import { getallblogs } from '../../../utils/blogsFunctions'
import Link from 'next/link'
import Image from 'next/image'

export const  revalidate=86400



export const metadata = {
  title: 'Blogs | Coding Reflex',
  description: "Discover insightful articles and engaging content on [Coding Reflex]. Explore a wide range of topics, including programming , web development and many more]. Stay informed, inspired, and entertained with our informative blog posts.",
}

async function page() {
    const data=await getallblogs()

  if(!data || data.length===0){
    return (
      <div className={styles.noblogs}>
 <h3 className={styles.no_blogs}>No  blogs available right now !</h3>
      </div>
    )
  }
  return (
    <div className={styles.allblogs}>
    <h1 className={styles.myblogs}>Our Blogs</h1>
     <div className={styles.recent}>
     {data.map((elem,i) => {
       return (
        <div key={i} className={styles.blog_item}>
             <Image    loading="lazy"  alt="blog_img" src={elem.frontmatter.image} width={200} height={200} className={styles.blog_img} />

       <div  className={styles.blog} > 
         <div className={styles.date}>
              {elem.frontmatter.date}
             </div>
        <h1>{elem.frontmatter.title}</h1>
        <div className={styles.blog_desc}>{(elem.frontmatter.description).substring(0,200)+ '...'}</div>
      
             <Link href={`/blog/${elem.frontmatter.slug}`} >
              Read More
             </Link>
       </div>
        </div>
       )})}
     </div>
     </div>
  )
}

export default page
