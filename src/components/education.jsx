"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institute: "SZABIST University Islamabad",
    duration: "2022 — 2026",
    cgpa: "3.03 / 4.0",
    showCgpa: true, 
    description: "Studied core principles of computer science, including programming, data structures, algorithms, databases, and software engineering. Gained foundational knowledge in web development, problem solving, and system design, while developing analytical thinking and practical skills through academic projects and coursework.",
    gradient: "from-blue-500 to-cyan-500",
    icon: "🎓",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institute: "Public Schools and Colleges, Juital, Gilgit",
    duration: "2019 — 2021",
    cgpa: "",
    showCgpa: false, 
    description: "Studied fundamental concepts of pre-engineering, including mathematics, physics, and chemistry. Developed strong analytical and problem-solving skills, with a focus on logical reasoning and scientific principles, building a solid foundation for further studies in engineering and technology fields.",
    gradient: "from-purple-500 to-pink-500",
    icon: "🏫",
  },
]

export default function Education() {
  return (
    <section id="education" className="relative text-white py-20 px-6 overflow-hidden scroll-mt-20">

      {/* Background Blob */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">My Academic Background</p>
        <h2 className="text-4xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
      </motion.div>

      {/* Education Timeline */}
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-900/50 border border-gray-800 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all"
          >

            {/* Top Gradient Bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${edu.gradient}`} />

            {/* Card Content */}
            <div className="p-6 flex gap-5">

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                {edu.icon}
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 flex-grow">

                {/* Degree and Duration */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-blue-400 text-sm font-medium bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.duration}
                  </span>
                </div>

                {/* Institute */}
                <p className="text-gray-300 font-medium">{edu.institute}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>

                {/* CGPA Badge */}
                {edu.showCgpa && (
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-400 text-sm">CGPA / Grade:</span>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                    {edu.cgpa}
                    </span>
                </div>
                )}

              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}