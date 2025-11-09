import { GLSLHills } from "@/components/ui/glsl-hills";
import { AppleStyleDock } from "@/components/AppleStyleDock";

interface AboutPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs') => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black">
      <GLSLHills />
      <div className="space-y-8 pointer-events-none z-10 text-center absolute max-w-4xl px-8">
        <h1 className="font-semibold text-7xl text-white">
          <span className="italic text-6xl font-thin">About Zekay Protocol</span>
        </h1>
        <div className="space-y-6 text-white/80 text-lg">
          <p>
            Zekay Protocol is a revolutionary privacy-first infrastructure designed to enable
            anonymous reputation, identity verification, and access control across decentralized systems.
          </p>
          <p>
            Our mission is to empower individuals and organizations with the tools to build trust
            without compromising privacy, enabling verification without revealing sensitive information.
          </p>
          <p className="text-white/60 text-base">
            Built on cutting-edge cryptographic principles and zero-knowledge proofs,
            Zekay Protocol represents the future of digital identity and reputation systems.
          </p>
        </div>
      </div>
      <AppleStyleDock onNavigate={onNavigate} />
    </div>
  );
}
