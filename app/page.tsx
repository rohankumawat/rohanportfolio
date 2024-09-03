import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import first from 'public/images/home/first.jpeg'
import React from 'react';
import TypingEffect from '../app/components/typingEffect';

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Hi, I'm Rohan 👋</h1>
          <TypingEffect />
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <p className="mb-8 text-md">
            I love creating innovative software solutions and building AI models that solve real-world problems. 
            <br />
            <br />
            Join me on this journey as I explore new technologies, develop exciting projects, and share my experiences along the way. 🚀
          </p>
          {/* Social Links Section */}
          <div className="flex space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/rohankumawat06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/rohankumawat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://medium.com/@kumawatrohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fab fa-medium fa-2x"></i>
            </a>
          </div>
        </div>
          {/* Right Column (Image) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={first} // Replace with your actual image path
            alt="Rohan - Uni of Glasgow"
            className="rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Technologies I Work On Section */}
      <div className="my-16">
        <h1 className="mb-8 text-4xl font-semibold tracking-tighter">Technologies I Work On 💻</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Programming Languages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programming Languages</h3>
            <div className="flex items-center gap-4 text-5xl">
              <i className="devicon-python-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-javascript-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-cplusplus-plain colored hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>

          {/* Database Systems */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Database Systems</h3>
            <div className="flex items-center gap-4 text-5xl">
              <i className="devicon-mongodb-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-mysql-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-postgresql-plain colored hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>

          {/* DevOps and Cloud Platforms */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DevOps and Cloud Platforms</h3>
            <div className="flex items-center gap-4 text-5xl">
              <i className="devicon-docker-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-kubernetes-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-amazonwebservices-plain colored hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>

          {/* Tools and Miscellaneous */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools and Miscellaneous</h3>
            <div className="flex items-center gap-4 text-5xl">
              <i className="devicon-git-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-github-original colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-visualstudio-plain colored hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>

          {/* Machine Learning and AI */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Machine Learning and AI</h3>
            <div className="flex items-center gap-4 text-5xl">
              <i className="devicon-tensorflow-original colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-pytorch-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-jupyter-plain colored hover:scale-110 transition-transform duration-300"></i>
              <i className="devicon-streamlit-plain colored hover:scale-110 transition-transform duration-300"></i>
            </div>
          </div>

        </div>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Blog Posts Section */}
      <div className="my-16">
        <BlogPosts />
      </div>
    </section>
  )
}
