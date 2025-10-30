import React from 'react';

export default function Contact() {
    return (
        <main>
            <h1 className="page-title">Contact Me</h1>
            <form id="contact-form">
                <label>Name:</label>
                <input type="text" id="name" />
                <label>Email:</label>
                <input type="text" id="email" />
                <label>Message:</label>
                <textarea></textarea>
                <button>Send</button>
            </form>
        </main>
    );
}