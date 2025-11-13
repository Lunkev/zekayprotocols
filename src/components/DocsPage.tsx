import { useState, useRef, useEffect } from "react";
import { 
  ArchitectureContent, 
  IdentityContent, 
  AttestationContent, 
  ProofContent,
  DeveloperContent,
  UseCasesContent,
  EcosystemContent,
  SecurityContent,
  GovernanceContent,
  GlossaryContent
} from "./DocsPageContent";

interface DocsPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs' | 'faq' | 'ecosystems') => void;
}

type DocSection =
  | 'welcome'
  | 'vision'
  | 'principles'
  | 'architecture'
  | 'identity'
  | 'attestation'
  | 'proof'
  | 'developer'
  | 'usecases'
  | 'ecosystem'
  | 'security'
  | 'governance'
  | 'glossary';

const sections = [
  { id: 'welcome' as DocSection, title: '1. Welcome', icon: 'ri-home-line' },
  { id: 'vision' as DocSection, title: '2. Vision & Mission', icon: 'ri-eye-line' },
  { id: 'principles' as DocSection, title: '3. Core Design Principles', icon: 'ri-compass-line' },
  { id: 'architecture' as DocSection, title: '4. Architecture Overview', icon: 'ri-stack-line' },
  { id: 'identity' as DocSection, title: '5. Identity System', icon: 'ri-user-line' },
  { id: 'attestation' as DocSection, title: '6. Attestation Framework', icon: 'ri-file-shield-line' },
  { id: 'proof' as DocSection, title: '7. Proof & Verification', icon: 'ri-shield-check-line' },
  { id: 'developer' as DocSection, title: '8. Developer Framework', icon: 'ri-code-line' },
  { id: 'usecases' as DocSection, title: '9. Use Cases', icon: 'ri-apps-line' },
  { id: 'ecosystem' as DocSection, title: '10. Ecosystem', icon: 'ri-community-line' },
  { id: 'security' as DocSection, title: '11. Security Model', icon: 'ri-lock-line' },
  { id: 'governance' as DocSection, title: '12. Governance', icon: 'ri-government-line' },
  { id: 'glossary' as DocSection, title: '13. Glossary', icon: 'ri-book-open-line' },
];

