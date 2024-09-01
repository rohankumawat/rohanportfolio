"use client"; // Mark as a client component

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null); // To display feedback to the user

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sending the email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Replace with your EmailJS Template ID
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Replace with your EmailJS Public Key (formerly user ID)
      );

      if (result.text === 'OK') {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('An error occurred. Please try again.');
    }

    setFormData({ name: '', email: '', message: '' }); // Reset the form after submission
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg dark:bg-neutral-900">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter text-center">
        Get in Touch 📨
      </h1>
      <p className="mb-8 text-center">
        Got a burning question about my latest project, an idea for a wild collaboration, or just want to chat about football (or coffee brewing techniques)? ☕️
        <br />
        I'm always open to new conversations and exciting opportunities! Feel free to reach out to me via email, or{' '}
        <a href="https://www.linkedin.com/in/rohankumawat06/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          LinkedIn
        </a>
        , and I'll get back to you as soon as I can.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>} {/* Display status message */}
    </section>
  );
}
