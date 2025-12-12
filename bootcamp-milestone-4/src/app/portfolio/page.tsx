import React from "react";
import ProjectElement from "@/components/projectElement";
import getProjects from "@/app/projectData";
import type { Project } from "@/database/projectSchema";
import styles from "./page.module.css";

export default async function Portfolio() {
  const projects = await getProjects();
  if (!projects) return <div>Failed to load Projects.</div>;

  return (
    <div className="page">
      <header className="section">
        <span className="eyebrow">Portfolio</span>
        <h1 className="headline">Polished builds with purposeful interactions</h1>
        <p className="muted">
          A selection of work that balances visual clarity, performance, and accessibility—all powered by modern
          front-end craft.
        </p>
      </header>
      <div className={styles.stack}>
        {projects.map((project: Project) => (
          <ProjectElement key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}



// import React from 'react';
// import Image from 'next/image';
// import Link from "next/link";

// export default function Resume() {
//     return (
//         <>
//         <main>
//             <h2>portfolio</h2>
//             <div className="project" style={{display: "block"}}>
//             <Link href="/"><Image src="/images/site.png" alt={"Personal Site image"} height={200} width={350}></Image></Link>
//             <h3 style={{paddingLeft: "8px", display: "block",}}>Personal Website</h3>
//             <p style={{display: "block"}}>This is my personal website, made through the Hack4Impact starter pack</p>
//             <a href="./" style={{display: "block"}}>view here!</a>
//             </div>
//             <br />
//         </main>
//         </>
//     );
// }
