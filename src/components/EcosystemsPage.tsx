import { useState, useEffect } from 'react';
import PrivadoIDImg from '../public/PrivadoID.png';
import QuarkIDImg from '../public/Quark ID.png';
import VerifikImg from '../public/Verifik.png';
import ZekayImg from '../public/Zekay.png';

interface EcosystemsPageProps {
  onNavigate: (page: 'main' | 'about' | 'docs' | 'faq' | 'ecosystems') => void;
}

export default function EcosystemsPage({ onNavigate: _onNavigate }: EcosystemsPageProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-y-auto pointer-events-auto" style={{ overscrollBehavior: 'contain' }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light italic text-white mb-4 md:mb-6 px-4"
            style={{ fontFamily: '"GFS Didot", serif' }}
          >
            Ecosystem & Integrations
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto mb-3 md:mb-4 px-4">
            Zekay connects identity, reputation, and verification across protocols, institutions, and enterprise systems.
          </p>
          <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-4xl mx-auto px-4">
            Built for interoperability, designed for scale.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12 md:space-y-20">
          {/* SECTION 2 – INTEGRATION NETWORK (PARTNER CAROUSEL) */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 
              className="text-2xl md:text-3xl font-light text-white mb-6 md:mb-8 text-center px-4"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Integration Network
            </h2>
            
            {/* Partner Carousel */}
            <div className="relative flex items-center justify-center my-12 md:my-16 h-64 md:h-96">
              {/* Center Zekay Logo */}
              <div className="absolute z-10 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-3 md:p-4 overflow-hidden">
                <img src={ZekayImg} alt="Zekay" className="w-full h-full object-cover rounded-full" />
              </div>

               {/* Orbiting Partners */}
               <div className="absolute inset-0">
                 {/* Partner 1 - Privado ID */}
                 <div
                   className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center p-2"
                   style={{
                     top: '50%',
                     left: '50%',
                     transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-100px) md:translateY(-180px) rotate(-${rotation}deg)`,
                     boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)',
                   }}
                 >
                   <img src={PrivadoIDImg} alt="Privado ID" className="w-full h-full object-contain" />
                 </div>

                 {/* Partner 2 - Quark ID */}
                 <div
                   className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center p-2"
                   style={{
                     top: '50%',
                     left: '50%',
                     transform: `translate(-50%, -50%) rotate(${rotation + 120}deg) translateY(-100px) md:translateY(-180px) rotate(-${rotation + 120}deg)`,
                     boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
                   }}
                 >
                   <img src={QuarkIDImg} alt="Quark ID" className="w-full h-full object-contain" />
                 </div>

                 {/* Partner 3 - Verifik */}
                 <div
                   className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center p-2"
                   style={{
                     top: '50%',
                     left: '50%',
                     transform: `translate(-50%, -50%) rotate(${rotation + 240}deg) translateY(-100px) md:translateY(-180px) rotate(-${rotation + 240}deg)`,
                     boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
                   }}
                 >
                   <img src={VerifikImg} alt="Verifik" className="w-full h-full object-contain" />
                 </div>
               </div>
            </div>

            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-4 md:mb-6 max-w-3xl mx-auto text-center px-4">
              Zekay sits at the center of a growing ecosystem of identity, verification, and infrastructure providers.
              By integrating Zekay's proof layer, partners gain privacy-preserving identity, reputation, and eligibility checks that can be verified across ecosystems without exposing user data.
            </p>
            <p className="text-xs md:text-sm text-white/60 font-light text-center px-4">
              Early integrations include digital identity, biometric verification, and government-backed identity initiatives.
            </p>
          </section>

          {/* SECTION 3 – ACTIVE INTEGRATIONS (CARDS GRID) */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 
              className="text-2xl md:text-3xl font-light text-white mb-8 md:mb-12 text-center px-4"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Active Integrations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - Privado ID */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>
                  Privado ID
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Privado ID provides zero-knowledge identity infrastructure for financial institutions and enterprises.
                  By integrating Zekay proofs, Privado ID can verify eligibility and compliance without exposing underlying personal data, aligning with strict privacy and regulatory requirements.
                </p>
              </div>

              {/* Card 2 - QuarkID */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>
                  QuarkID
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  QuarkID is a government-backed digital identity initiative in Latin America.
                  Zekay's proof layer enables citizen identity and reputation to be verified using zero-knowledge proofs, supporting large-scale e-governance and public-sector use cases without sacrificing privacy.
                </p>
              </div>

              {/* Card 3 - Verifik */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>
                  Verifik
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Verifik is a biometric and identity-verification platform based on zero-knowledge facial proofs.
                  By leveraging Zekay, Verifik can authenticate users and prove uniqueness without storing or revealing raw biometric information, strengthening both security and privacy.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 – INTEGRATION TECHNOLOGY STACK */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 
              className="text-2xl md:text-3xl font-light text-white mb-4 md:mb-6 text-center px-4"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Integration Technology Stack
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto text-center px-4">
              Zekay is designed to fit naturally into existing development workflows and blockchain environments.
              The proof and verification layers are implemented through modern tooling and exposed via SDKs and verifier modules, making privacy-preserving identity and reputation accessible to any stack.
            </p>

             {/* Lists */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
               <div>
                 <h3 className="text-xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>
                   Developer tooling
                 </h3>
                 <ul className="space-y-2">
                   <li className="text-white/80 font-light">TypeScript</li>
                   <li className="text-white/80 font-light">Node.js</li>
                   <li className="text-white/80 font-light">Rust</li>
                   <li className="text-white/80 font-light">WebAssembly (WASM)</li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>
                   Supported ecosystems
                 </h3>
                 <ul className="space-y-2">
                   <li className="text-white/80 font-light">Solana</li>
                   <li className="text-white/80 font-light">Ethereum and EVM-compatible chains <span className="text-white/50 text-xs">(coming soon)</span></li>
                   <li className="text-white/80 font-light">zk-enabled L2s such as Polygon zkEVM and StarkNet <span className="text-white/50 text-xs">(coming soon)</span></li>
                   <li className="text-white/80 font-light">Modern rollup and modular architectures <span className="text-white/50 text-xs">(coming soon)</span></li>
                 </ul>
               </div>
             </div>
           </section>

          {/* SECTION 5 – HOW INTEGRATIONS WORK (FLOW / STEPPER) */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 
              className="text-2xl md:text-3xl font-light text-white mb-4 md:mb-6 text-center px-4"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              How Integrations Work
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto text-center px-4">
              Zekay provides a modular identity and attestation layer that can be embedded into any architecture.
              Applications interact with Zekay through the SDK or verifier module, while all sensitive data remains private to the user.
            </p>

            {/* Stepper */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 relative">
                {/* Connector Lines - Hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-white/10"></div>
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <i className="ri-user-add-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>
                    Issuer
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    A protocol, application, or institution issues an attestation describing behavior, eligibility, or reputation.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <i className="ri-file-shield-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>
                    Attestation
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    The attestation is encrypted and bound to the user's Zekay identity commitment without revealing personal information or wallet data.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <i className="ri-shield-check-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>
                    Proof
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    The user generates a zero-knowledge proof that confirms a specific claim, such as eligibility or reputation above a threshold.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <i className="ri-verified-badge-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>
                    Verification Layer
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    The proof is verified either on-chain or off-chain using Zekay's verifier modules. The verifier learns only that the statement is valid.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <i className="ri-apps-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>
                    Application
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    The application grants access, rights, or actions based on the verified proof—without ever seeing the underlying identity or data.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 – INTEGRATION BENEFITS (FEATURE GRID) */}
          <section className="border-t border-white/10 pt-12 md:pt-16">
            <h2 
              className="text-2xl md:text-3xl font-light text-white mb-8 md:mb-12 text-center px-4"
              style={{ fontFamily: '"GFS Didot", serif' }}
            >
              Why Partners Integrate Zekay
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: '"GFS Didot", serif' }}>
                  Privacy-first infrastructure
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Zekay replaces sensitive data exchanges with cryptographic proofs.
                  Partners can verify trust, behavior, and compliance without holding or processing personal information.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: '"GFS Didot", serif' }}>
                  Enterprise-grade verification
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  The proof system is deterministic, scalable, and designed for high-throughput environments, enabling reliable verification for both Web3 protocols and institutional systems.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: '"GFS Didot", serif' }}>
                  Modular attestation framework
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Issuers define their own attestation schemas, while Zekay guarantees cryptographic soundness, non-linkability, and replay protection.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: '"GFS Didot", serif' }}>
                  Chain-agnostic interoperability
                </h3>
                <p className="text-white/80 font-light leading-relaxed">
                  Zekay proofs can be verified across multiple chains and environments, allowing reputation and identity to move with users instead of being locked into a single platform.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7 – CALL TO ACTION (PARTNER CONTACT) */}
          <section className="border-t border-white/10 pt-12 md:pt-16 pb-8">
            <div className="text-center max-w-2xl mx-auto px-4">
              <h2 
                className="text-2xl md:text-3xl font-light text-white mb-4 md:mb-6"
                style={{ fontFamily: '"GFS Didot", serif' }}
              >
                Become an Integration Partner
              </h2>
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6 md:mb-8">
                Interested in integrating Zekay into your application, protocol, or enterprise system?
                Our team works closely with partners to design privacy-preserving identity and reputation flows that fit existing architectures and regulatory requirements.
              </p>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-all font-medium mb-3">
                Contact Us
              </button>
               <p className="text-xs md:text-sm text-white/60 font-light">
                 Email: contact@zekay.io
               </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
