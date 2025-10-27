import React from "react";
import Image from "next/image";
import { assets, headerText } from "@/public/assets/assets";
import { motion } from "motion/react";

type Language = "en" | "id";

interface HeaderTextContent {
  hi: string;
  role: string;
  desc: string;
  contact: string;
  view: string;
}

type HeaderTextType = Record<Language, HeaderTextContent>;

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const typedHeaderText = headerText as HeaderTextType;

  // Tentukan file CV berdasarkan bahasa
  const cvFile =
    language === "id" ? "/CV_Indonesia.pdf" : "/CV_English.pdf";

  return (
    <div
      id="home"
      className="w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-4 px-4 sm:px-6 lg:px-8"
    >
      {/* 👤 Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile"
          width={150}
          height={150}
          className="rounded-full w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40"
        />
      </motion.div>

      {/* 👋 Greeting */}
      <motion.h3
        initial={{ y: -2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-3"
      >
        {typedHeaderText[language].hi}
        <Image
          src={assets.hand_icon}
          alt="wave"
          width={28}
          height={28}
          className="w-5 sm:w-6 md:w-7"
        />
      </motion.h3>

      {/* 🧠 Role */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] leading-tight"
      >
        {typedHeaderText[language].role}
      </motion.h1>

      {/* 📝 Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 px-2 sm:px-0"
      >
        {typedHeaderText[language].desc}
      </motion.p>

      {/* 🔘 Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8">
        {/* 📩 Contact */}
        <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="sm:w-[225px] w-[180px] px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-darkHover text-textDark flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg"
          >
            {typedHeaderText[language].contact}
            <Image
              src={assets.right_arrow_white}
              alt="arrow"
              width={16}
              height={16}
              className="w-4 sm:w-5"
            />
          </motion.a>
        </motion.button>

        {/* 👀 View CV */}
        <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-[225px] w-[180px] px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-lightHover text-textLight flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg"
          >
            {typedHeaderText[language].view}
            <Image
              src={assets.document_icon}
              alt="view"
              width={16}
              height={16}
              className="w-4 sm:w-5"
            />
          </motion.a>
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
