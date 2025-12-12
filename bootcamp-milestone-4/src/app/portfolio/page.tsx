import ProjectElement from '@/components/projectElement';
import React from 'react';
import getProjects from '@/app/projectData';

export default async function portfolio() {

    const projects = await getProjects();
    if(!projects) return <div>Failed to load Projects.</div>

    const ProjectElements =  projects.map((project) => 
            <ProjectElement key={project._id} {...project} />
    );
    
    return (
        <>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", maxWidth: "2000px"}}>
            <div style={{}}>
                {ProjectElements}
            </div>
        </div>
        </>
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