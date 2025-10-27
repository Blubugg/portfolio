import { assets, toolsData, aboutText } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type Language = "en" | "id";

type AboutTextType = {
  intro: string;
  about: string;
  desc: string;
};

type AboutTextObject = {
  [key in Language]: AboutTextType;
};

interface AboutProps {
  language: Language;
}

const typedAboutText = aboutText as AboutTextObject;

const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <motion.section
      id="about"
      className="max-w-[100rem] min-h-screen mx-auto scroll-mt-20 flex flex-col items-center justify-center px-6 sm:px-12 2xl:px-0 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🧩 Section Title */}
      <div className="text-center mb-12">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg mb-2"
        >
          {typedAboutText[language].intro}
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl sm:text-5xl"
        >
          {typedAboutText[language].about}
        </motion.h2>
      </div>

      {/* 🧠 Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full max-w-[100rem]"
      >
        {/* 👤 Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-3xl overflow-hidden flex-shrink-0"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>

        {/* 📝 Description + Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1 w-full"
        >
          <p className="mb-10 text-base sm:text-lg md:text-xl text-justify leading-relaxed">
            {typedAboutText[language].desc}
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 sm:w-14 md:w-16 aspect-square border-[0.5px] bg-lightHover dark:bg-darkHover dark:border-none rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-8 md:w-10" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
