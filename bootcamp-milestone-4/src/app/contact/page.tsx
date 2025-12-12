"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <main>
      <h1 className="page-title">Contact Me</h1>
      <form id="contact-form" ref={formRef} onSubmit={sendMail}>
        <label>Name:</label>
        <input type="text" name="from_name" required />
        <label>Email:</label>
        <input type="email" name="reply_to" required />
        <label>Subject:</label>
        <input type="text" name="title" required />
        <label>Message:</label>
        <textarea name="message" style={{ height: "150px"}}required />
        <button
          type="submit"
          style={{
            color: "white",
            backgroundColor: "rgb(129, 225, 225)",
            borderRadius: "5px",
            padding: "15px",
            width: "100%",
            fontSize: "1.4rem",
            fontWeight: "bolder"
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
