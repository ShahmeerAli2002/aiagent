"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Bot } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$999",
    period: "/month",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$Custom",
    period: "",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
    highlighted: false,
  },
]

const Pricing = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            
            'linear-gradient(to right, #000000, #8B4513, #000000)',
          ],        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10 flex items-center">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <Bot className="w-16 h-16 mb-4 text-purple-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
              Choose Your Plan
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Scale your AI capabilities with our flexible pricing
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg p-6 ${plan.highlighted ? "bg-purple-900" : "bg-gray-900"}`}
              >
                <Bot className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-2xl font-semibold mb-4 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <Check className="w-5 h-5 mr-2 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-md transition-colors flex items-center justify-center ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-1/3 pl-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/3ZSH.gif"
              alt="Pricing Illustration"
              width={400}
              height={600}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
