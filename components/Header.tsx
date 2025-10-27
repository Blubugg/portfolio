import React from "react";
import Image from "next/image";
import { assets, headerText } from "@/public/assets/assets";
import { motion } from "motion/react";

// Supported languages
type Language = "en" | "id";

// Shape of each language's text
interface HeaderTextContent {
  hi: string;
  role: string;
  desc: string;
  contact: string;
  download: string;
}

// Proper mapped type for all languages
type HeaderTextType = Record<Language, HeaderTextContent>;

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const typedHeaderText = headerText as HeaderTextType;

  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl max-h-[945px] text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* 👤 Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="profile" className="rounded-full w-32" />
      </motion.div>

      {/* 👋 Greeting */}
      <motion.h3
        initial={{ y: -2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        {typedHeaderText[language].hi}
        <Image src={assets.hand_icon} alt="wave" className="w-6" />
      </motion.h3>

      {/* 🧠 Role */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        {typedHeaderText[language].role}
      </motion.h1>

      {/* 📝 Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        {typedHeaderText[language].desc}
      </motion.p>

      {/* 🔘 Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* 📩 Contact */}
        <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 rounded-full bg-darkHover text-textDark flex items-center gap-2"
          >
            {typedHeaderText[language].contact}
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </motion.a>
        </motion.button>

        {/* 📄 Download */}
        <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 rounded-full flex items-center gap-2 bg-lightHover text-textLight"
          >
            {typedHeaderText[language].download}
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </motion.a>
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
