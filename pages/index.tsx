import type { NextPage } from 'next'
import { useRef } from 'react'
import About from '../components/about'
import Footer from '../components/footer'
import FAQ from '../containers/faq'
import Hero from '../containers/hero'
import ImageSections from '../containers/image-sections'
import Nav from '../containers/nav'

const Home: NextPage = () => {
  const exampleRef = useRef<null | HTMLDivElement>(null)


  return (
  <div className="bg-black-metal h-full text-smart-white w-screen">
  <Nav/>
  <Hero exampleRef={exampleRef}/>
  <About/>
  <ImageSections exampleRef={exampleRef}/>
  <FAQ/>
  <Footer/>
</div>
  )
}

export default Home
