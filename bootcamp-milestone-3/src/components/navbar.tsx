import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.header}>
      {/* <h1> Tristan's Personal Website </h1> */}
      <nav className={`${style.navbar} ${style.gradient}`}>
      <h1 className={style.logo}><a href="index.html">Tristan Spear</a></h1>
      <ul className={style.navlist}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
    </header>
    // <header style={{height: "80px"}} className="p-0 m-0">
    //   {/* <h1> Tristan's Personal Website </h1> */}
    //   <nav className="h-100 p-0 m-0 d-flex flex-row justify-content-between align-items-center border-bottom border-secondary border-top-0 border-start-0 border-end-0">
    //   <h1 className="ms-5 fs-5 fw-normal"><a className="text-black text-decoration-none" href="index.html">Tristan Spear</a></h1>
    //   <ul className="d-flex flex-row justify-content-center align-items-center mt-2">
    //     <li><a className="mx-3 text-black text-decoration-none" href="index.html">Home</a></li>
    //     <li><a className="mx-3 text-black text-decoration-none" href="portfolio.html">Portfolio</a></li>
    //     <li><a className="mx-3 text-black text-decoration-none" href="resume.html">Resume</a></li>
    //     <li><a className="mx-3 text-black text-decoration-none" href="blog.html">Blog</a></li>
    //     <li><a className="mx-3 text-black text-decoration-none" href="contact.html">Contact</a></li>
    //   </ul>
    // </nav>
    // </header>
  );
}