export default function DocsPage({ onNavigate: _onNavigate }: DocsPageProps) {
  const [activeSection, setActiveSection] = useState<DocSection>('welcome');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSectionChange = (newSection: DocSection) => {
    if (newSection === activeSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(newSection);
      // Scroll to top when section changes
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  // Also scroll to top when activeSection changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-auto z-10">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-white/5 backdrop-blur-sm md:border-r border-white/10 overflow-y-auto flex-shrink-0 pointer-events-auto border-b md:border-b-0" style={{ overscrollBehavior: 'contain' }}>
        <div className="p-4 md:p-6 border-b border-white/10 mt-16 md:mt-24">
          <h2 className="text-white text-lg md:text-xl font-light italic">Zekay Protocol</h2>
          <p className="text-white/60 text-xs md:text-sm mt-1">Documentation</p>
          </div>

        <nav className="p-2 md:p-4">
          {sections.map((section) => (
            <button
              key={section.id}
              data-section={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`w-full text-left px-3 md:px-4 py-2 md:py-3 rounded-lg mb-1 transition-all flex items-center gap-2 md:gap-3 cursor-pointer text-xs md:text-sm ${
                activeSection === section.id
                  ? 'bg-white/10 text-white border-l-2 border-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <i className={`${section.icon} text-base md:text-lg`}></i>
              <span className="font-light">{section.title}</span>
            </button>
          ))}
        </nav>
        </div>

      {/* Main Content */}
      <div ref={contentRef} className="flex-1 overflow-y-auto pointer-events-auto" style={{ overscrollBehavior: 'contain' }}>
        <div 
          className={`max-w-4xl mx-auto px-4 md:px-12 py-8 md:py-12 pt-8 md:pt-32 transition-opacity duration-200 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <DocContent section={activeSection} onSectionChange={handleSectionChange} />
        </div>
      </div>
    </div>
  );
}

function DocContent({ section, onSectionChange }: { section: DocSection; onSectionChange: (section: DocSection) => void }) {
  const currentIndex = sections.findIndex(s => s.id === section);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  let content;
  switch (section) {
    case 'welcome':
      content = <WelcomeContent />;
      break;
    case 'vision':
      content = <VisionContent />;
      break;
    case 'principles':
      content = <PrinciplesContent />;
      break;
    case 'architecture':
      content = <ArchitectureContent />;
      break;
    case 'identity':
      content = <IdentityContent />;
      break;
    case 'attestation':
      content = <AttestationContent />;
      break;
    case 'proof':
      content = <ProofContent />;
      break;
    case 'developer':
      content = <DeveloperContent />;
      break;
    case 'usecases':
      content = <UseCasesContent />;
      break;
    case 'ecosystem':
      content = <EcosystemContent />;
      break;
    case 'security':
      content = <SecurityContent />;
      break;
    case 'governance':
      content = <GovernanceContent />;
      break;
    case 'glossary':
      content = <GlossaryContent />;
      break;
    default:
      content = <WelcomeContent />;
  }

  return (
    <>
      {content}
      <DocNavigation prev={prevSection} next={nextSection} onNavigate={onSectionChange} />
    </>
  );
}

interface DocNavigationProps {
  prev: { id: DocSection; title: string } | null;
  next: { id: DocSection; title: string } | null;
  onNavigate: (section: DocSection) => void;
}

function DocNavigation({ prev, next, onNavigate }: DocNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/10">
      {prev ? (
        <button
          onClick={() => onNavigate(prev.id)}
          className="group px-6 py-4 bg-white/10 text-white rounded-lg hover:bg-white/15 hover:shadow-lg hover:shadow-white/10 hover:scale-105 transition-all border border-white/20 flex items-center gap-3 focus:outline-none"
        >
          <i className="ri-arrow-left-line text-xl group-hover:-translate-x-1 transition-transform"></i>
          <div className="flex flex-col items-start">
            <span className="text-xs text-white/60 mb-1">Previous</span>
            <span className="text-sm font-medium">{prev.title}</span>
          </div>
        </button>
      ) : (
        <div></div>
      )}
      
      {next ? (
        <button
          onClick={() => onNavigate(next.id)}
          className="group px-6 py-4 bg-white text-black rounded-lg hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all flex items-center gap-3 focus:outline-none"
        >
          <div className="flex flex-col items-end">
            <span className="text-xs text-black/60 mb-1">Next</span>
            <span className="text-sm font-medium">{next.title}</span>
          </div>
          <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function WelcomeContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Welcome to Zekay Protocol</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-8">
        Zekay Protocol is a privacy-first infrastructure for verifiable identity and reputation. It provides a foundational layer for decentralized systems to establish trust without revealing user data, behavioral patterns, or wallet addresses.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 my-8">
        <h2 className="text-2xl font-medium text-white mb-4 flex items-center gap-3" style={{ fontFamily: '"GFS Didot", serif' }}>
          <i className="ri-information-line text-2xl"></i>
          What is Zekay?
        </h2>
        <p className="text-lg text-white/90 font-light leading-relaxed">
          Built on advanced zero-knowledge cryptography, Zekay introduces a new model for digital interaction — one where individuals, organizations, and even autonomous agents can prove reliability, authenticity, or participation without exposure.
        </p>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Core Architecture</h2>
      <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
        The protocol separates identity, reputation, and verification into independent yet composable cryptographic layers. This architecture allows developers to build privacy-preserving systems for governance, DeFi, social coordination, or compliance without compromising anonymity or transparency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-shield-user-line text-2xl text-white"></i>
            <h3 className="text-white font-medium" style={{ fontFamily: '"GFS Didot", serif' }}>Identity Layer</h3>
          </div>
          <p className="text-white/70 text-sm">Anonymous yet unique cryptographic commitments</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-file-shield-line text-2xl text-white"></i>
            <h3 className="text-white font-medium" style={{ fontFamily: '"GFS Didot", serif' }}>Attestation Layer</h3>
          </div>
          <p className="text-white/70 text-sm">Encrypted, verifiable reputation data</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-shield-check-line text-2xl text-white"></i>
            <h3 className="text-white font-medium" style={{ fontFamily: '"GFS Didot", serif' }}>Proof Layer</h3>
          </div>
          <p className="text-white/70 text-sm">Zero-knowledge proofs for private verification</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-checkbox-circle-line text-2xl text-white"></i>
            <h3 className="text-white font-medium" style={{ fontFamily: '"GFS Didot", serif' }}>Verification Layer</h3>
          </div>
          <p className="text-white/70 text-sm">On-chain and off-chain proof validation</p>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Quick Start</h2>
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <i className="ri-terminal-box-line text-xl text-white/70"></i>
          <span className="text-white/70 text-sm font-mono">Installation</span>
        </div>
        <pre className="bg-black/60 rounded-lg p-4 overflow-x-auto">
          <code className="text-green-400 text-sm">npm install @zekay/core @zekay/contracts @zekay/circuits</code>
        </pre>
      </div>

      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <i className="ri-code-s-slash-line text-xl text-white/70"></i>
          <span className="text-white/70 text-sm font-mono">Basic Usage</span>
        </div>
        <pre className="bg-black/60 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-white/90">{`import { ZekayProtocol } from '@zekay/core';

// Initialize the protocol
const zekay = new ZekayProtocol({
  provider: ethersProvider,
  contractAddress: ZEKAY_CONTRACT_ADDRESS
});

// Create anonymous identity
const identity = await zekay.createIdentity();

// Generate proof
const proof = await zekay.generateProof(identity, attestations);`}</code>
        </pre>
      </div>

      <div className="bg-white/5 border-l-4 border-white/20 rounded-r-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <i className="ri-information-line text-xl text-white/70 mt-1"></i>
          <div>
            <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Getting Started</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              New to Zekay? Check out the <span className="text-white font-medium">Architecture Overview</span> to understand the core concepts, or jump directly to the <span className="text-white font-medium">Developer Framework</span> to start building.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Why Zekay?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <i className="ri-shield-keyhole-line text-4xl text-white mb-3 block"></i>
          <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Privacy by Default</h3>
          <p className="text-white/70 text-sm">No data exposure, ever</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <i className="ri-verified-badge-line text-4xl text-white mb-3 block"></i>
          <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Cryptographically Verifiable</h3>
          <p className="text-white/70 text-sm">Mathematical guarantees</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <i className="ri-links-line text-4xl text-white mb-3 block"></i>
          <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Chain Agnostic</h3>
          <p className="text-white/70 text-sm">Works everywhere</p>
        </div>
      </div>

      <p className="text-lg text-white/80 font-light leading-relaxed mb-0">
        Zekay's design is not focused on anonymity for its own sake. Instead, it redefines privacy as a verifiable primitive — enabling accountability, fairness, and trust to emerge in a decentralized way.
      </p>
    </div>
  );
}

function VisionContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Vision & Mission</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Understanding the fundamental challenges we're solving and the future we're building.
      </p>

      <h2 className="text-3xl font-light text-white mt-12 mb-6 flex items-center gap-3" style={{ fontFamily: '"GFS Didot", serif' }}>
        <i className="ri-error-warning-line text-3xl"></i>
        The Problem
      </h2>
      
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
        <p className="text-lg text-white/80 font-light leading-relaxed mb-4">
          The modern internet forces users to choose between privacy and participation. Centralized identity systems collect personal data; blockchain-based systems tie reputation directly to wallets and transaction histories. Both approaches make trust visible — and therefore exploitable.
        </p>
        <p className="text-lg text-white/80 font-light leading-relaxed">
          Without verifiable anonymity, Web3 systems remain limited. Governance suffers from Sybil attacks, financial systems rely on over-collateralization, and social protocols cannot differentiate between reputation and identity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <i className="ri-spy-line text-2xl text-red-400 mb-3 block"></i>
          <h3 className="text-white font-medium mb-2 text-sm" style={{ fontFamily: '"GFS Didot", serif' }}>Privacy Loss</h3>
          <p className="text-white/70 text-xs">Identity systems expose user data</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <i className="ri-shield-cross-line text-2xl text-red-400 mb-3 block"></i>
          <h3 className="text-white font-medium mb-2 text-sm" style={{ fontFamily: '"GFS Didot", serif' }}>Sybil Attacks</h3>
          <p className="text-white/70 text-xs">Governance is easily manipulated</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <i className="ri-lock-line text-2xl text-red-400 mb-3 block"></i>
          <h3 className="text-white font-medium mb-2 text-sm" style={{ fontFamily: '"GFS Didot", serif' }}>Siloed Trust</h3>
          <p className="text-white/70 text-xs">Reputation cannot transfer</p>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6 flex items-center gap-3" style={{ fontFamily: '"GFS Didot", serif' }}>
        <i className="ri-eye-line text-3xl"></i>
        The Vision
      </h2>
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
        <p className="text-xl text-white/90 font-light leading-relaxed mb-6">
          Zekay envisions a world where trust flows freely — verified cryptographically, not socially. A world where identity exists without correlation, and reputation can be proven without surveillance.
        </p>
        <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
          The protocol serves as a global infrastructure for privacy-respecting coordination. It allows DAOs to verify membership without addresses, lenders to assess reliability without history, and networks to confirm participation without exposure.
        </p>
        <div className="bg-white/10 rounded-lg p-6 mt-6">
          <p className="text-white/90 font-light leading-relaxed italic">
            "Zekay's vision extends beyond blockchain — toward an ecosystem of verifiable autonomy, where humans and AI agents interact through mathematics, not permission."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
          <i className="ri-shield-check-line text-2xl text-green-400 mb-3 block"></i>
          <h3 className="text-white font-medium mb-2 text-sm" style={{ fontFamily: '"GFS Didot", serif' }}>Verifiable Privacy</h3>
          <p className="text-white/70 text-xs">Prove without revealing</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
          <i className="ri-links-line text-2xl text-green-400 mb-3 block"></i>
          <h3 className="text-white font-medium mb-2 text-sm" style={{ fontFamily: '"GFS Didot", serif' }}>Portable Reputation</h3>
          <p className="text-white/70 text-xs">Trust that travels</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
          <i className="ri-group-line text-2xl text-green-400 mb-3 block"></i>
          <h3 className="text-white font-medium mb-2 text-sm" style={{ fontFamily: '"GFS Didot", serif' }}>Decentralized Trust</h3>
          <p className="text-white/70 text-xs">No central authority</p>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6 flex items-center gap-3" style={{ fontFamily: '"GFS Didot", serif' }}>
        <i className="ri-rocket-line text-3xl"></i>
        The Mission
      </h2>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
        <p className="text-lg text-white/90 font-light leading-relaxed mb-4">
          Our mission is to build the standard for privacy-preserving identity and reputation. Zekay aims to provide open tools, transparent governance, and a resilient protocol layer that empowers developers to integrate private verification into any application.
        </p>
        <p className="text-lg text-white/80 font-light leading-relaxed">
          We are building not just for users, but for every system that depends on trust.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Our Commitment</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Open-source development and transparent roadmap</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Community-driven governance and protocol evolution</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Privacy-first design in every architectural decision</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Cross-chain compatibility and ecosystem interoperability</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function PrinciplesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8">Core Design Principles</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay's foundation rests on five immutable principles that guide every design decision — cryptographic, social, and architectural. These principles ensure the protocol remains resilient, extensible, and privacy-preserving at scale.
      </p>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-shield-line text-2xl"></i>
            1. Privacy as Infrastructure
          </h3>
          <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
            Privacy in Zekay is not optional; it is structural. No component of the system — from identity generation to proof verification — requires public linkage or disclosure. All operations are executed through cryptographic commitments that ensure user data never leaves its origin.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 text-sm font-light italic">
              This transforms privacy from a setting into a core protocol invariant — making surveillance architecturally impossible.
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-line text-green-400"></i>
              <span className="text-white/70 text-sm">Zero data collection by design</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-line text-green-400"></i>
              <span className="text-white/70 text-sm">Cryptographic commitments only</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-line text-green-400"></i>
              <span className="text-white/70 text-sm">No correlation between proofs</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-verified-badge-line text-2xl"></i>
            2. Verifiable Trust
          </h3>
          <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
            Zekay enables a new model of trust: mathematically verifiable, yet contextually private. Every attestation, identity, or credential can be proven valid without revealing the underlying data.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 text-sm font-light italic">
              This model replaces reputation based on transparency with reputation based on proof, preserving accountability while eliminating exposure.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-black/40 rounded-lg p-4">
              <p className="text-white/60 text-xs mb-1">Traditional Model</p>
              <p className="text-white text-sm">Trust through exposure</p>
            </div>
            <div className="bg-black/40 rounded-lg p-4">
              <p className="text-green-400/60 text-xs mb-1">Zekay Model</p>
              <p className="text-white text-sm">Trust through proof</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-puzzle-line text-2xl"></i>
            3. Modularity & Composability
          </h3>
          <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
            Zekay's architecture is modular by design. Developers can integrate only the layers they need — identity, attestation, proof, or verification — and customize how they interact with external systems.
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <p className="text-white/90 text-sm font-light italic">
              This makes Zekay a cryptographic foundation that can evolve alongside emerging applications without requiring protocol-level changes.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-black/40 rounded-lg p-4 flex items-start gap-3">
              <i className="ri-layout-grid-line text-white/70"></i>
              <div>
                <p className="text-white text-sm font-medium">Pick and Choose</p>
                <p className="text-white/60 text-xs">Use only what you need</p>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 flex items-start gap-3">
              <i className="ri-plug-line text-white/70"></i>
              <div>
                <p className="text-white text-sm font-medium">Easy Integration</p>
                <p className="text-white/60 text-xs">Plug into existing systems</p>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg p-4 flex items-start gap-3">
              <i className="ri-refresh-line text-white/70"></i>
              <div>
                <p className="text-white text-sm font-medium">Future-Proof</p>
                <p className="text-white/60 text-xs">Evolve without breaking changes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-government-line text-2xl"></i>
            4. Decentralized Governance
          </h3>
          <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
            The protocol is governed collectively by stakeholders who maintain its integrity: developers, validators, and researchers. All upgrades, proof standards, and attestation schemas are proposed and voted on transparently.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 text-sm font-light italic">
              This ensures the protocol remains community-driven and trust-minimized, with no single point of control or failure.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-links-line text-2xl"></i>
            5. Interoperability
          </h3>
          <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
            Zekay's proof format and verification logic are chain-agnostic. This allows any blockchain or decentralized application to integrate with the protocol using standard cryptographic primitives.
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <p className="text-white/90 text-sm font-light italic">
              Reputation becomes portable — verified once, trusted everywhere.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-black/40 rounded-lg p-3 text-center">
              <i className="ri-coin-line text-2xl text-white/70 mb-2 block"></i>
              <p className="text-white/80 text-xs">Ethereum</p>
            </div>
            <div className="bg-black/40 rounded-lg p-3 text-center">
              <i className="ri-coin-line text-2xl text-white/70 mb-2 block"></i>
              <p className="text-white/80 text-xs">Polygon</p>
            </div>
            <div className="bg-black/40 rounded-lg p-3 text-center">
              <i className="ri-coin-line text-2xl text-white/70 mb-2 block"></i>
              <p className="text-white/80 text-xs">Arbitrum</p>
            </div>
            <div className="bg-black/40 rounded-lg p-3 text-center">
              <i className="ri-coin-line text-2xl text-white/70 mb-2 block"></i>
              <p className="text-white/80 text-xs">Optimism</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mt-12">
        <h3 className="text-2xl font-medium text-white mb-4">Design Philosophy</h3>
        <p className="text-white/80 font-light leading-relaxed">
          These principles are not aspirational — they are enforced at the protocol level. Every component, from smart contracts to SDK functions, is designed to uphold these standards without exception. This ensures that Zekay remains a trustworthy foundation for privacy-respecting applications, regardless of scale or complexity.
        </p>
      </div>
    </div>
  );
}

