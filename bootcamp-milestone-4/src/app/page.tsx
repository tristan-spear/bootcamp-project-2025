import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="page">
      <section className={`${styles.hero} hero`}>
        <div className="hero-content">
          <span className="eyebrow">Future-forward engineering</span>
          <h1 className="headline">Building thoughtful software with elegance and clarity.</h1>
          <p className="muted">
            I&apos;m Tristan Spear — a software engineer who blends systems thinking, clean UI, and seamless
            interactions to craft experiences that feel effortless.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/portfolio">
              View portfolio
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Start a project
            </Link>
          </div>
          <div className={styles.badges}>
            <span className="pill">Cal Poly SLO 🐎</span>
            <span className="pill">Software Engineering Junior</span>
            <span className="pill">UI/UX + Fullstack</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className={styles.avatar}>
            <Image src="/images/headshot2.jpg" alt="Tristan Spear" fill sizes="100vw" priority />
          </div>
          <div className={styles.glow} aria-hidden />
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionHeader}>
          <div>
            <span className="eyebrow">Specialties</span>
            <h2 className="headline">What I design & build</h2>
            <p className="muted">
              From product strategy to polished interfaces, I obsess over details that make complex systems feel
              beautifully simple.
            </p>
          </div>
          <Link className="btn btn-ghost" href="/resume">
            View resume
          </Link>
        </div>
        <div className="grid">
          <div className="panel">
            <div className={styles.panelAccent} />
            <h3>Product Design</h3>
            <p>
              Research-led, minimal, and intentional UI systems. I pair clarity with subtle motion for interfaces that
              feel alive without being loud.
            </p>
            <div className="card-meta">
              <span className="pill">Design systems</span>
              <span className="pill">Prototyping</span>
            </div>
          </div>
          <div className="panel">
            <div className={styles.panelAccent} />
            <h3>Frontend Engineering</h3>
            <p>
              Modern React/Next.js experiences with strong accessibility, responsive layouts, and micro-interactions
              powered by clean, maintainable code.
            </p>
            <div className="card-meta">
              <span className="pill">Next.js</span>
              <span className="pill">TypeScript</span>
            </div>
          </div>
          <div className="panel">
            <div className={styles.panelAccent} />
            <h3>Systems Mindset</h3>
            <p>
              Collaborative, thoughtful delivery. I document decisions, design for iteration, and keep performance,
              SEO, and reliability top of mind.
            </p>
            <div className="card-meta">
              <span className="pill">Performance</span>
              <span className="pill">Accessibility</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionHeader}>
          <div>
            <span className="eyebrow">Recent highlights</span>
            <h2 className="headline">Projects that balance craft and impact</h2>
            <p className="muted">Curated work across portfolio, blog, and community contributions.</p>
          </div>
          <Link className="btn" href="/portfolio">
            Explore work
          </Link>
        </div>
        <div className={`${styles.highlightRow} grid`}>
          <div className={`${styles.highlightCard} panel`}>
            <div>
              <p className="muted">Portfolio</p>
              <h3>High-impact builds</h3>
              <p>Thoughtful interfaces for non-profits and teams that need clarity and velocity.</p>
            </div>
            <Link href="/portfolio" className={styles.linkArrow}>
              Dive in →
            </Link>
          </div>
          <div className={`${styles.highlightCard} panel`}>
            <div>
              <p className="muted">Blog</p>
              <h3>Notes on craft</h3>
              <p>Writing on design systems, motion, and engineering patterns that scale gracefully.</p>
            </div>
            <Link href="/blog" className={styles.linkArrow}>
              Read entries →
            </Link>
          </div>
          <div className={`${styles.highlightCard} panel`}>
            <div>
              <p className="muted">Collaboration</p>
              <h3>Let&apos;s build</h3>
              <p>Looking for a partner to ship a polished experience? I&apos;d love to hear from you.</p>
            </div>
            <Link href="/contact" className={styles.linkArrow}>
              Say hello →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
