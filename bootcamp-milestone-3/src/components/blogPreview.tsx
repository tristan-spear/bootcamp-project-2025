import React from 'react';
import style from './blogPreview.module.css';
import Image from 'next/image';
import type { Blog } from "@/app/blogData"; // importing the type/interface we defined earlier
import Link from 'next/link';


export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
        
		<Image 
      src={props.image} 
      alt={props.imgAlt} 
      width={0}
      height={100}
      sizes="100vw"
      style={{ width: "auto", height: "200px" }}
    ></Image>

	    <p>{props.date}</p>      
      <p>{props.description}</p>
      <Link href={props.slug} ><p className='.link' style={{color: "aquamarine", textDecoration: "underline", fontWeight: "bold", textIndent: "0"}}>Read More...</p></Link>
      </div>
	</div>
  );
}