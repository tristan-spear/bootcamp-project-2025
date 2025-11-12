import React from 'react';
import blogs from '@/app/blogData';
import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.css';

interface PostSlug {
    params: {
        slug: string;
    }
}

export default function BlogPost({ params } : PostSlug) {
    const post = blogs.find((blog) => (blog.slug) == "blog/" + params.slug);

    if(!post)
        return(<h1>{params.slug}</h1>);


    return (
        <>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "800px"}}>
    <div className={style.div}>
      <h3>{post.title}</h3>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        
		<Image 
            src={post.image} 
            alt={post.imgAlt} 
            width={0}
            height={100}
            sizes="100vw"
            style={{ width: "auto", height: "200px" }}
            ></Image>

                <p>{post.date}</p>      
            <p>{post.description}</p>
            <Link href="/blog" ><p className='.link' style={{color: "aquamarine", textDecoration: "underline", fontWeight: "bold", textIndent: "0"}}>Back</p></Link>
        </div>
        </div>
        </div>
        </>
    );
}