import React from 'react'
import Hero from './components/hero'
import AISolutions from './components/AISolutions'
import Features from './components/Features'
import Pricing from './components/Pricing'
import AIFeatures from './components/secetion'
import Fail from './components/fail'

const page = () => {
  return (
    <div>
      <Hero/>
      <AIFeatures/>
      <Fail/>
      <Features/>
      <AISolutions/>
      <Pricing/>
    </div>
  )
}

export default page
