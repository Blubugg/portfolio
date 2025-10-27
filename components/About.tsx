import { assets, toolsData, aboutText } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

// ✅ Define available languages (customize if needed)
type Language = 'en' | 'id'

// ✅ Define the shape of each language's text
type AboutTextType = {
  intro: string
  about: string
  desc: string
}

// ✅ Define the whole object shape for aboutText
type AboutTextObject = {
  [key in Language]: AboutTextType
}

// ✅ Define props type for the component
interface AboutProps {
  language: Language
}

// ✅ Assert the imported aboutText to match our type
const typedAboutText = aboutText as AboutTextObject

const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <motion.div
      id="about"
      className="max-w-[100rem] h-screen max-h-[945px] mx-auto scroll-mt-20 items-center justify-center flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        {typedAboutText[language].intro}
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        {typedAboutText[language].about}
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        {/* Description + Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1"
        >
          <p className="mb-10 w-full font-Ovo text-2xl text-justify">
            {typedAboutText[language].desc}
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-5 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-16 aspect-square border-[0.5px] bg-lightHover dark:bg-darkHover dark:border-none rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-11" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
