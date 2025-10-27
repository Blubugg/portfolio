'use client';
import Image from "next/image";
import * as THREE from 'three'
import { use, useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
import SkyBackground from "@/components/SkyBackground";

extend({ MeshLineGeometry, MeshLineMaterial })

export default function Home() {
  
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="absolute inset-0 -z-10">
          {isDarkMode ? <StarBackground /> : <SkyBackground />}
        </div>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} setLanguage={setLanguage} />
        <main>
          <Header language={language} />
          <About isDarkMode={isDarkMode} language={language} />
          <Projects isDarkMode={isDarkMode} language={language} />
          <Contact isDarkMode={isDarkMode} language={language} />
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
