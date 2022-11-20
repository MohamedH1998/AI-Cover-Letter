import Image from 'next/image'
import React, { ReactElement } from 'react'

interface CardProps {
    text: string
step: string
  
}

const Card = ({text, step}:CardProps): ReactElement => {
  return (
    <div className="flex justify-between items-start mx-8 p-3 rounded bg-[#1C1C1F] drop-shadow-vibe mb-8 md:min-h-[220px]">
    <div className="flex flex-col pb-4">
    <p className="py-4 text-lg font-semibold"># {step}</p>
    <p className="w-[230px]">{text}</p>
    </div>
  </div>
  )
}

export default Card