import { workData, projectsText } from '@/public/assets/assets'
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

// ✅ Define available languages
type Language = 'en' | 'id'

// ✅ Define the structure for project text translations
type ProjectsTextType = {
  titleSmall: string
  titleBig: string
  view: string
}

// ✅ Define the entire translation object type
type ProjectsTextObject = {
  [key in Language]: ProjectsTextType
}

// ✅ Define the shape for each project
interface ProjectData {
  title: string
  description: string
  description_id: string
  bgImage: string
  link: string
  tools: string[]
}

// ✅ Define props
interface ProjectsProps {
  language: Language
}

// ✅ Assert imported data types
const typedProjectsText = projectsText as ProjectsTextObject
const typedWorkData = workData as ProjectData[]

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  return (
    <motion.div
      id="projects"
      className="max-w-[100rem] max-h-[1050px] mx-auto scroll-mt-20 items-center justify-center flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Titles */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        {typedProjectsText[language].titleSmall}
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        {typedProjectsText[language].titleBig}
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid justify-center gap-8 my-20 sm:grid-cols-2 lg:grid-cols-3"
      >
        {typedWorkData.map((project, index) => (
          <div
            key={index}
            className="p-4 outline-none border-[0.5px] rounded-2xl dark:border-none flex flex-col w-[382px] bg-lightHover bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkHover dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-sm"
          >
            {/* Image */}
            <div className="relative w-[350px] h-[350px]">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width: 768px) 100vw, 350px"
                priority={index < 2} // preload top images
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h1 className="font-Ovo text-2xl font-semibold my-4 text-textLight dark:text-textDark">
                  {project.title}
                </h1>
                <p className="font-Ovo text-[16px] leading-5 mb-4 text-textLight dark:text-textDark text-justify">
                  {language === 'en'
                    ? project.description
                    : project.description_id}
                </p>
              </div>

              {/* Tools */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <p
                      key={i}
                      className="py-1 px-3 border border-darkTheme rounded-md font-semibold text-textLight dark:text-textDark dark:border-lightTheme"
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-4 text-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-darkHover hover:bg-darkTheme text-textDark dark:bg-lightHover dark:hover:bg-lightTheme dark:text-textLight font-bold p-3 rounded-full block transition-all duration-300"
                  >
                    {typedProjectsText[language].view}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
