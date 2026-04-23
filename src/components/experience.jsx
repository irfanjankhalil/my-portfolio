"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    type: "experience",
    title: "Intern Frontend Developer",
    organization: "CORVIT Systems, Rawalpindi",
    duration: "March — May 2024",
    description: "Worked on building responsive web interfaces using HTML, CSS and JavaScript. Implemented modern frameworks and libraries",
    document: "/certificates/internship letter.pdf",           // add link to work letter if you have one
    gradient: "from-blue-500 to-cyan-500",
    icon: "💼",
  }
]

const certifications = [
  {
    type: "certification",
    title: "Web Development Certification",
    organization: "uConnect and NAVTTC",
    duration: "Jan — April 2021",
    description: "Completed a comprehensive Web Development course covering HTML, CSS, JavaScript, building Responsive websites.",
    document: "/certificates/web dev certificate.pdf",   // put your certificate in public/certificates/
    gradient: "from-purple-500 to-pink-500",
    icon: "🏆",
  }
]

export default function Experience() {
  return (
    <section id="experience" className="relative text-white py-20 px-6 overflow-hidden scroll-mt-20">

      {/* Background Blob */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">My Journey</p>
        <h2 className="text-4xl font-bold">
          Experience &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left — Work Experience */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-6 flex items-center gap-2"
          >
            <span className="text-2xl">💼</span>
            Work Experience
          </motion.h3>

          <div className="flex flex-col gap-6">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gray-900/50 border border-gray-800 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all"
              >

                {/* Top Gradient Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.gradient}`} />

                <div className="p-5 flex flex-col gap-3">

                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-blue-400 text-sm">{item.organization}</p>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <span className="text-xs font-medium text-gray-400 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full w-fit">
                    📅 {item.duration}
                  </span>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

                  {/* View Letter Button */}
                  {item.document ? (
                    <motion.a
                      href={item.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 text-sm bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full w-fit font-medium shadow-lg shadow-blue-500/25 transition-all"
                    >
                      📄 View Work Letter
                    </motion.a>
                  ) : (
                    <span className="text-xs text-gray-600 italic">
                      No document attached
                    </span>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold mb-6 flex items-center gap-2"
          >
            <span className="text-2xl">🏆</span>
            Certifications
          </motion.h3>

          <div className="flex flex-col gap-6">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gray-900/50 border border-gray-800 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all"
              >

                {/* Top Gradient Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.gradient}`} />

                <div className="p-5 flex flex-col gap-3">

                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-blue-400 text-sm">{item.organization}</p>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <span className="text-xs font-medium text-gray-400 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full w-fit">
                    📅 {item.duration}
                  </span>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

                  {/* View Certificate Button */}
                  {item.document ? (
                    <motion.a
                      href={item.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full w-fit font-medium shadow-lg shadow-purple-500/25 transition-all"
                    >
                      🏅 View Certificate
                    </motion.a>
                  ) : (
                    <span className="text-xs text-gray-600 italic">
                      No document attached
                    </span>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}