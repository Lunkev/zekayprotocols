import { GLSLHills } from "@/components/ui/glsl-hills";
import { AppleStyleDock } from "@/components/AppleStyleDock";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, BookOpen, Rocket, Code, Layers, Terminal, Shield, Users, Zap } from "lucide-react";
import { useState } from "react";

interface DocsPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs') => void;
}

type DocSection =
  | 'introduction'
  | 'what-is-zekay'
  | 'key-features'
  | 'use-cases'
  | 'getting-started'
  | 'installation'
  | 'quick-start'
  | 'configuration'
  | 'core-concepts'
  | 'attestations'
  | 'zero-knowledge-proofs'
  | 'identities'
  | 'epochs'
  | 'state-trees'
  | 'architecture'
  | 'protocol-overview'
  | 'smart-contracts'
  | 'circuits'
  | 'packages'
  | 'api-reference'
  | 'protocol-api'
  | 'contract-api'
  | 'utilities'
  | 'advanced'
  | 'custom-circuits'
  | 'deployment'
  | 'security';

const sidebarSections = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { id: 'introduction' as DocSection, label: 'Introduction' },
      { id: 'what-is-zekay' as DocSection, label: 'What is Zekay?' },
      { id: 'key-features' as DocSection, label: 'Key Features' },
      { id: 'use-cases' as DocSection, label: 'Use Cases' },
    ]
  },
  {
    title: "Installation",
    icon: Terminal,
    items: [
      { id: 'getting-started' as DocSection, label: 'Requirements' },
      { id: 'installation' as DocSection, label: 'Installation' },
      { id: 'quick-start' as DocSection, label: 'Quick Start' },
      { id: 'configuration' as DocSection, label: 'Configuration' },
    ]
  },
  {
    title: "Core Concepts",
    icon: BookOpen,
    items: [
      { id: 'core-concepts' as DocSection, label: 'Overview' },
      { id: 'attestations' as DocSection, label: 'Attestations' },
      { id: 'zero-knowledge-proofs' as DocSection, label: 'Zero-Knowledge Proofs' },
      { id: 'identities' as DocSection, label: 'Identities' },
      { id: 'epochs' as DocSection, label: 'Epochs' },
      { id: 'state-trees' as DocSection, label: 'State Trees' },
    ]
  },
  {
    title: "Architecture",
    icon: Layers,
    items: [
      { id: 'architecture' as DocSection, label: 'Protocol Overview' },
      { id: 'protocol-overview' as DocSection, label: 'System Design' },
      { id: 'smart-contracts' as DocSection, label: 'Smart Contracts' },
      { id: 'circuits' as DocSection, label: 'ZK Circuits' },
      { id: 'packages' as DocSection, label: 'Package Structure' },
    ]
  },
  {
    title: "API Reference",
    icon: Code,
    items: [
      { id: 'api-reference' as DocSection, label: 'Overview' },
      { id: 'protocol-api' as DocSection, label: 'Protocol API' },
      { id: 'contract-api' as DocSection, label: 'Contract API' },
      { id: 'utilities' as DocSection, label: 'Utilities' },
    ]
  },
  {
    title: "Advanced",
    icon: Zap,
    items: [
      { id: 'advanced' as DocSection, label: 'Advanced Topics' },
      { id: 'custom-circuits' as DocSection, label: 'Custom Circuits' },
      { id: 'deployment' as DocSection, label: 'Deployment' },
      { id: 'security' as DocSection, label: 'Security Best Practices' },
    ]
  }
];

