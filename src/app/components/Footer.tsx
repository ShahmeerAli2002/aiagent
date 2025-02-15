"use client"

import { motion } from "framer-motion"
import { Bot, Mail, Globe, Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (


    <footer className="bg-gradient-to-b from-black via-yellow-900 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <motion.div



          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-right mb-4 mr-24"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
              Get in Touch
            </span>


          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 text-right mb-12 mr-20"
          >
            Ready to transform your business with AI?
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Contact Information</h3>
              <div className="space-y-2">


                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2 text-pink-500" />
                  contact@agentiaworld.com



                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <Globe className="w-5 h-5 mr-2 text-purple-500" />
                  www.agentiaworld.com

                </motion.p>
                <div className="flex space-x-4 mt-4">



                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                    <Github className="w-6 h-6 text-pink-400 hover:text-white cursor-pointer" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                    <Linkedin className="w-6 h-6 text-purple-400 hover:text-white cursor-pointer" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                    <Twitter className="w-6 h-6 text-indigo-400 hover:text-white cursor-pointer" />
                  </motion.div>
                </div>
              </div>


            </motion.div>
            <motion.div variants={itemVariants}>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">


                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="First Name" 
                    className="bg-gray-800/50 rounded-md p-2 border border-transparent hover:border-indigo-500 transition-all" 
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-gray-800/50 rounded-md p-2 border border-transparent hover:border-indigo-500 transition-all" 
                  />
                </div>



                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-800/50 rounded-md p-2 w-full border border-transparent hover:border-indigo-500 transition-all" 
                />
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Your Message" 
                  rows={4} 
                  className="bg-gray-800/50 rounded-md p-2 w-full border border-transparent hover:border-indigo-500 transition-all"
                ></motion.textarea>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all"
                >
                  Send Message

                </motion.button>
              </form>

            </motion.div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div



          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-2 mb-4">


                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-8 h-8 text-pink-500" />
                </motion.div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">Agentia World</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Next-generation AI agents powering the future of enterprise intelligence.
              </p>
              <div className="flex space-x-4">



                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Github className="w-5 h-5 text-pink-400 hover:text-white cursor-pointer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Linkedin className="w-5 h-5 text-purple-400 hover:text-white cursor-pointer" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Twitter className="w-5 h-5 text-indigo-400 hover:text-white cursor-pointer" />
                </motion.div>
              </div>



            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Documentation", "API"].map((item) => (

                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </a>

                  </motion.li>
                ))}
              </ul>



            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Company</h3>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (

                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </a>

                  </motion.li>
                ))}
              </ul>



            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-indigo-400">Legal</h3>
              <ul className="space-y-2">
                {["Privacy", "Terms", "Security", "Compliance"].map((item) => (

                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </a>

                  </motion.li>
                ))}
              </ul>

            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center text-sm text-gray-400"
          >
            © 2025 Agentia World. Powered by Panaversity. All rights reserved.

          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

