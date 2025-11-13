import { useState, useEffect } from "react";

const phrases = [
  "Trust Without Identity",
  "Reputation Without Presence",
  "Verify Without Revealing",
  "Proof Without Exposure"
];

interface MainPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs' | 'faq' | 'ecosystems') => void;
}

export default function MainPage({ onNavigate }: MainPageProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in: 2 sekunder
    const fadeIn = setTimeout(() => setOpacity(1), 100);

    // Fade out efter 4 sekunder (2s fade in + 2s visa)
    const fadeOut = setTimeout(() => {
      setOpacity(0);
    }, 4000);

    // Byt fras efter 6 sekunder (2s fade in + 2s visa + 2s fade out)
    const changePhrase = setTimeout(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 6000);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
      clearTimeout(changePhrase);
    };
  }, [currentPhraseIndex]);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="text-center space-y-8 pointer-events-auto">
        <div className="space-y-6 pointer-events-none">
          <h1 
            className="text-white text-7xl font-light italic whitespace-nowrap"
            style={{ fontFamily: '"GFS Didot", serif' }}
          >
            Zekay Protocol
          </h1>
          <h2 
            className="text-white text-4xl font-light whitespace-nowrap"
            style={{
              opacity,
              transition: 'opacity 2s ease-in-out'
            }}
          >
            {phrases[currentPhraseIndex]}
          </h2>
          <p className="text-lg font-light max-w-3xl mx-auto px-4 shimmer-text">
            A zero-knowledge identity protocol for proving uniqueness, trust, and eligibility—without revealing who you are.
          </p>
        </div>

        {/* Developer CTA */}
        <div className="space-y-6 pt-16 pointer-events-auto">
          <h3 className="text-white text-2xl font-light">
            Start Building with Zekay
          </h3>
          <p className="text-white/60 text-base font-light max-w-2xl mx-auto px-4">
            Integrate anonymous identity and verifiable reputation through Zekay's SDKs, APIs, and modular smart contracts.
          </p>
          <div className="flex items-center justify-center gap-5">
            <button 
              onClick={() => onNavigate('docs')}
              className="group px-6 py-3 bg-white text-black font-medium rounded-lg hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all flex items-center gap-2 focus:outline-none"
            >
              Read the docs
              <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button className="group px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/15 hover:shadow-lg hover:shadow-white/10 hover:scale-105 transition-all border border-white/20 flex items-center gap-2 focus:outline-none">
              Explore Github
              <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
