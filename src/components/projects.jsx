"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS featuring smooth animations and modern design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/irfanjankhalil/my-portfolio",
    live: "https://irfanjan.netlify.app/",
    gradient: "from-blue-500 to-cyan-500",
  },
  
  {
    title: "EcoWealth Smart Navigator",
    description: "EcoWealth Smart Navigator is a Full-Stack Web application connecting ethical investors with ESG-compliant businesses through real-time scoring and impact tracking.",
    tech: ["Node.js","React.js", "MongoDB", "Express.js"],
    github: "https://github.com/irfanjankhalil/EcoWealthSmartNavigator",
    live: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Weather App",
    description: "A weather app that shows current weather and forecast using a live weather API.",
    tech: ["Next.Js", "Weather API", "Tailwind CSS"],
    github: "https://github.com/irfanjankhalil/weather-app",
    live: "https://liveweatherflow.netlify.app",
    gradient: "from-orange-500 to-yellow-500",
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="relative text-white py-20 px-6 overflow-hidden scroll-mt-20">

      {/* Background Blob */}
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">What I have built</p>
        <h2 className="text-4xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-gray-900/50 border border-gray-800 hover:border-blue-400/50 rounded-2xl overflow-hidden flex flex-col transition-all group"
          >

            {/* Card Top Gradient Bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow">

              {/* Project Title */}
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-all">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-800" />

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-all"
                >
                  {/* Github Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-all"
                >
                  {/* Live Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 0-.5.5h-10a.5.5 0 0 0-.5-.5v-10a.5.5 0 0 0 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                  Live Demo
                </motion.a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}