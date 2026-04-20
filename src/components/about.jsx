"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative text-white py-20 px-6 overflow-hidden scroll-mt-20">

      {/* Background Blob */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">Get to know me</p>
        <h2 className="text-4xl font-bold">
          About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex-shrink-0"
        >
          {/* Gradient border effect */}
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
            <Image
              src="/profile2.jpg"
              alt="About"
              width={256}
              height={256}
              className="w-full h-full rounded-2xl object-cover"
              priority
            />
          </div>
          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-center shadow-xl"
          >
            <p className="text-2xl font-bold text-blue-400">1+</p>
            <p className="text-xs text-gray-400">Years Experience</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            I'm a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            I am a passionate developer based in Pakistan. I love building
            modern and responsive websites that provide great user experiences.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, reading,
            and improving my skills every day.
          </p>

          {/* Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 text-sm mb-8"
          >
            {[
              { label: "Name", value: "Irfan Jan" },
              { label: "Email", value: "irfanjankhalil1@gmail.com" },
              { label: "Location", value: "Pakistan" },
              { label: "Available", value: "For Hire" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3"
              >
                <p className="text-blue-400 font-medium text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-gray-300">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/25 transition-all"
          >
            Download CV
          </motion.a>

        </motion.div>
      </div>

    </section>
  )
}