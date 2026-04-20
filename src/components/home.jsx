"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4 overflow-hidden">

      {/* Background Gradient Blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6"
      >
        <div className="w-50 h-50 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
          <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="w-full h-full rounded-full object-cover"
          priority
/>
        </div>
        {/* Online indicator */}
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-950" />
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-blue-400 font-medium mb-2 tracking-widest uppercase text-sm"
      >
        Welcome to my portfolio
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Irfan Jan
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl text-gray-400 mb-6"
      >
        Frontend Developer
      </motion.p>

      {/* Short Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-gray-400 max-w-xl mb-10 leading-relaxed"
      >
        I build beautiful, responsive websites and love turning ideas into
        reality through clean code and creative design.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-4"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/25 transition-all"
        >
          View My Work
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-blue-400/50 hover:border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full font-medium transition-all"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent" />
        </motion.div>
      </motion.div>

    </section>
  )
}