import Link from 'next/link';

export default function Resume() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg dark:bg-neutral-900">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter text-center">
        My Resume 📄
        </h1>

      {/* Embed the resume file or link to it */}
      
      <iframe
        src="/software_engineering_resume.pdf#zoom=150"
        className="w-[540px] h-[700px] border-2 border-gray-300"
        title="Resume PDF"
      ></iframe>
      
      <br /> 

      {/* Download Button */}
      <a
        href="/Resume.pdf"
        download="Rohan_Kumawat_Resume.pdf"
        className="block w-full text-center py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
      >
        Download Resume 📥
      </a>
      {/* Contact Button */}
      <Link href="/contact">
        {/* Remove <a> tag */}
        <div className="block w-full text-center py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Contact Me
        </div>
      </Link>
    </section>
  );
}