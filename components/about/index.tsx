import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const About = () => {
const categories = ["Tell us about yourself", "Generate your cover letter", 'Personalise cover letter']
  return (
    <div className="px-20 py-16">
      <Tab.Group>
        <Tab.List className="space-x-1 rounded-xl bg-blue-900/20 flex flex-col md:flex-row">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-10 text-sm font-medium leading-5 text-blue-700 ',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

      </Tab.Group>
    </div>
  )
}

export default About