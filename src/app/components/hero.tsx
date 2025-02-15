"use client";

import { motion } from "framer-motion";

const Hero = (): React.JSX.Element => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-32 text-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle, rgba(45,10,100,0.5) 0%, rgba(0,0,0,0.8) 100%)",
              "radial-gradient(circle, rgba(100,10,45,0.5) 0%, rgba(0,0,0,0.8) 100%)",
              "radial-gradient(circle, rgba(10,45,100,0.5) 0%, rgba(0,0,0,0.8) 100%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-white font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(139,92,246,0.5)]"
      >
        WELCOME TO THE FUTURE
      </motion.div>

      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-6 sm:mt-8 mb-3 sm:mb-4"
      >
        <span className="text-[clamp(2rem,6vw,5rem)] font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Next Generation
        </span>
        <br />
        <span className="text-[clamp(1.5rem,4vw,4rem)] font-extrabold text-white">
          AI Solutions
        </span>
      </motion.h1>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 text-[clamp(1rem,2vw,1.5rem)] text-gray-300 font-medium max-w-3xl mx-auto mt-4 sm:mt-6 px-4"
      >
        Revolutionizing industries with cutting-edge artificial intelligence
      </motion.p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg sm:rounded-xl text-white font-bold text-base sm:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
        >
          Get Started Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg sm:rounded-xl text-white font-bold text-base sm:text-lg border border-gray-700 shadow-lg hover:shadow-gray-700/30 transition-all duration-300"
        >
          Explore Features
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-20 w-3 sm:w-4 h-3 sm:h-4 bg-blue-500 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-40 right-32 w-4 sm:w-6 h-4 sm:h-6 bg-purple-500 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 right-20 w-2 sm:w-3 h-2 sm:h-3 bg-pink-500 rounded-full blur-sm"
      />
    </section>
  );
};

export default Hero;