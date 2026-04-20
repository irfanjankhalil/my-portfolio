"use client"

import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("idle") // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all fields")
    return
  }

  setStatus("loading")

  try {
    await emailjs.send(
      "service_mvq45s6",      // replace with your Service ID
      "template_7okujnn",     // replace with your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "-C0Lt1PAeCmje3meS"       // replace with your Public Key
    )

    setStatus("success")
    setFormData({ name: "", email: "", message: "" })

  } catch (error) {
    console.error(error)
    setStatus("error")
  }
}

  return (
    <section id="contact" className="relative text-white py-20 px-6 overflow-hidden scroll-mt-20">

      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">Get in touch</p>
        <h2 className="text-4xl font-bold">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">

        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 flex-1"
        >
          <h3 className="text-2xl font-semibold">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Talk
            </span>
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I am currently open for freelance work and full time positions.
            If you have a project in mind or just want to say hi, my inbox
            is always open!
          </p>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {[
              { label: "Email", value: "irfanjankhalil1@gmail.com", icon: "📧" },
              { label: "Location", value: "Pakistan", icon: "📍" },
              { label: "Availability", value: "Open to work", icon: "💼" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 hover:border-blue-400/50 rounded-xl px-4 py-3 transition-all"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-blue-400 text-xs uppercase tracking-wider font-medium">{item.label}</p>
                  <p className="text-gray-300 text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-gray-400 text-sm mb-3">Find me on</p>
            <div className="flex gap-3">
              {[
                { label: "GitHub", href: "https://github.com/irfanjankhalil", gradient: "from-gray-700 to-gray-600" },
                { label: "LinkedIn", href: "https://linkedin.com/in/irfan-jan-669426232", gradient: "from-blue-700 to-blue-600" },
                // { label: "Twitter", href: "https://twitter.com/irfanjankhalil", gradient: "from-sky-700 to-sky-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${social.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium transition-all`}
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 flex-1 bg-gray-900/50 border border-gray-800 rounded-2xl p-8"
        >

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <label className="text-gray-300 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-600"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <label className="text-gray-300 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@email.com"
              className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-600"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col gap-2"
          >
            <label className="text-gray-300 text-sm font-medium">Your Message</label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none placeholder:text-gray-600"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            onClick={handleSubmit}
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            className={`px-6 py-3 rounded-xl font-medium shadow-lg transition-all mt-2 ${
              status === "loading"
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : status === "success"
                ? "bg-green-500 text-white shadow-green-500/25"
                : status === "error"
                ? "bg-red-500 text-white shadow-red-500/25"
                : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-blue-500/25"
            }`}
          >
            {status === "loading"
              ? "Sending..."
              : status === "success"
              ? "Message Sent! ✅"
              : status === "error"
              ? "Failed. Try Again ❌"
              : "Send Message 🚀"}
          </motion.button>

        </motion.div>
      </div>

    </section>
  )
}