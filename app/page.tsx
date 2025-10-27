'use client'

import { useEffect, useState } from "react"
import { extend } from "@react-three/fiber"
import { MeshLineGeometry, MeshLineMaterial } from "meshline"

import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import StarBackground from "@/components/StarBackground"
import SkyBackground from "@/components/SkyBackground"

// ✅ Extend meshline for R3F
extend({ MeshLineGeometry, MeshLineMaterial })

// ✅ Define language type for global consistency
export type Language = "en" | "id"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const [language, setLanguage] = useState<Language>("en")

  // ✅ Detect preferred theme
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  // ✅ Apply dark/light mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = ""
    }
  }, [isDarkMode])

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {isDarkMode ? <StarBackground /> : <SkyBackground />}
      </div>

      {/* ✅ Pass typed props everywhere */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Header language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact isDarkMode={isDarkMode} language={language} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
