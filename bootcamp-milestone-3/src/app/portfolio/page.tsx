import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Resume() {
    return (
        <>
        <main>
            <h2>portfolio</h2>
            <div className="project" style={{display: "block"}}>
            <Link href="/"><Image src="/images/site.png" alt={"Personal Site image"} height={200} width={350}></Image></Link>
            <h3 style={{paddingLeft: "8px", display: "block",}}>Personal Website</h3>
            <p style={{display: "block"}}>This is my personal website, made through the Hack4Impact starter pack</p>
            <a href="./" style={{display: "block"}}>view here!</a>
            </div>
            <br />
        </main>
        </>
    );
}