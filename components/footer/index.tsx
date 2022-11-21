import React from 'react'
import { BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="py-12 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
        <i className="md:text-3xl text-xl">
        <a
          href="https://www.linkedin.com/in/mohamedahassan1998/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin/>
          </a></i>
        <i className="md:text-3xl text-xl">
        <a
          href="https://twitter.com/momito8_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter/>
          </a></i>
        </div>
        <small className="pt-3 md:pt-4">
        Built and designed by {" "}
        <a
          href="https://momito.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          Momito
        </a></small>
        <small className="py-2 md:py-2">Copyright @ 2022 COVERED</small>


    </footer>
  )
}

export default Footer