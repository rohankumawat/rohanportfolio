// app/projects/page.js

import Image from 'next/image';
import Link from 'next/link';

// Example projects data
const projects = [
  {
    id: "1",
    title: "Spotify Songs Dashboard",
    description: "An interactive web app to analyze Spotify songs data using Streamlit. Get insights into your favorite songs, artists, and popularity.",
    image: "/images/projects/spotifyProject.png",
    demoLink: "https://streamspotify.streamlit.app/",
    readMoreLink: "https://github.com/rohankumawat/spotifyStreamlit",
  },
  {
    id: "2",
    title: "AI-Powered Credit Card Fraud Detection System",
    description: "A Credit Card Fraud Detection System that utilizes machine learning techniques to detect fraudulent transactions.",
    image: "/images/projects/creditCardFraud.png",
    demoLink: "https://github.com/rohankumawat/creditCardFraudDetection",
    readMoreLink: "https://github.com/rohankumawat/creditCardFraudDetection",
  }
  // More projects...
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Things I've Built: Showcasing Innovation, Creativity, and Code 🚀
      </h2>
      <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
      Welcome to my projects gallery! Here, you’ll find a collection of my work that blends creativity, technical prowess, and a bit of fun. 
      From innovative AI solutions to full-stack web applications, these projects are more than just code—they represent my journey as a developer and my passion for solving real-world problems.
      <br/>
      Feel free to explore each project to see how they were built, the challenges faced, and the solutions created. 
      Whether you're here to learn, collaborate, or just browse, I hope these projects inspire you as much as they inspired me while building them. Dive in, tinker with the code, and let's build something amazing together! ✨
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden"
          >
            {/* Card Image */}
            <div className="p-4">
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg"
                width={500}
                height={300}
              />
            </div>
            
            {/* Card Content */}
            <div className="px-4 py-2">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <Link
                  href={project.demoLink}
                  className="bg-blue-600 text-sm text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.readMoreLink}
                  className="bg-gray-200 text-sm text-gray-700 py-2 px-4 rounded-md shadow-md hover:bg-gray-300 transition dark:bg-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
