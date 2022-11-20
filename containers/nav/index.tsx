import React from 'react'
import Button from '../../components/button'

const Nav = () => {
   return (<nav className="py-6  w-screen">
      <div className="flex justify-between items-center px-10">
      <span className="font-primary text-xl">COVERED</span>
      <Button className="py-2 px-4 md:px-10  my-2 text-center bg-ice-cold-stare w-content-fit text-black"  content="Create"/>
      </div>
  </nav>
)
}

export default Nav