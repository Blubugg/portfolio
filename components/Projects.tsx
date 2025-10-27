import { workData, projectsText } from '@/public/assets/assets'
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

type Language = 'en' | 'id'

type ProjectsTextType = {
  titleSmall: string
  titleBig: string
  view: string
}

type ProjectsTextObject = {
  [key in Language]: ProjectsTextType
}

interface ProjectData {
  title: string
  description: string
  description_id: string
  bgImage: string
  link: string
  tools: string[]
}

interface ProjectsProps {
  language: Language
}

const typedProjectsText = projectsText as ProjectsTextObject
const typedWorkData = workData as ProjectData[]

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  return (
    <motion.div
      id="projects"
      className="max-w-[100rem] mx-auto min-h-screen flex flex-col items-center justify-center scroll-mt-20 px-6 sm:px-12 2xl:px-0 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🔹 Titles */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-base sm:text-lg"
      >
        {typedProjectsText[language].titleSmall}
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-5xl"
      >
        {typedProjectsText[language].titleBig}
      </motion.h2>

      {/* 🔹 Project Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-12
          sm:mt-16
          lg:mt-20
          place-items-stretch
        "
      >
        {typedWorkData.map((project, index) => (
          <div
            key={index}
            className="
              flex flex-col
              justify-between
              h-full
              p-4
              border-[0.5px]
              border-lightBorder dark:border-none
              rounded-2xl
              bg-lightHover/60
              dark:bg-darkHover/70
              backdrop-blur-lg
              shadow-sm
              w-full
              max-w-[382px]
              mx-auto
            "
          >
            {/* 🖼️ Image */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width: 768px) 100vw, 350px"
                priority={index < 2}
              />
            </div>

            {/* 🧠 Text Content */}
            <div className="flex flex-col flex-grow mt-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold mb-3 text-textLight dark:text-textDark">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base leading-relaxed mb-4 text-textLight dark:text-textDark text-justify">
                  {language === 'en'
                    ? project.description
                    : project.description_id}
                </p>
              </div>

              {/* 🛠️ Tools + Button */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <p
                      key={i}
                      className="
                        py-1
                        px-3
                        border border-darkTheme
                        dark:border-lightTheme
                        rounded-md
                        font-semibold
                        text-xs sm:text-sm
                        text-textLight
                        dark:text-textDark
                      "
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block
                      bg-darkHover
                      hover:bg-darkTheme
                      dark:bg-lightHover
                      dark:hover:bg-lightTheme
                      text-textDark
                      dark:text-textLight
                      font-bold
                      text-sm sm:text-base
                      py-2 sm:py-3
                      rounded-full
                      transition-all
                      duration-300
                      shadow-md
                      hover:shadow-lg
                    "
                  >
                    {typedProjectsText[language].view}
                  </motion.a>
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
