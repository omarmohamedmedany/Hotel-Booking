import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testiominal from '../components/Testiominal'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testiominal/>
      <Newsletter/>
    </div>
  )
}

export default Home
