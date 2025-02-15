"use client"

import { motion } from "framer-motion"
import { Globe, Server, Shield } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "Enterprise AI",
    description: "Custom AI agents designed for enterprise-scale operations and decision-making",
  },
  {
    icon: Server,
    title: "Neural Operations",
    description: "Automated workflow optimization through distributed neural networks",
  },
  {
    icon: Shield,
    title: "Secure Intelligence",
    description: "Privacy-first AI solutions with military-grade security protocols",
  },
]

const AISolutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <section className="bg-black text-white py-16 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-yellow-900 to-black animate-gradient-xy"></div>
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 animate-gradient">
            AI Solutions
          </span>
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="text-xl text-gray-400 text-center mb-12"
        >
          Transforming industries with intelligent agents
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateZ: 2,
                boxShadow: "0 0 20px rgba(123, 104, 238, 0.4)"
              }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 transform-gpu"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <solution.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                whileHover={{ scale: 1.05, color: "#a78bfa" }}
              >
                {solution.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400"
                whileHover={{ color: "#e2e8f0" }}
              >
                {solution.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AISolutions
