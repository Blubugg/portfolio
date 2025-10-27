import { useEffect, useState } from "react";

interface Cloud {
  id: number;
  size: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

export const SkyBackground = () => {
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    generateClouds();
    const handleResize = () => generateClouds();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateClouds = () => {
    const numberOfClouds = Math.floor(window.innerWidth / 180);
    const newClouds: Cloud[] = Array.from({ length: numberOfClouds }, (_, i) => ({
      id: i,
      size: Math.random() * 120 + 100, // ukuran awan
      x: Math.random() * 100,
      y: Math.random() * 60,
      speed: Math.random() * 40 + 60, // kecepatan drift
      opacity: Math.random() * 0.25 + 0.4,
    }));
    setClouds(newClouds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-b from-[#73baff] via-[#b5ddff] to-[#f3f9ff] transition-opacity duration-700">

      {/* ☀️ Cahaya lembut di pojok kiri atas */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-yellow-200/40 blur-3xl top-[-120px] left-[10%]" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-yellow-100/30 blur-3xl top-[-220px] left-[20%]" />

      {/* ☁️ Awan fluffy lembut */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute bg-white/90 rounded-full blur-2xl shadow-[0_0_60px_20px_rgba(255,255,255,0.6)]"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size / 2}px`,
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            opacity: cloud.opacity,
            animation: `cloudDrift ${cloud.speed}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default SkyBackground;
