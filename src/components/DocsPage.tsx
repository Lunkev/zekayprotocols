import { GLSLHills } from "@/components/ui/glsl-hills";
import { AppleStyleDock } from "@/components/AppleStyleDock";

interface DocsPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs') => void;
}

export default function DocsPage({ onNavigate }: DocsPageProps) {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-black">
      <GLSLHills />
      <AppleStyleDock onNavigate={onNavigate} />
    </div>
  );
}

