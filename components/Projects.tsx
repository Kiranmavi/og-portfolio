import React, { useState } from 'react';
import { ExternalLink, Globe, Code2, Boxes } from 'lucide-react';
import Underline from './ui/Underline';
import RiseOnScroll from './ui/RiseOnScroll';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  link: string;
  category: 'Data' | 'Software' | 'other';
  technologies: {
    name: string;
    icon: string;
  }[],
  projimg: string;
}

const projects: Project[] = [
    {
    title: "Smart Mediacare",
    description: "MediCare is an AI-powered web application for seamless medical appointment booking, management, and healthcare analytics. It features role-based dashboards, an AI health assistant, and prescription OCR to enhance patient, doctor, and admin experiences.",
    link: "https://smart-medicare.netlify.app",
    category: 'Software',
    technologies: [
      { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
      { name: "TailwindCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" },
      { name: "JavaScript", icon: "/js.png" },
      { name: "Framer Motion", icon: "/framer-motion.svg" },
      { name: "Next.js", icon: "/nextjs-icon.svg" }
    ],
     projimg: "/medi1.png"
  },
  {
    title: "Trend Basket",
    description: "Developed a modern e-commerce website using Next.js and Tailwind CSS with responsive design, optimized performance, and secure checkout. Integrated product listings, cart management, and payment gateway for a seamless shopping experience.",
    link: "https://trend-basket-io.netlify.app",
    category: 'Software',
    technologies: [
      { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
      { name: "TailwindCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" },
      { name: "JavaScript", icon: "/js.png" },
      { name: "Framer Motion", icon: "/framer-motion.svg" },
      { name: "Next.js", icon: "/nextjs-icon.svg" }
    ],
    projimg: "/trend1.png"
  },
  {
    title: "Bug-Tracker",
    description: "Built an in-house Bug Tracker using Next.js and Tailwind CSS to log, assign, and track bugs efficiently. Included features like status updates, filtering by module, and role-based bug assignment.",
    link: "https://in-house-bug-tracker-io.netlify.app",
    category: 'Software',
    technologies: [
      { name: "TailwindCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" },
      { name: "JavaScript", icon: "/js.png" },
      { name: "Framer Motion", icon: "/framer-motion.svg" },
      { name: "Next.js", icon: "/nextjs-icon.svg" }
    ],
    projimg: "/bugCollage1.png"
  },
  {
    title: "Kiran's Portfolio",
    description: "An interactive visually detailed portfolio with framer motion, Three.js, and React for an immersive experience.",
    link: "https://kiran-balasubramanian-portfolio.netlify.app",
    category: 'Software',
    technologies: [
      { name: "Three.js", icon: "/three-js-icon.png" },
      { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
       { name: "Framer Motion", icon: "/framer-motion.svg" }
    ],
     projimg: "/proj-portfolio1.jpeg"
  },
  {
    title: "Data Analytics Pro",
    description: "A powerful web-based Excel file analyzer that provides instant data analysis and beautiful visualizations, directly in the browser.",
    link: "https://data-analyser-pro.netlify.app",
    category: 'Software',
    technologies: [
      { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" },
      { name: "TailwindCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" }
    ],
     projimg: "/proj-excel.jpeg"
  },
];

type Category = 'all' | 'Software';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const CategoryButton = ({ category, icon }: { category: Category; icon: React.ReactNode }) => (
    <button
      onClick={() => setSelectedCategory(category)}
      className={`flex items-center gap-2 px-4 py-2 rounded-3xl transition-colors 
        ${selectedCategory === category 
          ? ' bg-gray-100 text-violet-600 font-medium rounded-3xl  hover:bg-gray-100 ' 
          : ' text-gray-600 hover:bg-gray-100'}`}
    >
      {icon}
      <span className="capitalize">
        {category === 'all' ? 'All Projects' :  'Software'}
      </span>
    </button>
  );

  return (
    <div id="projects" className="min-h-screen  bg-white">
      {/* Header */}
      <header className="py-16 px-4 md:px-8 text-center">
        <RiseOnScroll delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-bold heading text-gray-900 mb-4 relative inline-block">
            Selected{" "}
            <span className="relative inline-block">
              <span className='relative z-10 text-purple'>Projects</span>
            </span>
          </h1>
        </RiseOnScroll>

        <RiseOnScroll delay={0.3}>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            A collection of projects that showcase my expertise in software development, data and AI. Each project represents a unique challenge and solution.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            <CategoryButton category="all" icon={<Globe className="w-5 h-5" />} />
            <CategoryButton category="Software" icon={<Boxes className="w-5 h-5" />} />
          </div>
        </RiseOnScroll>
      </header>

      {/* Projects Grid */}
      <main className="px-4 md:px-8 max-w-6xl mx-auto pb-16 md:mb-32 sm:mb-14" data-cursor="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {filteredProjects.map((project, index) => (
            <RiseOnScroll key={index} delay={0.2 + (index * 0.05)}>
              <div
                className={`bg-gray-50 rounded-3xl overflow-hidden shadow-sm transform transition-all duration-1000 ease-out
                  ${index % 2 === 1 ? 'md:translate-y-24' : ''}`}
              >
                {/* EVEN */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left Column: Image at top */}
                    <div className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 overflow-hidden">
                      <div className="aspect-[9:16] rounded-3xl bg-gray-100 transform transition-all duration-700 overflow-hidden">
                        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                            <Image 
                              src={project.projimg} 
                              alt={project.title}
                              width={800}
                              height={1200}
                              className="object-contain rounded-3xl transition-all duration-700 hover:scale-110 w-full h-full"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 text-center">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 text-center">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex text-center items-center justify-center flex-wrap gap-4 py-4">
                        {project.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center gap-2">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={40}
                              height={40}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                            <span className="text-sm sm:text-base text-gray-600">{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Project Link */}
                      <div className="flex justify-center pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-white inline-flex items-center gap-2 px-6 py-3 bg-violet-600 font-semibold text-white rounded-3xl hover:bg-white hover:text-violet-600 hover:border-violet-600 transition-colors"
                        >
                          View Live
                          <ExternalLink className="w-4 h-4 font-bold" />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Right Column: Content at top */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 text-center">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 text-center">
                        {project.description}
                      </p>

                      {/* Project Link */}
                      <div className="flex justify-center pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-white inline-flex items-center gap-2 px-6 py-3 bg-violet-600 font-semibold text-white rounded-3xl hover:bg-white hover:text-violet-600 hover:border-violet-600 transition-colors"
                        >
                          View Live
                          <ExternalLink className="w-4 h-4 font-bold" />
                        </a>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap text-center items-center justify-center gap-4 py-4">
                        {project.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center gap-2">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={40}
                              height={40}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                            <span className="text-sm sm:text-base text-gray-600">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image at bottom */}
                    <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 overflow-hidden">
                      <div className="aspect-[9:16] rounded-3xl bg-gray-100 transform transition-all duration-700 overflow-hidden">
                        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                            <Image 
                              src={project.projimg} 
                              alt={project.title}
                              width={800}
                              height={1200}
                              className="object-contain rounded-3xl transition-all duration-700 hover:scale-110 w-full h-full"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </RiseOnScroll>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;