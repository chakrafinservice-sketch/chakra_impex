import React from 'react'
import HeroSection from '@/components/HomePageSections/HeroSection'
import { StatsSection } from '@/components/HomePageSections/StatsSection'
import { ClientsCarousel } from '@/components/HomePageSections/ClientsCarousel'
import AboutSection from '@/components/HomePageSections/AboutSection'
import WhyDifferentSection from '@/components/HomePageSections/WhyDifferentSection'
import ProcessSection from '@/components/HomePageSections/ProcessSection'
import ServicesSection from '@/components/HomePageSections/ServicesSection'
import ProductsSections from '@/components/HomePageSections/ProductsSections'
import ClientsTestimonials from '@/components/HomePageSections/ClientsTestimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <AboutSection/>
      <WhyDifferentSection/>
      <ProcessSection/>
      <ServicesSection/>
      <ProductsSections/>
      {/* <ClientsCarousel/> */}
      {/* <ClientsTestimonials/> */}
    </div>
  )
}

export default Home
