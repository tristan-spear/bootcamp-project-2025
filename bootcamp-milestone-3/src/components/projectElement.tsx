import React from 'react';
import style from './projectElement.module.css';
import Image from 'next/image';
import type {Project} from "@/database/projectSchema"; // importing the type/interface we defined earlier
import Link from 'next/link';


export default function ProjectElement(props: Project) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div style={{width: "90%"}}>
        
		<Image 
      src={props.image || "/images/headshot.jpg"} 
      alt="my project"
      width={0}
      height={100}
      sizes="100vw"
      style={{ width: "auto", height: "200px" }}
    ></Image>
  
      <p>{props.description}</p>
      <Link href={props.link} ><p className='.link' style={{color: "aquamarine", textDecoration: "underline", fontWeight: "bold", textIndent: "0"}}>View Here</p></Link>
      </div>
	</div>
  );
}