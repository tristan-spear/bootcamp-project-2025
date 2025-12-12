"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import styles from "./navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.shell}>
      <div className={styles.brand}>
        <div className={styles.logoMark} aria-hidden />
        <div>
          <p className={styles.title}>Tristan Spear</p>
          <span className={styles.subtitle}>Software Engineer</span>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Primary">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.actions}>
        <ThemeToggle />
        <Link className={styles.cta} href="/contact">
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
