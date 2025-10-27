import { assets, navText } from "@/public/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Language = "en" | "id";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  setIsDarkMode,
  language,
  setLanguage,
}) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(100%)";
    }
  };

  // ===== Scroll & Active Section Detection =====
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev: Language) => (prev === "en" ? "id" : "en"));
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 transition-all duration-500 ease-in-out ${
          isScroll
            ? "bg-lightHover bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkHover dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-sm"
            : ""
        }`}
      >
        <div className="max-w-[100rem] mx-auto flex items-center justify-between">
          {/* ===== Logo ===== */}
          <a href="#home">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="logo"
              className="w-28 cursor-pointer"
            />
          </a>

          {/* ===== Desktop Menu ===== */}
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-500 ease-in-out ${
              isScroll ? "" : "bg-lightHover shadow-sm dark:bg-darkHover"
            }`}
          >
            {(["home", "about", "projects", "contact"] as const).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative px-1 
                    ${
                      activeSection === id
                        ? "text-primary font-semibold"
                        : "text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-gray-300"
                    }`}
                >
                  {navText[language][id]}
                  <span
                    className={`absolute left-0 -bottom-[3px] h-[2px] rounded-full ${
                      activeSection === id
                        ? "w-full opacity-100 bg-current transition-all duration-300 ease-in-out"
                        : "w-0 opacity-0 bg-current transition-all duration-300 ease-in-out"
                    }`}
                    style={{ transitionProperty: "width, opacity" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* ===== Right Icons ===== */}
          <div className="flex items-center gap-4 lg:pl-[50px] md:pl-[50px] sm:pl-0">
            {/* 🌗 Theme toggle + 🌍 Language toggle (hanya tampil di desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode((prev) => !prev)}
                className="transition-none"
              >
                <Image
                  src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                  alt="theme toggle"
                  className="w-6"
                />
              </button>

              <button
                onClick={toggleLanguage}
                className="relative text-xl font-medium text-gray-800 dark:text-gray-200 group transition-none"
              >
                {language === "en" ? "ID" : "EN"}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-800 dark:bg-gray-200 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-200 origin-left" />
              </button>
            </div>

            {/* 🍔 Mobile Menu Button */}
            <button className="block md:hidden" onClick={openMenu}>
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="menu icon"
                className="w-6"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Fullscreen Mobile Menu ===== */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 w-full h-full bg-lightHover dark:bg-darkHover text-textLight dark:text-textDark flex flex-col justify-center items-center gap-6 transform translate-x-full transition-transform duration-500 z-50"
      >
        {/* ===== Top bar (close + toggles) ===== */}
        <div className="absolute top-6 left-6 flex items-center gap-4">
          {/* 🌗 Theme toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme toggle"
              className="w-6"
            />
          </button>

          {/* 🌍 Language toggle */}
          <button
            onClick={toggleLanguage}
            className="relative text-lg font-medium text-gray-800 dark:text-gray-200 group"
          >
            {language === "en" ? "ID" : "EN"}
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-800 dark:bg-gray-200 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-200 origin-left" />
          </button>
        </div>

        {/* Close Button */}
        <div className="absolute top-6 right-6 cursor-pointer" onClick={closeMenu}>
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="close menu"
            className="w-5"
          />
        </div>

        {/* ===== Centered Menu Links ===== */}
        <ul className="flex flex-col gap-6 text-center">
          {(["home", "about", "projects", "contact"] as const).map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={closeMenu}
                className={`text-2xl relative ${
                  activeSection === id
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {navText[language][id]}
                <span
                  className={`absolute left-0 -bottom-[3px] h-[2px] rounded-full ${
                    activeSection === id
                      ? "w-full opacity-100 bg-current transition-all duration-300 ease-in-out"
                      : "w-0 opacity-0 bg-current transition-all duration-300 ease-in-out"
                  }`}
                  style={{ transitionProperty: "width, opacity" }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
