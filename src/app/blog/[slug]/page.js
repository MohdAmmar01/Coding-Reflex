import React from 'react'
import styles from "../../styles/blogpost.module.css"
import { getPostByname, getallblogs } from '../../../../utils/blogsFunctions';
import "highlight.js/styles/github.css"
import {  notFound} from 'next/navigation'

export const  revalidate=43200
import { Sora } from 'next/font/google';

const shadow = Sora({
  weight: '400',
  subsets: ['latin'],
});

export async function generateMetadata({params}){
  const data=await getPostByname(`${params.slug}.mdx`)
 if(!data){
  return {title:"page not found"}
}else{
return {
  title:data.frontmatter.title,
  description:data.frontmatter.description
}
 }
}


export async function generateStaticParams(){
  const posts=await getallblogs();
  if(!posts) return []
  let p= posts.map((post)=>({
    slug:`${post.frontmatter.slug}.md`
  }))
  return p
}

async function Blog({ params}) {  
    const getdata=async()=>{
        const data=await getPostByname(`${params.slug}.mdx`)
        return data
    }
    let data=await getdata()
    if(!data){
      notFound()
    }
  return (
    <div className={styles.myblog}>
    <div className={`${styles.markdown_body} ${shadow.className}`}>
   {data.content}
    </div>
    </div>
  )
}

export default Blog
