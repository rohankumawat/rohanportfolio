import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'More about me, my journey and my work.',
};

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me in 10 Seconds ✨
      </h1>
      <p className="mb-4">
        {`I'm a Data Analyst, Software Developer, and AI Engineer. (And a coffee-connoisseur ☕️)`}
        <br />
        <br />
        {`I'm passionate about building software and AI solutions that solve real-world problems.`} 
        <br />
        <br />
        {`I'm currently working on a few projects that I'm excited to share with you soon!`}
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me in 1 Minute 🚀
      </h1>
      <p className="mb-4">
        {`I’m a dedicated Data Analyst, Software Developer, and AI Engineer with a passion for building innovative solutions that address real-world challenges. With a strong foundation in data science and software engineering, I specialize in developing robust AI models and scalable software systems that drive meaningful results for businesses.`}
        <br />
        <br />
        {`Currently, I'm engaged in several exciting projects that blend my expertise in artificial intelligence and software development. My work is centered around creating AI-driven tools and platforms that enhance decision-making, optimize processes, and provide strategic insights.`}
        <br /> 
        <br />
        {`Beyond my professional life, I’m also a coffee connoisseur ☕️, always exploring new flavors and brewing techniques. I'm a football, F1, and mostly a FC Barcelona fan🔴🔵. This unique blend of technical precision and creative exploration shapes my approach to problem-solving and innovation.`}
        <br />
        <br />
        {`I’m always open to discussing new projects, collaborations, and opportunities where my skills can contribute to impactful solutions. Stay tuned for updates on my latest work, and feel free to connect if you’d like to learn more!`}
      </p>
    </section>
  );
}