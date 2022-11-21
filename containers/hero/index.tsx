import { useRouter } from 'next/router'
import React, { MutableRefObject } from 'react'

interface Props {
  exampleRef: MutableRefObject<HTMLDivElement | null>
}

const Hero = ({exampleRef}: Props) => {
  const router = useRouter()


  const executeScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (!ref?.current) {
      return
    }
    document.body.style.position = "static"
    document.body.style.overflow = "unset"
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <main className="w-full flex justify-center flex-col items-center py-20">
    <h1
      className={`p-1 font-normal text-center text-4xl font-secondary  md:text-7xl`}
    >
      <span className="drop-shadow-mobile-hero">Make Your Dream</span><span className="block">Job A Reality</span>
    </h1>
    <p className="max-w-[250px] text-center py-6 md:max-w-[400px]">
    Find the perfect cover letter for your next job
    </p>  
    <div className="">
    <button onClick={() => router.push('/create')} className="py-2 mx-2 px-6 my-2 border-2 border-ice-cold-stare md:text-lg bg-ice-cold-stare text-black rounded-sm md:px-8" >Get started</button>
    <button onClick={() => executeScroll(exampleRef)} className="py-2 mx-2 px-6 my-2 border-2 md:text-lg border-white text-white rounded-sm md:px-8">See example</button>
    </div>
  </main>
  )
}

export default Hero