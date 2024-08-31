import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import first from 'public/images/home/first.jpeg'

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Hi, I'm Rohan 👋</h1>
          <p className="mb-4 text-xl font-light">
            I’m a software developer, AI Engineer, Machine Learning Engineer, and Data Analyst.
          </p>
          <p className="mb-8 text-md">
            I love creating innovative software solutions and building AI models that solve real-world problems. Join me on this journey as I explore new technologies, develop exciting projects, and share my experiences along the way. 🚀
          </p>
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

      {/* Blog Posts Section */}
      <div className="my-16">
        <BlogPosts />
      </div>
    </section>
  )
}
