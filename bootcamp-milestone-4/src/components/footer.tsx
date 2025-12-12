import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gradient} aria-hidden />
      <div className={styles.content}>
        <p>© 2025 Tristan Spear • Crafted for clarity and impact.</p>
        <span className={styles.muted}>Building thoughtful products that feel futuristic and human.</span>
      </div>
    </footer>
  );
}
