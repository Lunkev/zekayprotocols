interface AboutPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs' | 'faq' | 'ecosystems') => void;
}

export default function AboutPage({ onNavigate: _onNavigate }: AboutPageProps) {
  return (
    <div className="absolute inset-0 overflow-y-auto pointer-events-auto" style={{ overscrollBehavior: 'contain' }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light italic text-white mb-4 md:mb-6 px-4"
            style={{ fontFamily: '"GFS Didot", serif' }}
          >
            About Zekay Protocol
        </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto px-4">
            Zekay Protocol is a privacy-first reputation infrastructure enabling trust in decentralized systems — without requiring users to reveal their identity.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12 md:space-y-16">
          {/* Belief Statement */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
              We believe the future of trust must be <span className="text-white font-medium">anonymous</span>, <span className="text-white font-medium">verifiable</span>, and <span className="text-white font-medium">composable</span>. In a world where data breaches, censorship, and digital profiling are increasingly common, Zekay offers an alternative: a cryptographic foundation for identity and reputation that protects users by design.
            </p>
          </section>

          {/* Description */}
          <section>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
              By combining zero-knowledge proofs with modular smart contracts, Zekay allows applications to issue, verify, and consume user reputation — without ever storing personal data. Whether it's a lending platform verifying borrower reliability, a DAO gating access based on contribution history, or a network of communities sharing trust signals across ecosystems, Zekay provides the infrastructure for verifiable interactions between pseudonymous actors.
            </p>
          </section>

          {/* Why It Matters */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 md:mb-8 flex items-center gap-3">
              <i className="ri-lightbulb-line text-2xl md:text-3xl"></i>
              Why It Matters
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6 md:mb-8">
              Today's digital trust systems rely on fragile assumptions: identity linked to KYC, reputation tied to wallets, and user behavior indexed by opaque platforms. This leads to privacy loss, manipulation, and silos that limit innovation.
            </p>
            <p className="text-base md:text-lg text-white/90 font-light mb-4 md:mb-6">
              Zekay removes these constraints. Our protocol enables:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-3">
                  <i className="ri-shield-check-line text-xl md:text-2xl text-white mt-1"></i>
                  <div>
                    <h3 className="text-white font-medium mb-2">Anonymous identity with cryptographic uniqueness</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-3">
                  <i className="ri-verified-badge-line text-xl md:text-2xl text-white mt-1"></i>
                  <div>
                    <h3 className="text-white font-medium mb-2 text-sm md:text-base">Verifiable reputation without exposing history</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-3">
                  <i className="ri-links-line text-xl md:text-2xl text-white mt-1"></i>
                  <div>
                    <h3 className="text-white font-medium mb-2 text-sm md:text-base">Cross-platform interoperability of trust signals</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-3">
                  <i className="ri-file-shield-line text-xl md:text-2xl text-white mt-1"></i>
                  <div>
                    <h3 className="text-white font-medium mb-2">Compliant, zero-knowledge proofs of eligibility and behavior</h3>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-base md:text-lg text-white/90 font-light mt-6 md:mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
              <span className="text-white font-medium">The result:</span> applications can enforce trust-based access, scoring, or ranking — without ever knowing who the user is.
            </p>
          </section>

          {/* What We're Building */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 md:mb-8 flex items-center gap-3">
              <i className="ri-hammer-line text-2xl md:text-3xl"></i>
              What We're Building
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6 md:mb-8">
              Zekay Protocol consists of:
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:border-white/20 transition-all">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white/10 rounded-lg p-2 md:p-3">
                    <i className="ri-file-shield-2-line text-xl md:text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-base md:text-lg mb-2">Privacy-Preserving Smart Contract Layer</h3>
                    <p className="text-white/70 font-light text-sm md:text-base">For identity and reputation management</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:border-white/20 transition-all">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white/10 rounded-lg p-2 md:p-3">
                    <i className="ri-file-list-3-line text-xl md:text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-base md:text-lg mb-2">Modular Attestation Framework</h3>
                    <p className="text-white/70 font-light text-sm md:text-base">For defining how reputation is issued</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:border-white/20 transition-all">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white/10 rounded-lg p-2 md:p-3">
                    <i className="ri-user-settings-line text-xl md:text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-base md:text-lg mb-2">Provable User State System</h3>
                    <p className="text-white/70 font-light text-sm md:text-base">Using zero-knowledge proofs</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:border-white/20 transition-all">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white/10 rounded-lg p-2 md:p-3">
                    <i className="ri-code-s-slash-line text-xl md:text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-base md:text-lg mb-2">Open APIs and Developer Tools</h3>
                    <p className="text-white/70 font-light text-sm md:text-base">To integrate with any dApp or system</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mt-6 md:mt-8">
              Our architecture is optimized for extensibility, gas efficiency, and cross-chain compatibility. Developers can define custom reputation models, build portable identities, or layer anonymous credentials into existing flows — all under a shared cryptographic standard.
            </p>
          </section>

          {/* Our Vision */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 md:mb-8 flex items-center gap-3">
              <i className="ri-eye-line text-2xl md:text-3xl"></i>
              Our Vision
            </h2>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-4 md:mb-6">
                We envision a digital world where users own their reputation, applications respect privacy by default, and composable trust flows across protocols.
              </p>
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-4 md:mb-6">
                Zekay is not just a system — it's a foundation for a new class of applications where trust is established without exposure.
              </p>
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                We are building for the builders of privacy-respecting infrastructure, reputation-based coordination, anonymous finance, and next-generation digital governance.
              </p>
            </div>
          </section>

          {/* Use Cases */}
          <section className="border-t border-white/10 pt-12 md:pt-16 pb-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 flex items-center gap-3">
              <i className="ri-apps-line text-2xl md:text-3xl"></i>
              Use Cases
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-8 md:mb-12">
              Zekay Protocol enables a new class of applications that require trust, verification, and accountability — without identity exposure. By combining zero-knowledge cryptography with modular smart contracts, developers can build systems where reputation is private yet provable.
            </p>

            <div className="space-y-6">
              {/* 1. Decentralized Governance */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <i className="ri-government-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-xl mb-3">1. Decentralized Governance</h3>
                    <p className="text-white/80 font-light leading-relaxed mb-3">
                      DAOs and on-chain communities can finally make decisions based on verifiable participation rather than token weight or public addresses. With Zekay, members can vote or delegate using private reputation proofs — ensuring Sybil resistance and fairness while keeping all identities anonymous.
                    </p>
                    <p className="text-white/90 font-medium">
                      Governance becomes trust-based, not trace-based.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Privacy-Preserving DeFi */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <i className="ri-bank-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-xl mb-3">2. Privacy-Preserving DeFi</h3>
                    <p className="text-white/80 font-light leading-relaxed mb-3">
                      Financial reputation doesn't need to reveal financial history. Protocols can use Zekay to issue private credit scores, proof-of-repayment badges, or eligibility credentials for under-collateralized loans. Borrowers prove reliability without exposing their balance, past transactions, or wallet identity.
                    </p>
                    <p className="text-white/90 font-medium">
                      Lending becomes more inclusive — and more secure.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Cross-Ecosystem Reputation */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <i className="ri-community-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-xl mb-3">3. Cross-Ecosystem Reputation</h3>
                    <p className="text-white/80 font-light leading-relaxed mb-3">
                      In today's Web3, reputation is fragmented. Zekay unifies it through portable reputation proofs that can be verified across platforms. A contributor in one DAO can prove trustworthiness to another, or a developer on one chain can prove credibility on another — all without ever linking wallets or addresses.
                    </p>
                    <p className="text-white/90 font-medium">
                      Reputation becomes composable across the decentralized web.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Anonymous Social Identity */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <i className="ri-user-star-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-xl mb-3">4. Anonymous Social Identity</h3>
                    <p className="text-white/80 font-light leading-relaxed mb-3">
                      Social platforms and creator networks can use Zekay to replace "profiles" with verifiable personas. Users earn karma, trust scores, or badges that can be proven cryptographically without revealing any posting history or personal data.
                    </p>
                    <p className="text-white/90 font-medium">
                      It enables authentic community reputation — without surveillance or doxxing.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Zero-Knowledge Compliance */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-xl mb-3">5. Zero-Knowledge Compliance</h3>
                    <p className="text-white/80 font-light leading-relaxed mb-3">
                      Enterprises and regulated protocols can meet compliance requirements through zk-verified credentials. Instead of submitting KYC documents, users can generate cryptographic proofs that confirm eligibility — age, region, uniqueness, accreditation — without sharing raw information.
                    </p>
                    <p className="text-white/90 font-medium">
                      Compliance becomes math-based, not data-based.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. AI & Autonomous Agents */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <i className="ri-robot-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-xl mb-3">6. AI & Autonomous Agents</h3>
                    <p className="text-white/80 font-light leading-relaxed mb-3">
                      As AI agents become actors within digital ecosystems, they too need identity and reputation frameworks. Zekay provides agents with provable histories of reliability and performance while keeping their internal data private.
                    </p>
                    <p className="text-white/90 font-medium">
                      This enables verifiable coordination between human and machine participants in a trustless environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* 7. Supply Chains & Verification Networks */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <i className="ri-truck-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-xl mb-3">7. Supply Chains & Verification Networks</h3>
                    <p className="text-white/80 font-light leading-relaxed">
                      Organizations can issue proofs of origin, sustainability, or authenticity through Zekay's attestation system. Partners or regulators can verify these proofs cryptographically — ensuring tamper-proof transparency without exposing sensitive commercial data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="mt-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Summary</h3>
              <p className="text-lg text-white/90 font-light leading-relaxed mb-4">
                Across all domains, Zekay provides the same core value: <span className="text-white font-medium">verifiable trust without exposure.</span>
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed">
                From individuals to institutions, from DAOs to AI networks — Zekay is the privacy layer connecting reputation, identity, and verification in a decentralized world.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
