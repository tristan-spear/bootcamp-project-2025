import React from 'react';
import getBlogs from '@/app/blogData';
import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.css';
import type {Blog} from '@/database/blogSchema';
import Comment from '@/components/comment';
import type {IComment} from '@/database/blogSchema';
import CommentForm from '@/components/blogCommentForm';
import PageProps from "next";

interface PostSlug {
    params: {
        slug: string;
    }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const blogs: Blog[] = await getBlogs();
    const post: Blog | undefined = blogs.find((blog) => (blog.slug) == "blog/" + params.slug);

    if(!post)
        return(<h1>{params.slug}</h1>);


    {console.log(post.comments)}
    return (
        <>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
    <div className={style.div}>
      <h3>{post.title}</h3>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        
		<Image 
            src={post.image} 
            alt={post.imageAlt || "image alt"} 
            width={0}
            height={100}
            sizes="100vw"
            style={{ width: "auto", height: "200px" }}
            ></Image>

            <p>{new Date(post.date).toLocaleDateString()}</p>      
            <p>{post.description}</p>

            <CommentForm post={post} />
            <Link href="/blog" ><p className='.link' style={{color: "aquamarine", textDecoration: "underline", fontWeight: "bold", textIndent: "0"}}>Back</p></Link>
            
        </div>
        </div>
        </div>
        </>
    );
}