import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Resume() {
  return (
    <div className="page">
      <header className="section">
        <span className="eyebrow">Resume</span>
        <h1 className="headline">Experience, education, and skills at a glance</h1>
        <p className="muted">
          A concise snapshot of my background—pairing strong fundamentals with a passion for building calm, modern
          products.
        </p>
        <Link className="btn" href="./Spear, Tristan - Resume - Oct 2025 copy.pdf" download>
          Download resume
        </Link>
      </header>

      <div className={styles.columns}>
        <section className="panel">
          <h3>Education</h3>
          <div className={styles.entry}>
            <h4>B.S. Software Engineering</h4>
            <p className="muted">Cal Poly, San Luis Obispo — Expected May 2027</p>
          </div>
          <div className={styles.entry}>
            <h4>A.S. Computer Science & Mathematics</h4>
            <p className="muted">Cuesta College — May 2025</p>
          </div>
        </section>

        <section className="panel">
          <h3>Experience</h3>
          <div className={styles.entry}>
            <h4>Academic Tutor</h4>
            <p className="muted">Cuesta College — Jan 2024 to May 2025</p>
            <ul className={styles.list}>
              <li>Supported students across CS and mathematics with clear, patient guidance.</li>
              <li>Encouraged independent problem-solving and deep understanding over quick answers.</li>
            </ul>
          </div>
        </section>

        <section className="panel">
          <h3>Projects</h3>
          <div className={styles.entry}>
            <h4>Personal Website</h4>
            <p className="muted">Crafted a multi-page portfolio site focused on clarity and performance.</p>
            <ul className={styles.list}>
              <li>Built responsive layouts with modern CSS and semantic HTML.</li>
              <li>Created a contact experience with form handling and validation.</li>
            </ul>
          </div>
        </section>

        <section className="panel">
          <h3>Skills</h3>
          <div className={styles.tags}>
            <span className="pill">TypeScript</span>
            <span className="pill">React / Next.js</span>
            <span className="pill">UI/UX</span>
            <span className="pill">CSS Architecture</span>
            <span className="pill">Accessibility</span>
          </div>
        </section>
      </div>
    </div>
  );
}
