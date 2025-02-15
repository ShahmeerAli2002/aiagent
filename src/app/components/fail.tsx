"use client"

import { motion } from "framer-motion"

const Fail= () => {
  return (
    <motion.section 
      className="bg-black text-white py-20 relative overflow-hidden"
      initial={{ backgroundColor: "#000000" }}
      animate={{ 
        backgroundColor: ["#000000", "#000033", "#000066", "#000033", "#000000"],
        boxShadow: [
          "0 0 50px rgba(0, 0, 255, 0.2)",
          "0 0 100px rgba(0, 0, 255, 0.4)",
          "0 0 150px rgba(0, 0, 255, 0.6)",
          "0 0 100px rgba(0, 0, 255, 0.4)",
          "0 0 50px rgba(0, 0, 255, 0.2)"
        ]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
            High AI Capabilities
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8"
        >
          Powered by next-generation artificial intelligence
        </motion.p>
      </div>
    </motion.section>
  )
}

export default Fail
