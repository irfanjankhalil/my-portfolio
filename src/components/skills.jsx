"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    gradient: "from-blue-500 to-cyan-500",
    icon: "🎨",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    gradient: "from-purple-500 to-pink-500",
    icon: "⚙️",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Tools",
    gradient: "from-orange-500 to-yellow-500",
    icon: "🛠️",
    items: ["Git", "GitHub", "VS Code", "Canva"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative text-white py-20 px-6 overflow-hidden scroll-mt-20">

      {/* Background Blob */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">What I work with</p>
        <h2 className="text-4xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-900/50 border border-gray-800 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all"
          >

            {/* Card Top Gradient Bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${skill.gradient}`} />

            {/* Card Content */}
            <div className="p-6">

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.gradient} flex items-center justify-center text-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-full border border-gray-700 hover:border-blue-400/50 cursor-default transition-all"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-8 mt-16 max-w-3xl mx-auto"
      >
        {[
          { number: "10+", label: "Technologies" },
          { number: "5+", label: "Projects Built" },
          { number: "1+", label: "Years Experience" },
          { number: "100%", label: "Passion" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center bg-gray-900/50 border border-gray-800 rounded-2xl px-8 py-6 min-w-32"
          >
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {stat.number}
            </p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}