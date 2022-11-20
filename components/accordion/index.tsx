import { Disclosure } from '@headlessui/react'
import { Key, ReactElement } from 'react'
import{ BsChevronUp } from 'react-icons/bs'

interface Props {
  information: Accordion[]
}

const Accordion = ({ information}: Props): ReactElement => {
  return (
    <div className="w-full px-4 pt-8">
      <div className="mx-auto w-full max-w-[900px] rounded-xl bg-white p-2 ">
        {information.map((info: Accordion, i: number) => (
        <Disclosure key={i}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between my-1 rounded-lg bg-blue-100 px-4 py-2 text-left text-sm md:text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
              <span>{info.title}</span>
              <BsChevronUp
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 p-6 text-sm text-gray-500">
              {info.description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
        ))}

      </div>
    </div>
  )
}

export default Accordion