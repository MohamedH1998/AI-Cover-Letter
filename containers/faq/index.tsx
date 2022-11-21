import React from 'react'
import Accordion from '../../components/accordion'

const FAQ = () => {
    const information: Accordion[] = [
      {title: 'How does an AI generated cover letter work?', description: 'You enter some information about yourself, including your name, experience, and the role you’re applying for and click Submit and the AI will generate a cover letter for you. If you do not like your cover letter, just give it another go!'},
      {title: 'Is the AI cover letter free?', description: 'The cover letter is currently free'},
      {title: 'Is my information going to be saved?', description: "Absolutely not, we do not retain any information that you submit"},
      {title: 'How can I get in touch?', description: 'You can get in touch by dropping me an email at info@momito.co.uk, or via my socials at the bottom of this page'}
  ]

  return (
   <div className="py-20">
      <h3 className="text-3xl font-secondary text-white text-center md:text-5xl md:py-4">Frequently asked<span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">questions</span></h3>

    <Accordion information={information}/>
   </div>
  )
}

export default FAQ