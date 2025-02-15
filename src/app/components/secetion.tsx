"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Code, Globe, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
    details:
      "Our neural networks utilize state-of-the-art architectures like transformers and graph neural networks to tackle the most challenging AI problems.",
    showcase: "Experience real-time image classification powered by our neural networks.",
    gradient: "from-blue-600 to-cyan-400",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
    details:
      "We employ cutting-edge deep learning techniques including transfer learning, few-shot learning, and self-supervised learning to push the boundaries of AI capabilities.",
    showcase: "Try our sentiment analysis tool that uses deep learning to understand text emotions.",
    gradient: "from-purple-600 to-pink-400",
  },
  {
    icon: Code,
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
    details:
      "Our advanced machine learning algorithms cover a wide range of techniques from ensemble methods to reinforcement learning, optimized for performance and efficiency.",
    showcase: "Explore our predictive analytics dashboard powered by advanced ML algorithms.",
    gradient: "from-orange-600 to-red-400",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
    details:
      "Our global infrastructure allows for distributed training and inference, enabling AI models to scale to billions of parameters and process massive datasets.",
    showcase: "Visualize our global AI processing network in real-time.",
    gradient: "from-green-600 to-emerald-400",
  },
];

export default function AIFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const [showcaseIndex, setShowcaseIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "linear-gradient(to right, #4c1d95, #2563eb)",
              "linear-gradient(to right, #7c3aed, #db2777)",
              "linear-gradient(to right, #4c1d95, #2563eb)",
            ],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30 blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-8"
        >
          Powered by Advanced AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 text-center mb-16 text-xl font-semibold"
        >
          Revolutionizing technology with cutting-edge neural architectures
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 cursor-pointer border border-gray-800 hover:border-gray-700"
              onClick={() => toggleExpand(index)}
            >
              <motion.div
                className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <p className="text-gray-300 text-sm mt-4 leading-relaxed">{feature.details}</p>
                    <Button
                      variant="ghost"
                      className={`mt-6 bg-gradient-to-r ${feature.gradient} text-white hover:opacity-90 transition-all duration-300`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowcaseIndex(index);
                      }}
                    >
                      Try it out <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="mt-4 flex justify-center"
              >
                {expandedIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-purple-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-400" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}