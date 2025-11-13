import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface FAQPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs' | 'faq' | 'ecosystems') => void;
}

export default function FAQPage({ onNavigate: _onNavigate }: FAQPageProps) {
  return (
    <div className="absolute inset-0 overflow-y-auto pointer-events-auto" style={{ overscrollBehavior: 'contain' }}>
      <div className="max-w-5xl mx-auto px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 
            className="text-6xl font-light italic text-white mb-6"
            style={{ fontFamily: '"GFS Didot", serif' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto">
            Answers to the key questions about Zekay Protocol, its technology, security model, and integration capabilities.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {/* A. General */}
          <section>
            <h2 
              className="text-2xl font-light text-white/60 mb-6"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              General
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="general-1" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  What is Zekay Protocol?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Zekay Protocol is a privacy-first infrastructure for identity, reputation, and verification.
                  It enables systems to verify trust, behavior, and eligibility using zero-knowledge proofs—without revealing user data, identity, or wallet history.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-2" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  What problem does it solve?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Digital identity systems today force participants to choose between privacy and participation.
                  KYC leaks personal information, and blockchain wallets expose everything publicly.
                  Zekay solves this by letting applications verify truth, trust, and reputation without exposing any underlying data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-3" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  How is Zekay different from traditional identity systems?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Traditional systems depend on central authorities, correlation, and data collection.
                  Zekay removes these elements entirely.
                  It offers anonymous, verifiable identity and reputation through cryptographic commitments, not personal information or wallet linkage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* B. Technology */}
          <section>
            <h2 
              className="text-2xl font-light text-white/60 mb-6"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Technology
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="tech-1" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  How does the Zekay identity system work?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Each user creates a cryptographic identity commitment derived from a private secret.
                  This commitment allows them to interact anonymously while still proving uniqueness, membership, and reputation.
                  No personal information or on-chain addresses are ever exposed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tech-2" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  What are attestations?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Attestations are encrypted, verifiable statements issued by trusted applications or institutions.
                  They represent behavior, participation, eligibility, or reputation.
                  Users convert these into zero-knowledge proofs to demonstrate truth without revealing the underlying data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tech-3" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  How does zero-knowledge verification work?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  A user generates a proof based on identity and attestations.
                  The verifier checks this proof on-chain or off-chain.
                  The verifier learns only that the statement is valid—nothing about the user, the identity, or the data behind the proof.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tech-4" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Which blockchains does Zekay support?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Zekay is chain-agnostic.
                  The proof and verification layers are designed to integrate with EVM chains, Solana, L2 rollups, and modular ecosystems.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* C. Privacy & Security */}
          <section>
            <h2 
              className="text-2xl font-light text-white/60 mb-6"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Privacy & Security
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="privacy-1" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Does Zekay store any personal data?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  No.
                  Zekay never stores, transmits, or accesses personal data.
                  All operations occur through anonymous cryptographic commitments and zero-knowledge proofs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy-2" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  How does Zekay prevent correlation between proofs?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  All proofs are non-linkable and unique to each verification.
                  No proof can be connected to another, ensuring that users cannot be tracked or profiled across interactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy-3" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Are proofs reusable?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  No.
                  Proofs are non-reusable, protecting against replay attacks and preventing any form of traceability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy-4" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Is Zekay audited?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  All circuits and smart contracts undergo independent third-party audits and continuous internal security reviews.
                  Formal verification and strict threat modeling are applied to ensure protocol integrity.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* D. Integrations & Enterprise */}
          <section>
            <h2 
              className="text-2xl font-light text-white/60 mb-6"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Integrations & Enterprise
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="integration-1" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Can Zekay integrate with existing systems?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Yes.
                  Zekay can be integrated as a privacy layer above existing identity providers, governance systems, or application infrastructures.
                  It does not require major architecture changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="integration-2" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Who can issue attestations?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Any verified application, protocol, or institution can issue attestations.
                  Issuers define the reputation or behavior statements, while Zekay guarantees cryptographic privacy and verification.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="integration-3" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Can enterprises or governments use Zekay?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Yes.
                  Zekay's architecture supports compliance-critical and large-scale environments such as financial institutions and national identity systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="integration-4" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  What is required to adopt Zekay?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Integration requires the Zekay SDK or verifier modules.
                  Applications can issue attestations, verify proofs, or embed Zekay identities with minimal engineering overhead.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* E. Open Source & Governance */}
          <section>
            <h2 
              className="text-2xl font-light text-white/60 mb-6"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Open Source & Governance
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="opensource-1" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Is Zekay open-source?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Yes.
                  All core components, circuits, and SDKs are available on GitHub under open-source licenses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="opensource-2" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  How can developers contribute?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  Developers can open issues, submit pull requests, propose improvements, or participate in governance discussions through the Zekay GitHub organization.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="opensource-3" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-white/80 text-left font-light py-5 [&>svg]:text-white/60 bg-transparent hover:bg-transparent">
                  Where can I find the roadmap?
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-light leading-relaxed pb-5">
                  The roadmap is published and maintained in the Zekay documentation and GitHub repository, outlining upcoming features, security audits, and protocol upgrades.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

