import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: 'Contact me for collaborations, questions, or just to say hello!',
};

export default function Contact() {
return (
    <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    Get in Touch 📨
            </h1>
        <p className="mb-4">
            {`Got a burning question about my latest project, an idea for a wild collaboration, or just want to chat about the meaning of life (or coffee brewing techniques)? ☕️`}
            <br />
            <br />
            {`I'm always open to new conversations and exciting opportunities! Feel free to reach out to me via email, or `}
            <a href="https://www.linkedin.com/in/rohankumawat06/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {`, and I'll get back to you as soon as I can.`}
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
    </section>
);
}
