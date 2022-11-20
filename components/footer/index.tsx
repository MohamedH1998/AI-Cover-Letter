import React from 'react'
import { BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="py-12 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
        <i className="md:text-3xl"><BsLinkedin/></i>
        <i className="md:text-3xl"><BsTwitter/></i>
        </div>
        <small className="py-2 md:py-4">Copyright @ 2022 COVERED</small>

    </footer>
  )
}

export default Footer