export default function DocsPage({ onNavigate }: DocsPageProps) {
  const [activeSection, setActiveSection] = useState<DocSection>('introduction');
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started']);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title) ? prev.filter(s => s !== title) : [...prev, title]
    );
  };

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-black">
      <GLSLHills />

      <div className="relative z-10 flex w-full h-full pointer-events-auto">
        <div className="w-72 bg-black/60 backdrop-blur-md border-r border-white/10 flex flex-col">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Documentation
            </h2>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-2">
              {sidebarSections.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSections.includes(section.title);

                return (
                  <div key={section.title} className="space-y-1">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{section.title}</span>
                    </button>

                    {isExpanded && (
                      <div className="ml-6 space-y-1">
                        {section.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                              activeSection === item.id
                                ? 'bg-white/10 text-white font-medium'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1">
            <div className="max-w-4xl mx-auto p-12">
              <DocContent section={activeSection} />
            </div>
          </ScrollArea>
        </div>
      </div>

      <AppleStyleDock onNavigate={onNavigate} />
    </div>
  );
}

function DocContent({ section }: { section: DocSection }) {
  switch (section) {
    case 'introduction':
      return <IntroductionContent />;
    case 'what-is-zekay':
      return <WhatIsZekayContent />;
    case 'key-features':
      return <KeyFeaturesContent />;
    case 'use-cases':
      return <UseCasesContent />;
    case 'getting-started':
      return <GettingStartedContent />;
    case 'installation':
      return <InstallationContent />;
    case 'quick-start':
      return <QuickStartContent />;
    case 'configuration':
      return <ConfigurationContent />;
    case 'core-concepts':
      return <CoreConceptsContent />;
    case 'attestations':
      return <AttestationsContent />;
    case 'zero-knowledge-proofs':
      return <ZeroKnowledgeProofsContent />;
    case 'identities':
      return <IdentitiesContent />;
    case 'epochs':
      return <EpochsContent />;
    case 'state-trees':
      return <StateTreesContent />;
    case 'architecture':
      return <ArchitectureContent />;
    case 'protocol-overview':
      return <ProtocolOverviewContent />;
    case 'smart-contracts':
      return <SmartContractsContent />;
    case 'circuits':
      return <CircuitsContent />;
    case 'packages':
      return <PackagesContent />;
    case 'api-reference':
      return <ApiReferenceContent />;
    case 'protocol-api':
      return <ProtocolApiContent />;
    case 'contract-api':
      return <ContractApiContent />;
    case 'utilities':
      return <UtilitiesContent />;
    case 'advanced':
      return <AdvancedContent />;
    case 'custom-circuits':
      return <CustomCircuitsContent />;
    case 'deployment':
      return <DeploymentContent />;
    case 'security':
      return <SecurityContent />;
    default:
      return <IntroductionContent />;
  }
}

function IntroductionContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Zekay Protocol</h1>
      <p className="text-lg text-white/70 mb-8">
        A comprehensive guide to building privacy-preserving applications with zero-knowledge proofs
      </p>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-white font-semibold mb-2">Privacy-First by Design</h3>
            <p className="text-white/70 text-sm">
              Zekay Protocol is built from the ground up to prioritize user privacy while enabling
              verifiable claims and reputation systems. Every component is designed with zero-knowledge
              principles at its core.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What You'll Learn</h2>
      <p className="text-white/70 mb-4">
        This documentation will guide you through everything you need to know to build with Zekay Protocol:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-green-400" />
            </div>
            <h3 className="text-white font-semibold">Getting Started</h3>
          </div>
          <p className="text-white/60 text-sm">
            Learn how to install and configure Zekay Protocol in your project, with step-by-step guides and examples.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold">Core Concepts</h3>
          </div>
          <p className="text-white/60 text-sm">
            Understand the fundamental concepts of zero-knowledge proofs, attestations, and identity management.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Layers className="w-4 h-4 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold">Architecture</h3>
          </div>
          <p className="text-white/60 text-sm">
            Explore the modular architecture and learn how different components work together seamlessly.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Code className="w-4 h-4 text-orange-400" />
            </div>
            <h3 className="text-white font-semibold">API Reference</h3>
          </div>
          <p className="text-white/60 text-sm">
            Comprehensive API documentation with code examples for every method and interface.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Quick Navigation</h2>
      <div className="space-y-3 mb-8">
        <a href="#" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors group">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">Installation Guide</h3>
              <p className="text-white/60 text-sm mt-1">Get Zekay Protocol running in minutes</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/70" />
          </div>
        </a>

        <a href="#" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors group">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">Quick Start Tutorial</h3>
              <p className="text-white/60 text-sm mt-1">Build your first zero-knowledge application</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/70" />
          </div>
        </a>

        <a href="#" className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 transition-colors group">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">Core Concepts</h3>
              <p className="text-white/60 text-sm mt-1">Learn the fundamentals of the protocol</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/70" />
          </div>
        </a>
      </div>

      <Separator className="bg-white/10 my-8" />

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Community & Support</h2>
      <p className="text-white/70 mb-4">
        Join our growing community of developers building privacy-preserving applications:
      </p>
      <div className="flex flex-wrap gap-3">
        <Badge variant="outline" className="border-white/20 text-white px-4 py-2">Discord Community</Badge>
        <Badge variant="outline" className="border-white/20 text-white px-4 py-2">GitHub Discussions</Badge>
        <Badge variant="outline" className="border-white/20 text-white px-4 py-2">Twitter Updates</Badge>
        <Badge variant="outline" className="border-white/20 text-white px-4 py-2">Developer Forum</Badge>
      </div>
    </div>
  );
}

function WhatIsZekayContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">What is Zekay Protocol?</h1>

      <p className="text-lg text-white/70 mb-6">
        Zekay Protocol is a cutting-edge zero-knowledge protocol that revolutionizes how we think about
        identity, reputation, and data privacy in decentralized systems.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Problem</h2>
      <p className="text-white/70 mb-4">
        In today's digital landscape, users face a fundamental dilemma: they need to prove facts about
        themselves to access services, build reputation, and participate in online communities, but doing
        so often requires revealing sensitive personal information. This creates several critical issues:
      </p>

      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-white/70">
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span><strong className="text-white">Privacy Erosion:</strong> Every verification exposes personal data, creating digital footprints that can be tracked, aggregated, and exploited.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span><strong className="text-white">Centralized Control:</strong> Traditional identity systems place power in the hands of central authorities who control and monetize user data.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span><strong className="text-white">Reputation Lock-In:</strong> Reputation earned on one platform cannot be transferred to another, forcing users to start from zero repeatedly.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span><strong className="text-white">Correlation Attacks:</strong> Even anonymized data can be de-anonymized by correlating multiple data points across different services.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Solution</h2>
      <p className="text-white/70 mb-4">
        Zekay Protocol solves these problems by enabling <strong className="text-white">private, verifiable claims</strong>
        through zero-knowledge cryptography. The protocol allows users to:
      </p>

      <div className="grid grid-cols-1 gap-4 mb-8">
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            Receive Private Attestations
          </h3>
          <p className="text-white/70 text-sm">
            Trusted attesters can issue verifiable claims about users (credentials, achievements, reputation scores)
            that remain completely private. Only the recipient can see what attestations they've received, and they
            have full control over how and when to use them.
          </p>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-400" />
            Generate Zero-Knowledge Proofs
          </h3>
          <p className="text-white/70 text-sm">
            Users can prove facts about their attestations without revealing the underlying data. For example,
            prove "my reputation score is above 100" without revealing the exact score, who gave it, or any
            other identifying information.
          </p>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            Maintain Multiple Identities
          </h3>
          <p className="text-white/70 text-sm">
            Create and manage multiple unlinkable identities, each with their own set of attestations. Use
            different identities for different contexts while optionally proving relationships between them
            when needed, all without compromising privacy.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How It Works</h2>
      <p className="text-white/70 mb-4">
        At its core, Zekay Protocol combines several cryptographic primitives and design patterns:
      </p>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <ol className="space-y-4 text-white/70">
          <li>
            <strong className="text-white">1. Identity Generation:</strong> Users create cryptographic identities
            using commitment schemes that hide their actual identity while allowing them to prove ownership.
          </li>
          <li>
            <strong className="text-white">2. Attestation Issuance:</strong> Trusted attesters issue signed
            claims that are recorded in the user's private state tree, visible only to the recipient.
          </li>
          <li>
            <strong className="text-white">3. State Management:</strong> The protocol uses Merkle trees to
            efficiently manage user state, allowing for compact proofs and efficient verification.
          </li>
          <li>
            <strong className="text-white">4. Proof Generation:</strong> When users need to verify claims,
            they generate zero-knowledge proofs using circom circuits that prove statements about their
            state without revealing the state itself.
          </li>
          <li>
            <strong className="text-white">5. On-Chain Verification:</strong> Proofs are verified by smart
            contracts on-chain, ensuring trustless verification without central authorities.
          </li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Non-Repudiable Data System</h2>
      <p className="text-white/70 mb-4">
        One of Zekay Protocol's unique features is its <strong className="text-white">non-repudiable</strong> attestation
        system. Once an attester issues an attestation to a user:
      </p>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <ul className="space-y-3 text-white/70">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">✓</span>
            <span>The user cannot refuse or reject the attestation - it becomes part of their state</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">✓</span>
            <span>The user cannot modify or forge attestations - cryptographic signatures ensure authenticity</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">✓</span>
            <span>The attester cannot revoke the attestation once issued - providing certainty to users</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">✓</span>
            <span>The attestation remains private - only the user knows what they've received</span>
          </li>
        </ul>
      </div>

      <p className="text-white/70 mb-4">
        This design ensures that attestations have real weight and meaning, while still maintaining user privacy.
        It prevents malicious actors from selectively revealing or hiding attestations, creating a more honest
        and trustworthy reputation system.
      </p>

      <Separator className="bg-white/10 my-8" />

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Foundation</h2>
      <p className="text-white/70 mb-4">
        Zekay Protocol is built on a solid foundation of proven cryptographic techniques:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">ZK-SNARKs</h4>
          <p className="text-white/60 text-sm">
            Succinct non-interactive zero-knowledge proofs enable efficient verification without revealing witness data.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">Merkle Trees</h4>
          <p className="text-white/60 text-sm">
            Efficient data structures for managing user state and generating compact membership proofs.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">Smart Contracts</h4>
          <p className="text-white/60 text-sm">
            Solidity contracts on Ethereum-compatible chains provide trustless verification and coordination.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">Circom Circuits</h4>
          <p className="text-white/60 text-sm">
            Domain-specific language for defining zero-knowledge circuits with formal verification properties.
          </p>
        </div>
      </div>
    </div>
  );
}

function KeyFeaturesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Key Features</h1>

      <p className="text-lg text-white/70 mb-8">
        Zekay Protocol offers a comprehensive suite of features designed to enable privacy-preserving
        applications at scale.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            Private-by-Default Architecture
          </h2>
          <p className="text-white/70 mb-4">
            Every component of Zekay Protocol is designed with privacy as the foundational principle. Unlike
            systems where privacy is an afterthought or optional feature, Zekay makes it impossible to build
            applications that leak user data by default.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4">
            <h4 className="text-white font-semibold mb-3">What This Means for Developers:</h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>All user data is encrypted and stored off-chain in user-controlled storage</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>On-chain state consists only of cryptographic commitments and proof verifications</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>No personal identifiable information (PII) ever touches the blockchain</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>Identity commitments are unlinkable across different applications by default</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            Flexible Attestation System
          </h2>
          <p className="text-white/70 mb-4">
            Attestations in Zekay Protocol are highly flexible and can represent virtually any type of claim,
            credential, or reputation metric. The system supports both positive and negative attestations,
            weighted scores, and complex multi-dimensional reputation models.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4">
            <h4 className="text-white font-semibold mb-3">Attestation Types Supported:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="text-white text-sm font-semibold mb-2">Numeric Attestations</h5>
                <p className="text-white/60 text-xs">
                  Reputation scores, ratings, token balances, completion percentages, and any quantifiable metric.
                </p>
              </div>
              <div>
                <h5 className="text-white text-sm font-semibold mb-2">Boolean Attestations</h5>
                <p className="text-white/60 text-xs">
                  Credentials, certifications, membership status, verification flags, and binary properties.
                </p>
              </div>
              <div>
                <h5 className="text-white text-sm font-semibold mb-2">Weighted Attestations</h5>
                <p className="text-white/60 text-xs">
                  Multi-dimensional reputation with different weights for different categories or domains.
                </p>
              </div>
              <div>
                <h5 className="text-white text-sm font-semibold mb-2">Timestamped Attestations</h5>
                <p className="text-white/60 text-xs">
                  Time-sensitive claims that can prove "at this point in time" statements with temporal logic.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Code className="w-6 h-6 text-purple-400" />
            </div>
            Composable Proof System
          </h2>
          <p className="text-white/70 mb-4">
            The zero-knowledge proof system in Zekay Protocol is designed to be composable, allowing developers
            to create complex proofs that combine multiple attestations and conditions in sophisticated ways.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4">
            <h4 className="text-white font-semibold mb-3">Proof Capabilities:</h4>
            <div className="space-y-4 text-white/70 text-sm">
              <div>
                <span className="text-white font-medium">Range Proofs:</span> Prove a value falls within a specific
                range without revealing the exact value (e.g., "age between 18-65" without revealing exact age).
              </div>
              <div>
                <span className="text-white font-medium">Set Membership:</span> Prove inclusion in a set without
                revealing which specific element (e.g., "graduated from an Ivy League school" without saying which one).
              </div>
              <div>
                <span className="text-white font-medium">Aggregation Proofs:</span> Prove aggregate statistics about
                multiple attestations (e.g., "average rating above 4.5" across all received attestations).
              </div>
              <div>
                <span className="text-white font-medium">Conditional Proofs:</span> Prove complex logical statements
                combining multiple conditions with AND, OR, NOT operations.
              </div>
              <div>
                <span className="text-white font-medium">Reputation Transfer:</span> Prove reputation from one identity
                applies to another without linking the identities publicly.
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Layers className="w-6 h-6 text-orange-400" />
            </div>
            Modular & Extensible Architecture
          </h2>
          <p className="text-white/70 mb-4">
            Zekay Protocol is built with a clean, modular architecture that makes it easy to extend and customize
            for specific use cases. Each component is independently upgradeable and can be swapped out or extended
            without affecting the rest of the system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Core Protocol</h4>
              <p className="text-white/60 text-sm mb-3">
                Identity management, state transitions, and proof coordination logic.
              </p>
              <Badge variant="outline" className="border-white/20 text-white text-xs">@zekay/core</Badge>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Smart Contracts</h4>
              <p className="text-white/60 text-sm mb-3">
                On-chain verification, registry, and coordination layer.
              </p>
              <Badge variant="outline" className="border-white/20 text-white text-xs">@zekay/contracts</Badge>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">ZK Circuits</h4>
              <p className="text-white/60 text-sm mb-3">
                Circom circuits defining proof constraints and logic.
              </p>
              <Badge variant="outline" className="border-white/20 text-white text-xs">@zekay/circuits</Badge>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-red-400" />
            </div>
            Cross-Platform Reputation Portability
          </h2>
          <p className="text-white/70 mb-4">
            Unlike traditional reputation systems where your reputation is locked into a single platform, Zekay
            Protocol enables true reputation portability. Users can carry their reputation across different
            applications and platforms while maintaining privacy.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="text-white/70 text-sm mb-4">
              <strong className="text-white">Example:</strong> A user builds reputation as a reliable freelancer
              on Platform A. They can then prove their high reputation score to Platform B without:
            </p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Revealing their identity on Platform A</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Linking their accounts across platforms</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Exposing specific reviews or feedback they received</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Requiring Platform A and Platform B to coordinate or share data</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function UseCasesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Use Cases</h1>

      <p className="text-lg text-white/70 mb-8">
        Zekay Protocol enables a wide range of privacy-preserving applications across different domains.
        Here are some of the most compelling use cases.
      </p>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Anonymous Reputation Systems</h2>
          <p className="text-white/70 mb-6">
            Build reputation systems where users can prove their trustworthiness without revealing their identity
            or transaction history. Perfect for marketplaces, freelance platforms, and peer-to-peer networks.
          </p>

          <div className="bg-black/30 rounded-lg p-6 mb-4">
            <h4 className="text-white font-semibold mb-3">Real-World Example: Decentralized Freelance Platform</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <p>
                <strong className="text-white">The Problem:</strong> Traditional freelance platforms require extensive
                personal information and control user reputation. Freelancers can't transfer their reputation to
                other platforms, and clients can see their entire work history.
              </p>
              <p>
                <strong className="text-white">The Zekay Solution:</strong> Freelancers receive attestations for each
                completed project (ratings, skills verified, payment reliability). When bidding on new projects:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Prove "completed over 50 projects with 4.8+ average rating" without revealing which projects</li>
                <li>• Prove "verified expert in Solidity development" without showing portfolio to competitors</li>
                <li>• Prove "100% on-time delivery rate" without exposing client information</li>
                <li>• Use different identities for different types of work without starting reputation from zero</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2 text-sm">Marketplace Sellers</h5>
              <p className="text-white/60 text-xs">
                Prove sales volume and customer satisfaction ratings without revealing specific transactions or
                linking to real-world identity.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2 text-sm">Service Providers</h5>
              <p className="text-white/60 text-xs">
                Demonstrate expertise and reliability through attestations from past clients while maintaining
                privacy for both parties.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Privacy-Preserving Identity Verification</h2>
          <p className="text-white/70 mb-6">
            Enable users to verify their credentials and attributes without exposing personal information. Ideal
            for KYC/AML compliance, age verification, and credential verification.
          </p>

          <div className="bg-black/30 rounded-lg p-6 mb-4">
            <h4 className="text-white font-semibold mb-3">Real-World Example: DeFi Compliance</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <p>
                <strong className="text-white">The Problem:</strong> DeFi protocols need to comply with regulations
                requiring Know Your Customer (KYC) and accredited investor verification, but full KYC breaks privacy
                and creates honeypots of personal data.
              </p>
              <p>
                <strong className="text-white">The Zekay Solution:</strong> Users complete KYC once with a trusted
                verifier who issues attestations. Users can then:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Prove "I'm a verified US resident over 18" without revealing name, address, or birthday</li>
                <li>• Prove "I'm an accredited investor" without showing net worth or income details</li>
                <li>• Prove "I'm not on sanctions lists" without revealing citizenship or nationality</li>
                <li>• Use same attestations across multiple DeFi protocols without linking accounts</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2 text-sm">Age Verification</h5>
              <p className="text-white/60 text-xs">
                Prove minimum age requirements without revealing exact birthdate.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2 text-sm">Accreditation</h5>
              <p className="text-white/60 text-xs">
                Verify investor accreditation status without exposing financial details.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2 text-sm">Credentials</h5>
              <p className="text-white/60 text-xs">
                Prove education, licenses, or certifications without revealing institutions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Decentralized Access Control</h2>
          <p className="text-white/70 mb-6">
            Grant access to resources, communities, and services based on verifiable criteria while maintaining
            user privacy. Perfect for token-gated communities, role-based access, and credential-based permissions.
          </p>

          <div className="bg-black/30 rounded-lg p-6 mb-4">
            <h4 className="text-white font-semibold mb-3">Real-World Example: Token-Gated DAO</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <p>
                <strong className="text-white">The Problem:</strong> DAOs want to grant governance rights based on
                contribution and reputation, but token-based voting exposes holdings and voting history, making
                participants targets for attacks or social pressure.
              </p>
              <p>
                <strong className="text-white">The Zekay Solution:</strong> DAO members receive attestations for
                contributions (proposals submitted, votes cast, code contributions, etc.). Members can then:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Prove "I've been an active member for 6+ months" without revealing specific activities</li>
                <li>• Prove "I hold enough governance tokens" without revealing exact balance or wallet address</li>
                <li>• Vote anonymously while proving eligibility to vote</li>
                <li>• Prove contribution history without doxxing their on-chain identity</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2 text-sm">Private Communities</h5>
              <p className="text-white/60 text-xs">
                Grant access based on criteria (token holdings, credentials, invites) without revealing member identities.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2 text-sm">Role-Based Systems</h5>
              <p className="text-white/60 text-xs">
                Implement complex permission hierarchies with anonymous role verification and privilege escalation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Anonymous Voting & Governance</h2>
          <p className="text-white/70 mb-6">
            Enable secure, anonymous voting where participants can prove eligibility without revealing identity
            or voting choices. Prevents vote buying, coercion, and privacy violations.
          </p>

          <div className="bg-black/30 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3">Key Features:</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex gap-2">
                <span className="text-orange-400">•</span>
                <span><strong className="text-white">Eligibility Proofs:</strong> Prove right to vote without revealing voter identity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-400">•</span>
                <span><strong className="text-white">Anonymous Ballots:</strong> Cast votes that can't be linked back to voter</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-400">•</span>
                <span><strong className="text-white">Double-Vote Prevention:</strong> Cryptographically prevent voting twice without identity tracking</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-400">•</span>
                <span><strong className="text-white">Weighted Voting:</strong> Support reputation-weighted or token-weighted votes privately</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Privacy-Preserving Social Networks</h2>
          <p className="text-white/70 mb-6">
            Build social platforms where users can build reputation and trust without exposing their social graph,
            content consumption patterns, or personal information to the platform or other users.
          </p>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2">Anonymous Influencer Verification</h5>
              <p className="text-white/60 text-sm">
                Content creators can prove audience size and engagement metrics without revealing their identity
                or actual follower list.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="text-white font-medium mb-2">Private Content Recommendation</h5>
              <p className="text-white/60 text-sm">
                Get personalized content recommendations based on your interests without the platform tracking
                your viewing history or building a profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GettingStartedContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Requirements</h1>

      <p className="text-lg text-white/70 mb-8">
        Before installing Zekay Protocol, ensure your development environment meets the following requirements.
      </p>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <span className="text-xl">⚠️</span>
          Important Note About System Requirements
        </h3>
        <p className="text-white/70 text-sm">
          Zekay Protocol includes zero-knowledge proof generation which is computationally intensive. While the
          protocol can run on most modern development machines, proof generation may be slow on lower-spec systems.
          For production deployments, we recommend dedicated proof generation services.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Software Dependencies</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <Terminal className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold text-lg">Node.js</h3>
                <Badge variant="outline" className="border-green-500/30 text-green-400">Required</Badge>
              </div>
              <p className="text-white/70 text-sm mb-3">
                Version 18.0.0 or higher is required. We recommend using the latest LTS version for best performance
                and security.
              </p>
              <div className="bg-black/40 rounded p-3">
                <code className="text-sm text-white/90">node --version</code>
                <p className="text-white/50 text-xs mt-2">Run this command to check your Node.js version</p>
              </div>
              <div className="mt-3 text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-300">Download Node.js →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold text-lg">Rust</h3>
                <Badge variant="outline" className="border-orange-500/30 text-orange-400">Required</Badge>
              </div>
              <p className="text-white/70 text-sm mb-3">
                Latest stable version of Rust is required for building cryptographic components and zero-knowledge
                circuits. Rust provides the performance needed for efficient proof generation.
              </p>
              <div className="bg-black/40 rounded p-3">
                <code className="text-sm text-white/90">curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code>
                <p className="text-white/50 text-xs mt-2">Install Rust using rustup (recommended)</p>
              </div>
              <div className="mt-3 text-sm space-y-1">
                <p className="text-white/60">After installation, verify with:</p>
                <code className="text-blue-400">rustc --version && cargo --version</code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold text-lg">Circom 2</h3>
                <Badge variant="outline" className="border-purple-500/30 text-purple-400">Required</Badge>
              </div>
              <p className="text-white/70 text-sm mb-3">
                Circom is the domain-specific language used for writing zero-knowledge circuits. Version 2.0.0 or
                higher is required. Circom 2 provides significant performance improvements over Circom 1.
              </p>
              <div className="bg-black/40 rounded p-3">
                <code className="text-sm text-white/90">npm install -g circom@latest</code>
                <p className="text-white/50 text-xs mt-2">Install Circom globally via npm</p>
              </div>
              <div className="mt-3 text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-300">Circom Documentation →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold text-lg">Web3 Provider</h3>
                <Badge variant="outline" className="border-blue-500/30 text-blue-400">Recommended</Badge>
              </div>
              <p className="text-white/70 text-sm mb-3">
                For applications that interact with blockchain networks, you'll need access to an Ethereum-compatible
                RPC provider. Popular options include Infura, Alchemy, or a local node.
              </p>
              <div className="mt-3 text-sm text-white/60">
                <p>You'll need:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• RPC endpoint URL</li>
                  <li>• API key (if using hosted provider)</li>
                  <li>• WebSocket support (optional, for real-time events)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10 my-8" />

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Hardware Recommendations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-3">Minimum Specifications</h3>
          <p className="text-white/60 text-sm mb-4">
            Suitable for development and testing with small circuits
          </p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              <span><strong className="text-white">CPU:</strong> 4 cores / 8 threads</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              <span><strong className="text-white">RAM:</strong> 8 GB</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              <span><strong className="text-white">Storage:</strong> 10 GB free space (SSD recommended)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400">•</span>
              <span><strong className="text-white">Network:</strong> Stable internet connection</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-3">Recommended Specifications</h3>
          <p className="text-white/60 text-sm mb-4">
            For production applications and complex circuits
          </p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex gap-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-white">CPU:</strong> 8+ cores / 16+ threads</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-white">RAM:</strong> 16 GB or more</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-white">Storage:</strong> 50 GB+ free space (NVMe SSD)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">•</span>
              <span><strong className="text-white">GPU:</strong> CUDA-compatible GPU (optional, for accelerated proving)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-400" />
          Performance Tip
        </h3>
        <p className="text-white/70 text-sm">
          Zero-knowledge proof generation is memory and CPU intensive. For production applications, consider using
          dedicated proof generation workers or cloud-based proving services. This allows your main application to
          remain responsive while proofs are being generated in the background.
        </p>
      </div>
    </div>
  );
}

function InstallationContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Installation</h1>

      <p className="text-lg text-white/70 mb-8">
        Install Zekay Protocol packages and configure your development environment.
      </p>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <h3 className="text-white font-semibold mb-4">Package Overview</h3>
        <p className="text-white/70 text-sm mb-4">
          Zekay Protocol is distributed as a set of npm packages. You can install only the packages you need
          for your specific use case, or install all packages for full functionality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-black/30 rounded p-3">
            <Badge variant="outline" className="border-white/20 text-white mb-2">@zekay/core</Badge>
            <p className="text-white/60 text-xs">Protocol logic & identity management</p>
          </div>
          <div className="bg-black/30 rounded p-3">
            <Badge variant="outline" className="border-white/20 text-white mb-2">@zekay/contracts</Badge>
            <p className="text-white/60 text-xs">Smart contracts & ABIs</p>
          </div>
          <div className="bg-black/30 rounded p-3">
            <Badge variant="outline" className="border-white/20 text-white mb-2">@zekay/circuits</Badge>
            <p className="text-white/60 text-xs">ZK circuits & proving keys</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 1: Install Core Package</h2>

      <p className="text-white/70 mb-4">
        Start by installing the core package, which provides the fundamental protocol functionality:
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">npm</span>
          <Badge variant="outline" className="border-white/20 text-white text-xs">Copy</Badge>
        </div>
        <div className="p-4">
          <code className="text-sm text-green-400">npm install @zekay/core</code>
        </div>
      </div>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-8">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">yarn</span>
          <Badge variant="outline" className="border-white/20 text-white text-xs">Copy</Badge>
        </div>
        <div className="p-4">
          <code className="text-sm text-green-400">yarn add @zekay/core</code>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 2: Install Additional Packages</h2>

      <p className="text-white/70 mb-4">
        Depending on your use case, install additional packages:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-400" />
            Smart Contract Integration
          </h4>
          <p className="text-white/60 text-sm mb-3">
            If you need to interact with on-chain contracts or verify proofs on-chain:
          </p>
          <div className="bg-black/60 rounded p-3">
            <code className="text-sm text-green-400">npm install @zekay/contracts</code>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            Custom Circuit Development
          </h4>
          <p className="text-white/60 text-sm mb-3">
            If you're building custom circuits or need access to circuit templates:
          </p>
          <div className="bg-black/60 rounded p-3">
            <code className="text-sm text-green-400">npm install @zekay/circuits</code>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-400" />
            Utility Functions
          </h4>
          <p className="text-white/60 text-sm mb-3">
            Helper functions for common operations:
          </p>
          <div className="bg-black/60 rounded p-3">
            <code className="text-sm text-green-400">npm install @zekay/utils</code>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
        <h4 className="text-white font-semibold mb-2">💡 Quick Install All Packages</h4>
        <p className="text-white/70 text-sm mb-3">
          To install all packages at once:
        </p>
        <div className="bg-black/40 rounded p-3">
          <code className="text-sm text-green-400">npm install @zekay/core @zekay/contracts @zekay/circuits @zekay/utils</code>
        </div>
      </div>

      <Separator className="bg-white/10 my-8" />

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 3: Build Trusted Setup</h2>

      <p className="text-white/70 mb-4">
        After installing packages, you need to build the trusted setup for zero-knowledge circuits. This generates
        the proving and verification keys needed for ZK proofs.
      </p>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
        <h4 className="text-white font-semibold mb-2">⚠️ Important: Trusted Setup</h4>
        <p className="text-white/70 text-sm">
          The trusted setup process can take 10-30 minutes depending on your hardware and circuit complexity.
          This only needs to be done once per installation. The generated keys will be saved to your
          node_modules directory and reused across builds.
        </p>
      </div>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10">
          <span className="text-white/60 text-sm font-mono">Run trusted setup</span>
        </div>
        <div className="p-4 space-y-2">
          <code className="text-sm text-green-400 block">cd node_modules/@zekay/circuits</code>
          <code className="text-sm text-green-400 block">npm run setup</code>
        </div>
      </div>

      <p className="text-white/70 mb-4">
        You should see output similar to:
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg p-4 mb-8">
        <pre className="text-xs text-white/60">
{`[setup] Compiling circuits...
[setup] Circuit: identity.circom ✓
[setup] Circuit: attestation.circom ✓
[setup] Circuit: reputation.circom ✓
[setup] Generating proving keys...
[setup] Proving key: identity.zkey ✓
[setup] Proving key: attestation.zkey ✓
[setup] Proving key: reputation.zkey ✓
[setup] Generating verification keys...
[setup] Verification key: identity.vkey ✓
[setup] Verification key: attestation.vkey ✓
[setup] Verification key: reputation.vkey ✓
[setup] ✓ Trusted setup complete!`}
        </pre>
      </div>

      <Separator className="bg-white/10 my-8" />

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 4: Verify Installation</h2>

      <p className="text-white/70 mb-4">
        Test your installation by running the included test suite:
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10">
          <span className="text-white/60 text-sm font-mono">Run tests</span>
        </div>
        <div className="p-4">
          <code className="text-sm text-green-400">npm test</code>
        </div>
      </div>

      <p className="text-white/70 mb-4">
        If all tests pass, your installation is complete and ready to use! 🎉
      </p>

      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
        <h4 className="text-white font-semibold mb-2">✓ Installation Successful!</h4>
        <p className="text-white/70 text-sm mb-4">
          You're all set! Continue to the Quick Start guide to build your first zero-knowledge application
          with Zekay Protocol.
        </p>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Next: Quick Start Guide →</a>
      </div>
    </div>
  );
}

function QuickStartContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Quick Start</h1>

      <p className="text-lg text-white/70 mb-8">
        Build your first privacy-preserving application with Zekay Protocol in just a few minutes.
      </p>

      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
        <h3 className="text-white font-semibold mb-2">What We'll Build</h3>
        <p className="text-white/70 text-sm">
          In this guide, we'll create a simple reputation system where users can receive attestations and generate
          zero-knowledge proofs about their reputation without revealing their exact score or identity.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 1: Initialize the Protocol</h2>

      <p className="text-white/70 mb-4">
        First, import and initialize the Zekay Protocol in your application:
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">src/index.ts</span>
          <Badge variant="outline" className="border-white/20 text-white text-xs">TypeScript</Badge>
        </div>
        <div className="p-4">
          <pre className="text-sm text-white/90 overflow-x-auto"><code>{`import { ZekayProtocol } from '@zekay/core';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  process.env.RPC_URL
);

const protocol = new ZekayProtocol({
  provider: provider,
  contractAddress: '0x...', // Zekay contract address
  chainId: 1, // Ethereum mainnet
});

console.log('✓ Protocol initialized');`}</code></pre>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-8">
        <p className="text-white/70 text-sm">
          <strong className="text-white">Note:</strong> Replace <code className="text-blue-400">0x...</code> with
          the actual Zekay contract address for your target network. Contract addresses for different networks
          can be found in the deployment documentation.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 2: Create a User Identity</h2>

      <p className="text-white/70 mb-4">
        Every user needs a cryptographic identity to interact with the protocol:
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">Create identity</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-white/90 overflow-x-auto"><code>{`const identity = await protocol.createIdentity();

console.log('Identity created:', {
  commitment: identity.commitment.toString(),
  epoch: identity.epoch
});

await identity.save('./identity.json');`}</code></pre>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8">
        <h4 className="text-white text-sm font-semibold mb-2">What just happened?</h4>
        <ul className="text-white/70 text-xs space-y-2">
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>Generated a cryptographic identity commitment (public identifier)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>Created secret key material (kept private on user's device)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>Initialized user state tree for storing attestations</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>Saved identity to file for persistence</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 3: Receive an Attestation</h2>

      <p className="text-white/70 mb-4">
        Now let's simulate receiving an attestation from a trusted attester. In a real application, this would
        come from an authorized attester (e.g., after completing a task, passing verification, etc.):
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">Receive attestation</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-white/90 overflow-x-auto"><code>{`const attesterWallet = new ethers.Wallet(
  process.env.ATTESTER_PRIVATE_KEY,
  provider
);

const attestation = await protocol.attest({
  recipient: identity.commitment,
  attesterId: attesterWallet.address,
  posRep: 100, // Positive reputation points
  negRep: 0,   // Negative reputation points
  graffiti: '0x0', // Optional metadata
  timestamp: Date.now(),
  signer: attesterWallet
});

await identity.processAttestation(attestation);

console.log('✓ Attestation received and processed');
console.log('Current reputation:', identity.reputation);`}</code></pre>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-8">
        <p className="text-white/70 text-sm">
          <strong className="text-white">Privacy Note:</strong> The attestation is processed entirely client-side.
          The attester knows they issued an attestation, but cannot see what other attestations the user has
          received or track how the user uses this attestation.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 4: Generate a Zero-Knowledge Proof</h2>

      <p className="text-white/70 mb-4">
        Now comes the magic! Let's generate a proof that the user's reputation is above a threshold without
        revealing the exact value:
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">Generate proof</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-white/90 overflow-x-auto"><code>{`const proof = await identity.generateProof({
  type: 'reputation',
  minRep: 50, // Prove reputation is at least 50
  maxRep: 1000000, // Upper bound (very high, effectively no limit)
  epoch: identity.epoch,
  revealNonce: false // Keep identity private
});

console.log('✓ Proof generated');
console.log('Proof size:', JSON.stringify(proof).length, 'bytes');

console.log('Public signals:', {
  minRepMet: true, // Proves rep >= 50 without revealing actual value
  epoch: proof.publicSignals.epoch,
  nullifier: proof.publicSignals.nullifier // Prevents double-use
});`}</code></pre>
        </div>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mb-8">
        <p className="text-white/70 text-sm">
          <strong className="text-white">What the proof reveals:</strong> Only that the reputation is ≥50.
          It does NOT reveal: the exact reputation value, who issued the attestations, the user's identity,
          or any other attestations they've received.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Step 5: Verify the Proof</h2>

      <p className="text-white/70 mb-4">
        Finally, let's verify the proof. This can be done off-chain (fast) or on-chain (trustless):
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">Verify proof (off-chain)</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-white/90 overflow-x-auto"><code>{`const isValid = await protocol.verifyProof(proof);

if (isValid) {
  console.log('✓ Proof is valid!');
  console.log('User has proven reputation >= 50');
} else {
  console.log('✗ Proof verification failed');
}`}</code></pre>
        </div>
      </div>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-8">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">Verify proof (on-chain)</span>
        </div>
        <div className="p-4">
          <pre className="text-sm text-white/90 overflow-x-auto"><code>{`import { ZekayContract } from '@zekay/contracts';

const contract = new ZekayContract(
  contractAddress,
  wallet
);

const tx = await contract.verifyAndExecute(
  proof.proof,
  proof.publicSignals,
  {
    action: 'grantAccess', // What to do if proof is valid
    params: ['premium_features']
  }
);

await tx.wait();
console.log('✓ Proof verified on-chain and action executed');`}</code></pre>
        </div>
      </div>

      <Separator className="bg-white/10 my-8" />

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Complete Example</h2>

      <p className="text-white/70 mb-4">
        Here's the complete code all together:
      </p>

      <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-8">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
          <span className="text-white/60 text-sm font-mono">complete-example.ts</span>
          <Badge variant="outline" className="border-white/20 text-white text-xs">Full Code</Badge>
        </div>
        <div className="p-4">
          <pre className="text-xs text-white/90 overflow-x-auto"><code>{`import { ZekayProtocol } from '@zekay/core';
import { ethers } from 'ethers';

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.RPC_URL
  );

  const protocol = new ZekayProtocol({
    provider: provider,
    contractAddress: process.env.ZEKAY_CONTRACT_ADDRESS,
    chainId: 1,
  });

  console.log('1️⃣ Creating identity...');
  const identity = await protocol.createIdentity();
  console.log('✓ Identity created:', identity.commitment.toString());

  console.log('2️⃣ Receiving attestation...');
  const attesterWallet = new ethers.Wallet(
    process.env.ATTESTER_PRIVATE_KEY,
    provider
  );

  const attestation = await protocol.attest({
    recipient: identity.commitment,
    attesterId: attesterWallet.address,
    posRep: 100,
    negRep: 0,
    graffiti: '0x0',
    timestamp: Date.now(),
    signer: attesterWallet
  });

  await identity.processAttestation(attestation);
  console.log('✓ Attestation processed. Reputation:', identity.reputation);

  console.log('3️⃣ Generating zero-knowledge proof...');
  const proof = await identity.generateProof({
    type: 'reputation',
    minRep: 50,
    maxRep: 1000000,
    epoch: identity.epoch,
    revealNonce: false
  });
  console.log('✓ Proof generated');

  console.log('4️⃣ Verifying proof...');
  const isValid = await protocol.verifyProof(proof);
  console.log(isValid ? '✓ Proof valid!' : '✗ Proof invalid');

  console.log('\\n🎉 Complete! You\\'ve built your first ZK application!');
}

main().catch(console.error);`}</code></pre>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <span className="text-2xl">🎉</span>
          Congratulations!
        </h3>
        <p className="text-white/70 text-sm mb-4">
          You've successfully built a privacy-preserving reputation system with zero-knowledge proofs.
          You now understand the basics of:
        </p>
        <ul className="text-white/70 text-sm space-y-2 mb-4">
          <li className="flex gap-2">
            <span className="text-green-400">✓</span>
            <span>Creating cryptographic identities</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-400">✓</span>
            <span>Issuing and receiving attestations</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-400">✓</span>
            <span>Generating zero-knowledge proofs</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-400">✓</span>
            <span>Verifying proofs off-chain and on-chain</span>
          </li>
        </ul>
        <div className="flex gap-3 mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Explore Core Concepts →</a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">View More Examples →</a>
        </div>
      </div>
    </div>
  );
}

function ConfigurationContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Configuration</h1>
      <p className="text-lg text-white/70">
        Configure Zekay Protocol for your specific use case and deployment environment.
      </p>
    </div>
  );
}

function CoreConceptsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Core Concepts Overview</h1>
      <p className="text-lg text-white/70">
        Understanding the fundamental building blocks of Zekay Protocol.
      </p>
    </div>
  );
}

function AttestationsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Attestations</h1>
      <p className="text-lg text-white/70">
        Deep dive into the attestation system and how claims are issued and managed.
      </p>
    </div>
  );
}

function ZeroKnowledgeProofsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Zero-Knowledge Proofs</h1>
      <p className="text-lg text-white/70">
        Learn how zero-knowledge proofs enable privacy-preserving verification.
      </p>
    </div>
  );
}

function IdentitiesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Identities</h1>
      <p className="text-lg text-white/70">
        Understanding cryptographic identities and how they maintain privacy.
      </p>
    </div>
  );
}

function EpochsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Epochs</h1>
      <p className="text-lg text-white/70">
        How epochs coordinate state transitions across the protocol.
      </p>
    </div>
  );
}

function StateTreesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">State Trees</h1>
      <p className="text-lg text-white/70">
        Understanding Merkle trees and how user state is efficiently managed.
      </p>
    </div>
  );
}

function ArchitectureContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Architecture Overview</h1>
      <p className="text-lg text-white/70">
        High-level overview of Zekay Protocol's system architecture.
      </p>
    </div>
  );
}

function ProtocolOverviewContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">System Design</h1>
      <p className="text-lg text-white/70">
        Detailed protocol design and component interactions.
      </p>
    </div>
  );
}

function SmartContractsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Smart Contracts</h1>
      <p className="text-lg text-white/70">
        On-chain components and verification logic.
      </p>
    </div>
  );
}

function CircuitsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">ZK Circuits</h1>
      <p className="text-lg text-white/70">
        Zero-knowledge circuit design and implementation details.
      </p>
    </div>
  );
}

function PackagesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Package Structure</h1>
      <p className="text-lg text-white/70">
        Detailed breakdown of each package and its responsibilities.
      </p>
    </div>
  );
}

function ApiReferenceContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">API Reference Overview</h1>
      <p className="text-lg text-white/70">
        Complete API documentation for all Zekay Protocol packages.
      </p>
    </div>
  );
}

function ProtocolApiContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Protocol API</h1>
      <p className="text-lg text-white/70">
        Core protocol methods and interfaces.
      </p>
    </div>
  );
}

function ContractApiContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Contract API</h1>
      <p className="text-lg text-white/70">
        Smart contract interfaces and functions.
      </p>
    </div>
  );
}

function UtilitiesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Utilities</h1>
      <p className="text-lg text-white/70">
        Helper functions and utility methods.
      </p>
    </div>
  );
}

function AdvancedContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Advanced Topics</h1>
      <p className="text-lg text-white/70">
        Advanced use cases and optimization techniques.
      </p>
    </div>
  );
}

function CustomCircuitsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Custom Circuits</h1>
      <p className="text-lg text-white/70">
        Building custom zero-knowledge circuits for specific use cases.
      </p>
    </div>
  );
}

function DeploymentContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Deployment</h1>
      <p className="text-lg text-white/70">
        Production deployment guide and best practices.
      </p>
    </div>
  );
}

function SecurityContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Security Best Practices</h1>
      <p className="text-lg text-white/70">
        Security considerations and recommendations for production applications.
      </p>
    </div>
  );
}
