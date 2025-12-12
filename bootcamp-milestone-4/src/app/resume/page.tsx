import React from 'react';
import Link from 'next/link';


export default function Resume() {
    return (
        <main>
      <h1 className="page-title">Resume</h1>
      <Link href="./Spear, Tristan - Resume - Oct 2025 copy.pdf" style={{color: "white", backgroundColor: "rgb(129, 225, 225)", borderRadius: "5px", padding: "5px",}} download>download resume</Link>
      <div className="resume">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <br/>
          <div className="entry">
            <h3 className="entry-title">B.S. Software Engineering</h3>
            <p className="entry-info">Cal Poly, San Luis Obispo | Expected Graduation May 2027</p>
            <br/>
            <h3 className="entry-title">A.S. Computer Science, A.S. Mathematics</h3>
            <p className="entry-info">Cuesta College | Graduation May 2025</p>
            <br/>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <br/>
          <div className="entry">
            <h3 className="entry-title">Academic Tutor</h3>
            <p className="entry-info">Cuesta College | January 2024 - May 2025</p>
            <br/>
            <p className="entry-description">
              -Tutored for all computer science and math classNamees<br/>
              -Used communication and explanation skills to help other students succeed in their classNamees and reach their academic goals<br/>
              -Helped students reach a firm understanding of course material, and navigate specific problems, on their own with my
               guidance, rather than simply telling them the answers
            </p>
            <br/>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <br/>
          <div className="entry">
            <h3 className="entry-title">Personal Website</h3>
            <br/>
            <p className="entry-info">Created a personal website using html and css</p>
            <br/>
            <p className="entry-description">
              -Site contained multiple pages<br/>
              -Created a contact page using an html form element
            </p>
            <br/>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="entry">
            <h3 className="entry-title"></h3>
            <p className="entry-info"></p>
            <br/>
            <p className="entry-description">
              -html<br/>
              -css
            </p>
            <br/>
          </div>
        </section>
      </div>
    </main>
    );
}