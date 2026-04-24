"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
  const sections = ["home", "about", "education", "projects", "skills","experience", "contact"]

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    { threshold: 0.4 }
  )

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [])

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center w-full max-w-6xl justify-between px-8 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-md border-gray-700 shadow-lg shadow-black/20"
            : "bg-gray-900/60 backdrop-blur-md border-gray-800"
        }`}
      >

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Irfan Jan
        </motion.a>

        {/* Nav Links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-1">
  {["Home", "About","Education", "Projects", "Skills","Experience", "Contact"].map((item, index) => {
    const isActive = activeSection === item.toLowerCase()
    return (
      <motion.li
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <a
          href={`#${item.toLowerCase()}`}
          className={`text-lg px-4 py-2 rounded-full transition-all ${
            isActive
              ? "text-white bg-blue-500/20 border border-blue-400/50"
              : "text-gray-300 hover:text-white hover:bg-white/10"
          }`}
        >
          {item}
        </a>
      </motion.li>
    )
  })}
</ul>

        {/* Download CV — hidden on mobile */}
        <motion.a
          href="/cv.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-5 py-2 rounded-full font-medium shadow-lg shadow-blue-500/25 transition-all"
        >
          Download CV
        </motion.a>

        {/* Hamburger Button — visible on mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white"
          />
        </button>

      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-4 right-4 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {/* Mobile Nav Links */}
            {["Home", "About","Education", "Projects", "Skills","Experience", "Contact"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-blue-400 transition-all py-2 border-b border-gray-800 last:border-none"
              >
                {item}
              </motion.a>
            ))}

            {/* Mobile Download CV */}
            <motion.a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full font-medium mt-2"
            >
              Download CV
            </motion.a>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}