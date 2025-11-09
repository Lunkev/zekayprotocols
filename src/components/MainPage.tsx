import { GLSLHills } from "@/components/ui/glsl-hills";
import { AppleStyleDock } from "@/components/AppleStyleDock";
import { useState, useEffect } from "react";

const phrases = [
  "Trust Without Identity",
  "Reputation Without Exposure",
  "Verify Without Revealing",
  "Proof Without Presence"
];

interface MainPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs') => void;
}

export default function MainPage({ onNavigate }: MainPageProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = setTimeout(() => setOpacity(1), 100);

    const stay = setTimeout(() => {
      setOpacity(0);
    }, 4000);

    const changePhrase = setTimeout(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 6000);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(stay);
      clearTimeout(changePhrase);
    };
  }, [currentPhraseIndex]);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap text-white">
          <span className="italic text-6xl font-thin">Zekay Protocol <br /> </span>
          <span
            style={{
              opacity,
              transition: 'opacity 2s ease-in-out'
            }}
          >
            {phrases[currentPhraseIndex]}
          </span>
        </h1>
        <p className="text-sm text-white/60">
          Privacy-first infrastructure for anonymous reputation, identity and access <br /> across decentralized systems.
        </p>
      </div>
      <AppleStyleDock onNavigate={onNavigate} />
    </div>
  );
}
