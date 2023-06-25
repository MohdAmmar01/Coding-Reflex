import {compileMDX} from "next-mdx-remote/rsc"
import rehypeHighlight from "rehype-highlight/lib";

export const getPostByname=async(filename)=>{
  const response = await fetch(`https://api.github.com/repos/MohdAmmar01/website_mdx_blogs/contents/${filename}`, {
    headers: {
       "Accept":'application/vnd.github+json',
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "Accept": "application/vnd.github+json" 
    }
  }
  );
  if(!response.ok)  return undefined
const rawMDX=await response.json()
if(rawMDX=== "404: Not Found") return undefined

const  data= Buffer.from(rawMDX.content, "base64").toString();
const {frontmatter,content}=await compileMDX({
  source:data,options:{
    parseFrontmatter:true,
    mdxOptions:{
      rehypePlugins:[
        rehypeHighlight
      ]
    }
  }
})
const blogPostObj={frontmatter,content}
return blogPostObj
}

export const getallblogs=async()=>{
  const response = await fetch(`https://api.github.com/repos/MohdAmmar01/website_mdx_blogs/git/trees/main?recursive=1`, {
    headers: {
       "Accept":'application/vnd.github+json',
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "Accept": "application/vnd.github+json" 
    }
  }
  );  
  if(!response.ok)  return undefined
const data=await response.json()
let posts=[]
for(let file of data.tree) {
const post=await getPostByname(file.path)
if(post){
      posts.push(post)
}
}
let sortedposts=[]
 sortedposts=posts?.sort((a,b)=>{
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateA<dateB? -1 :1}
  )
return sortedposts
}
export const latestblogs=async()=>{
  let latestblogs=[]
const allblogs=await getallblogs()
latestblogs= allblogs?.slice(0, 5);
return latestblogs
}