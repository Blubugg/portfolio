import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    // 🌠 Gentle meteor shower — continuous but not crowded
    const meteorInterval = setInterval(() => {
      setMeteors((prev) => [
        ...prev.slice(-15), // keep only the latest 15 to avoid buildup
        {
          id: Date.now(),
          size: Math.random() * 2 + 0.8,
          x: Math.random() * 100,
          y: Math.random() * 40,
          delay: 0,
          animationDuration: Math.random() * 2 + 4, // 4–6s
        },
      ]);
    }, Math.random() * 600 + 1200); // 1.2–1.8s per meteor

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars: Star[] = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));

    setStars(newStars);
  };

  const generateMeteors = () => {
    // 🌠 Small initial wave (1–2 meteors)
    const newMeteors: Meteor[] = Array.from(
      { length: Math.floor(Math.random() * 2) + 1 },
      (_, i) => ({
        id: i,
        size: Math.random() * 2 + 0.8,
        x: Math.random() * 100,
        y: Math.random() * 40,
        delay: Math.random() * 2,
        animationDuration: Math.random() * 2 + 4,
      })
    );
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: `${meteor.size * 60}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
