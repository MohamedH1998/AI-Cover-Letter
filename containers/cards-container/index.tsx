import React, { Ref } from "react"
import { MdOutlinePublic, MdOutlineMyLocation } from "react-icons/md"
import { IoAnalytics, IoDocumentTextOutline } from "react-icons/io5"
import Card from "../../components/card"

interface Props {
}
const Approach = () => {
  const cardItems = [
    {
      step: "1",
      text: "Tell us a little about yourself and the role that you’re applying for",
    },
    {
      step: "2",
      text: "Hit ‘generate’ and let the AI do its thing",
    },
    {
      step: "3",
      text: "We run analytics on the data to identify trends & patterns, derive insights in close collaboration with the domain expert in your organization.",

    },
  ]
  return (
<div  className="pb-20 flex flex-col items-center bg-black md:flex-row md:justify-center">
  {cardItems.map((card, i) => (
    <Card
      key={i}
      step={card.step}
      text={card.text}
    />
  ))}
</div>
  )
}

export default Approach
