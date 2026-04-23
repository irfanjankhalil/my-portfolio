"use client"

import { motion } from "framer-motion"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/irfanjankhalil" },
  { label: "LinkedIn", href: "https://linkedin.com/in/irfan-jan-669426232" },
  // { label: "Twitter", href: "#" },
]

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="relative text-white border-t border-gray-800 overflow-hidden">

      {/* Background Blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Irfan Jan
            </span>
            <p className="text-gray-400 text-sm">
              Building things for the web.
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-blue-500 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all"
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-medium">Irfan Jan</span>
            . All rights reserved.
          </p>

          {/* Made with */}
          <p className="flex items-center gap-1">
            Built with
            <span className="text-blue-400 font-medium mx-1">Next.js</span>
            <span className="text-blue-400 font-medium mx-1">Tailwind CSS</span>
            &
            <span className="text-blue-400 font-medium mx-1">Framer Motion</span>
            
          </p>

        </motion.div>

      </div>
    </footer>
  )
}