"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./page.module.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  async function sendMail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY }
      )
      .then(() => {
        console.log("SUCCESS!");
        alert("Message sent!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send. Please try again.");
      });
  }

  return (
    <div className="page">
      <header className="section">
        <span className="eyebrow">Contact</span>
        <h1 className="headline">Let&apos;s build something elegant together</h1>
        <p className="muted">
          Whether you need a fresh product experience or a design system tune-up, I&apos;m excited to collaborate.
          Drop a note and I&apos;ll respond quickly.
        </p>
      </header>
      <div className={styles.shell}>
        <form id="contact-form" ref={formRef} onSubmit={sendMail} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="from_name">Name</label>
              <input className="input" id="from_name" type="text" name="from_name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="reply_to">Email</label>
              <input className="input" id="reply_to" type="email" name="reply_to" required />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="title">Subject</label>
            <input className="input" id="title" type="text" name="title" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn">
            Send message
          </button>
        </form>
        <div className={styles.info}>
          <div className="panel">
            <p className="muted">Response time</p>
            <h3>Usually within 24 hours</h3>
          </div>
          <div className="panel">
            <p className="muted">Based in</p>
            <h3>San Luis Obispo, CA</h3>
          </div>
          <div className="panel">
            <p className="muted">Focus</p>
            <h3>UI/UX, Frontend, Design Systems</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
