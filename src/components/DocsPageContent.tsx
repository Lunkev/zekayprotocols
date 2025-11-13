// Architecture Content
export function ArchitectureContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Architecture Overview</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay Protocol is built as a layered system, where each layer performs a specific cryptographic function yet remains interoperable. Together, they form a unified framework for private reputation and identity.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>System Overview</h2>
        <p className="text-white/80 font-light leading-relaxed">
          The architecture follows a strict separation of concerns, ensuring each layer can operate independently while maintaining cryptographic consistency. This design allows for parallel development, modular upgrades, and flexible deployment across different blockchain networks.
        </p>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>The Four Layers</h2>
      
      <div className="space-y-6 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 rounded-lg p-3">
              <i className="ri-user-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Layer 1: Identity</h3>
              <p className="text-white/60 text-sm">Anonymous Cryptographic Commitments</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Creates unique, anonymous identity commitments. These commitments represent users in the network without exposing keys, addresses, or personal data. Each identity is derived from a secret using Poseidon hashing, ensuring both uniqueness and unlinkability.
          </p>
          <div className="bg-black/40 rounded-lg p-4 mt-4">
            <p className="text-white/70 text-sm font-mono">
              commitment = poseidon(secret, nullifier)
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 rounded-lg p-3">
              <i className="ri-file-shield-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Layer 2: Attestation</h3>
              <p className="text-white/60 text-sm">Encrypted Reputation Issuance</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Enables trusted entities or protocols to issue encrypted reputation data — such as contribution, reliability, or behavior metrics. These attestations are verifiable but never reveal their contents. Attesters sign claims that are stored in Merkle trees for efficient proof generation.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-black/40 rounded-lg p-3">
              <p className="text-white/60 text-xs mb-1">Attestation Type</p>
              <p className="text-white text-sm">Signed reputation claims</p>
            </div>
            <div className="bg-black/40 rounded-lg p-3">
              <p className="text-white/60 text-xs mb-1">Storage</p>
              <p className="text-white text-sm">Merkle tree structure</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 rounded-lg p-3">
              <i className="ri-shield-check-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Layer 3: Proof Generation</h3>
              <p className="text-white/60 text-sm">Zero-Knowledge Proof System</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Generates zero-knowledge proofs that confirm the authenticity of identity and reputation claims. Users can prove that a statement is true without sharing any information beyond that fact. Built on Groth16 and PLONK proving systems for optimal performance.
          </p>
          <div className="bg-black/40 rounded-lg p-4 mt-4">
            <p className="text-white/70 text-sm">
              <span className="text-green-400 font-mono">Input:</span> Identity + Attestations + Statement
            </p>
            <p className="text-white/70 text-sm mt-2">
              <span className="text-green-400 font-mono">Output:</span> ZK-Proof (π)
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 rounded-lg p-3">
              <i className="ri-checkbox-circle-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Layer 4: Verification</h3>
              <p className="text-white/60 text-sm">On-Chain and Off-Chain Validation</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Validates proofs on-chain or off-chain using lightweight verifier modules. Applications can use these verifications to grant access, assign value, or automate actions. Verifiers are optimized for gas efficiency and can process proofs in milliseconds.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-black/40 rounded-lg p-3">
              <p className="text-white/60 text-xs mb-1">On-Chain</p>
              <p className="text-white text-sm">Smart contract verification</p>
            </div>
            <div className="bg-black/40 rounded-lg p-3">
              <p className="text-white/60 text-xs mb-1">Off-Chain</p>
              <p className="text-white text-sm">API-based verification</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Data Flow</h2>
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
        <ol className="space-y-5 text-white/80">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">1</span>
            <div>
              <p className="text-white font-medium mb-1">Identity Initialization</p>
              <p className="text-sm">A user initializes a Zekay Identity commitment using a randomly generated secret.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">2</span>
            <div>
              <p className="text-white font-medium mb-1">Attestation Issuance</p>
              <p className="text-sm">An application or attester issues one or more attestations to that identity commitment.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">3</span>
            <div>
              <p className="text-white font-medium mb-1">Proof Compilation</p>
              <p className="text-sm">The user compiles attestations into a zero-knowledge proof of eligibility or reputation.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">4</span>
            <div>
              <p className="text-white font-medium mb-1">Verification & Action</p>
              <p className="text-sm">A verifier (e.g. a DAO, dApp, or DeFi protocol) checks the proof and executes logic accordingly.</p>
            </div>
          </li>
        </ol>
        <div className="bg-white/10 rounded-lg p-4 mt-6">
          <p className="text-white/90 font-light italic text-sm">
            Throughout the process, no data is shared, stored, or linkable across interactions. Each proof is ephemeral — verifiable once, reusable nowhere.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Technical Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-code-s-slash-line text-xl"></i>
            Smart Contracts
          </h3>
          <p className="text-white/70 text-sm mb-3">Solidity-based verifier and state management</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">@zekay/contracts</code>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-stack-line text-xl"></i>
            ZK Circuits
          </h3>
          <p className="text-white/70 text-sm mb-3">Circom-based proof generation</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">@zekay/circuits</code>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-terminal-box-line text-xl"></i>
            Core SDK
          </h3>
          <p className="text-white/70 text-sm mb-3">TypeScript/JavaScript client library</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">@zekay/core</code>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-tools-line text-xl"></i>
            Utilities
          </h3>
          <p className="text-white/70 text-sm mb-3">Helper functions and cryptographic utils</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">@zekay/utils</code>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border-l-4 border-white/20 rounded-r-xl p-6">
        <div className="flex items-start gap-3">
          <i className="ri-information-line text-xl text-white/70 mt-1"></i>
          <div>
            <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Performance Optimized</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Zekay's architecture is optimized for gas efficiency, proof generation speed, and verification latency. Proofs can be generated in seconds and verified in milliseconds, making it practical for real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Identity Content
export function IdentityContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Identity System</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay's identity system introduces <span className="text-white font-medium">anonymous uniqueness</span> — a method to distinguish individual participants without exposing who they are.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>How It Works</h2>
        <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
          Each user generates a cryptographic identity commitment, a hash that represents them throughout the protocol. This commitment is derived from a secret key and can be used across multiple applications while remaining unlinkable.
        </p>
        <div className="bg-black/40 rounded-lg p-4">
          <pre className="text-sm text-white/90">
            <code>{`// Identity generation
const secret = generateRandomSecret();
const nullifier = generateNullifier(secret);
const commitment = poseidon([secret, nullifier]);

// commitment is now your public identity
// secret and nullifier remain private`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-ghost-line text-3xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Anonymous</h3>
          </div>
          <p className="text-white/70 font-light leading-relaxed">
            Identities reveal no information about the user, their wallet, or their transaction history. All proofs are unlinkable.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-fingerprint-line text-3xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Unique</h3>
          </div>
          <p className="text-white/70 font-light leading-relaxed">
            Each identity is cryptographically unique and cannot be duplicated or forged, preventing Sybil attacks.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-refresh-line text-3xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Renewable</h3>
          </div>
          <p className="text-white/70 font-light leading-relaxed">
            Users can generate new identities or rotate existing ones while preserving attestation history through migration proofs.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-links-line text-3xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Portable</h3>
          </div>
          <p className="text-white/70 font-light leading-relaxed">
            Identities work across all applications and chains that integrate Zekay, enabling true cross-ecosystem reputation.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Identity vs Wallet Address</h2>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-white font-medium flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
              <i className="ri-wallet-line text-xl"></i>
              Traditional Wallet
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <i className="ri-close-circle-line text-red-400 mt-0.5"></i>
                <p className="text-white/70 text-sm">Public transaction history</p>
              </div>
              <div className="flex items-start gap-2">
                <i className="ri-close-circle-line text-red-400 mt-0.5"></i>
                <p className="text-white/70 text-sm">Linkable across platforms</p>
              </div>
              <div className="flex items-start gap-2">
                <i className="ri-close-circle-line text-red-400 mt-0.5"></i>
                <p className="text-white/70 text-sm">Permanent record</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-white font-medium flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
              <i className="ri-shield-user-line text-xl"></i>
              Zekay Identity
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-green-400 mt-0.5"></i>
                <p className="text-white/70 text-sm">No public history</p>
              </div>
              <div className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-green-400 mt-0.5"></i>
                <p className="text-white/70 text-sm">Unlinkable proofs</p>
              </div>
              <div className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-green-400 mt-0.5"></i>
                <p className="text-white/70 text-sm">Revocable & renewable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Revocation & Recovery</h3>
        <p className="text-white/80 font-light leading-relaxed mb-4">
          The system supports revocable and renewable identities, ensuring that users maintain control and applications can meet regulatory or community-based standards. When an identity is compromised or needs renewal, users can:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <i className="ri-arrow-right-s-line text-white/70 mt-1"></i>
            <span className="text-white/80">Generate a new identity commitment</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-arrow-right-s-line text-white/70 mt-1"></i>
            <span className="text-white/80">Prove ownership of the old identity</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="ri-arrow-right-s-line text-white/70 mt-1"></i>
            <span className="text-white/80">Migrate attestation history using a migration proof</span>
          </li>
        </ul>
      </div>

      <div className="bg-white/5 border-l-4 border-white/20 rounded-r-xl p-6 mt-8">
        <p className="text-white/90 font-light leading-relaxed italic text-lg">
          "In practical terms, a Zekay Identity acts as a mathematical fingerprint — always valid, never visible."
        </p>
      </div>
    </div>
  );
}

// Attestation Content
export function AttestationContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Attestation Framework</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        The attestation layer transforms subjective reputation into verifiable cryptographic evidence.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>What is an Attestation?</h2>
        <p className="text-lg text-white/90 font-light leading-relaxed mb-6">
          An attestation is a digitally signed statement about a user's behavior, performance, or participation. For example, a DAO could issue an attestation confirming that a member contributed to governance, or a DeFi protocol could record that a borrower repaid their position on time.
        </p>
        <div className="bg-black/40 rounded-lg p-4">
          <pre className="text-sm text-white/90">
            <code>{`interface Attestation {
  recipient: IdentityCommitment;  // Who receives it
  attester: Address;              // Who issued it
  data: EncryptedData;            // Reputation metrics
  timestamp: number;              // When issued
  signature: Signature;           // Cryptographic proof
}`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Attestation Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-government-line text-2xl text-white"></i>
            <h3 className="text-lg font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Governance</h3>
          </div>
          <p className="text-white/70 text-sm">Voting participation, proposal authorship, delegation activity</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-bank-line text-2xl text-white"></i>
            <h3 className="text-lg font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Financial</h3>
          </div>
          <p className="text-white/70 text-sm">Loan repayment, credit score, transaction reliability</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-group-line text-2xl text-white"></i>
            <h3 className="text-lg font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Social</h3>
          </div>
          <p className="text-white/70 text-sm">Community karma, content quality, moderation trust</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-shield-check-line text-2xl text-white"></i>
            <h3 className="text-lg font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Compliance</h3>
          </div>
          <p className="text-white/70 text-sm">KYC verification, jurisdiction proof, accreditation</p>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Issuance Process</h2>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold">1</span>
            <div>
              <p className="text-white font-medium mb-1">Attester Registration</p>
              <p className="text-white/70 text-sm">Entity registers as a trusted attestation issuer</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold">2</span>
            <div>
              <p className="text-white font-medium mb-1">Data Collection</p>
              <p className="text-white/70 text-sm">Attester observes or verifies user behavior/credentials</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold">3</span>
            <div>
              <p className="text-white font-medium mb-1">Attestation Creation</p>
              <p className="text-white/70 text-sm">Data is encrypted and signed with attester's key</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold">4</span>
            <div>
              <p className="text-white font-medium mb-1">Delivery to User</p>
              <p className="text-white/70 text-sm">Attestation is added to user's private state tree</p>
            </div>
          </li>
        </ol>
      </div>

      <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
        Each attestation is encrypted, timestamped, and verifiable. Issuers can define custom schemas for the data they record — contribution scores, role verifications, or compliance checks — while Zekay ensures that the structure remains mathematically sound and interoperable.
      </p>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Decentralized Trust</h3>
        <p className="text-white/80 font-light leading-relaxed">
          By decentralizing attestation issuance, Zekay allows entire ecosystems to build trust frameworks without central authorities. Reputation becomes programmable, standardized, and privacy-safe — enabling new models of coordination impossible in traditional systems.
        </p>
      </div>
    </div>
  );
}

// Proof Content
export function ProofContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Proof & Verification Layer</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        At the heart of Zekay lies the zero-knowledge proof system, which turns data into trustable, non-revealing evidence. This is where privacy meets verifiability.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Zero-Knowledge Proofs Explained</h2>
        <p className="text-lg text-white/90 font-light leading-relaxed">
          A zero-knowledge proof allows you to prove a statement is true without revealing any information about why it's true. In Zekay, this means proving you meet certain criteria (reputation threshold, membership, compliance) without exposing your identity, attestations, or behavioral data.
        </p>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Example Proof Statements</h2>
      
      <div className="space-y-4 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <i className="ri-shield-check-line text-2xl text-white mt-1"></i>
            <div>
              <p className="text-white/90 font-medium mb-2">"I am a verified participant of DAO X"</p>
              <p className="text-white/60 text-sm">Proves membership without revealing wallet or voting history</p>
            </div>
          </div>
        </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <i className="ri-bar-chart-line text-2xl text-white mt-1"></i>
            <div>
              <p className="text-white/90 font-medium mb-2">"My reputation score is above 100"</p>
              <p className="text-white/60 text-sm">Proves threshold without revealing exact score or source</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <i className="ri-check-double-line text-2xl text-white mt-1"></i>
            <div>
              <p className="text-white/90 font-medium mb-2">"I passed compliance requirement Y"</p>
              <p className="text-white/60 text-sm">Proves eligibility without sharing personal documents</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Proof Generation Process</h2>
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
        <pre className="text-sm text-white/90 overflow-x-auto">
          <code>{`// Generate a reputation proof
const proof = await zekay.prover.generateProof({
  identity: userIdentity,
  attestations: userAttestations,
  statement: {
    type: 'reputation_threshold',
    minScore: 100,
    attesterAddress: DAO_CONTRACT
  }
});

// Proof contains:
// - Public signals (statement being proven)
// - Zero-knowledge proof (π)
// - No private data`}</code>
        </pre>
      </div>

      <p className="text-lg text-white/80 font-light leading-relaxed mb-12">
        These proofs can be verified instantly by applications through on-chain or off-chain verifiers. No one learns the user's identity, the exact data behind the proof, or the source of their attestations.
      </p>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Proof Properties</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-links-off-line text-xl"></i>
            Non-linkable
          </h3>
          <p className="text-white/70 text-sm mb-3">No proof can be connected to another, even if generated by the same user.</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">Proof₁ ≠ Proof₂</code>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-forbid-line text-xl"></i>
            Non-reusable
          </h3>
          <p className="text-white/70 text-sm mb-3">Proofs contain nullifiers preventing replay attacks and double-spending.</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">nullifier check</code>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-checkbox-circle-line text-xl"></i>
            Deterministic
          </h3>
          <p className="text-white/70 text-sm mb-3">Verification produces identical results across all verifiers.</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">verify(π) → true/false</code>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-speed-line text-xl"></i>
            Scalable
          </h3>
          <p className="text-white/70 text-sm mb-3">Optimized circuits enable fast generation and verification.</p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">&lt;100ms verification</code>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Verification Methods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-cloud-line text-2xl"></i>
            On-Chain Verification
          </h3>
          <p className="text-white/70 text-sm mb-4">Trustless verification through smart contracts on Ethereum, Polygon, and other EVM chains.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-line text-green-400"></i>
              <span className="text-white/70 text-xs">Trustless</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-line text-green-400"></i>
              <span className="text-white/70 text-xs">Gas-optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-line text-green-400"></i>
              <span className="text-white/70 text-xs">Immutable</span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2" style={{ fontFamily: '"GFS Didot", serif' }}>
            <i className="ri-server-line text-2xl"></i>
            Off-Chain Verification
          </h3>
          <p className="text-white/70 text-sm mb-4">Fast API-based verification for applications requiring instant response.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-line text-green-400"></i>
              <span className="text-white/70 text-xs">Millisecond latency</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-line text-green-400"></i>
              <span className="text-white/70 text-xs">No gas costs</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-line text-green-400"></i>
              <span className="text-white/70 text-xs">High throughput</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Cryptographic Guarantee</h3>
        <p className="text-xl text-white/90 font-light leading-relaxed italic">
          "In Zekay, verification is not a service — it's a cryptographic guarantee. Every proof is mathematically sound, independently verifiable, and privacy-preserving by construction."
        </p>
      </div>
    </div>
  );
}

// Continue with remaining components...
export function DeveloperContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Developer Framework</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay provides modular developer tools for integrating private identity and reputation features into any application. Build privacy-preserving systems without deep cryptography expertise.
      </p>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Installation</h2>
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <i className="ri-terminal-box-line text-xl text-white/70"></i>
          <span className="text-white/70 text-sm font-mono">npm</span>
        </div>
        <pre className="bg-black/60 rounded-lg p-4 overflow-x-auto mb-4">
          <code className="text-green-400 text-sm">npm install @zekay/core @zekay/contracts @zekay/circuits</code>
        </pre>
        <div className="flex items-center gap-2 mb-4">
          <i className="ri-terminal-box-line text-xl text-white/70"></i>
          <span className="text-white/70 text-sm font-mono">yarn</span>
        </div>
        <pre className="bg-black/60 rounded-lg p-4 overflow-x-auto">
          <code className="text-green-400 text-sm">yarn add @zekay/core @zekay/contracts @zekay/circuits</code>
        </pre>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>SDK Core Functions</h2>
      
      <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
        The Zekay SDK abstracts complex cryptographic operations into simple developer functions:
      </p>

      <div className="space-y-6 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-user-add-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Create Private Identities</h3>
          </div>
          <div className="bg-black/60 rounded-lg p-4">
            <pre className="text-sm text-white/90 overflow-x-auto">
              <code>{`const identity = await zekay.createIdentity();
// Returns: { commitment, secret, nullifier }`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-file-shield-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Issue and Manage Attestations</h3>
          </div>
          <div className="bg-black/60 rounded-lg p-4">
            <pre className="text-sm text-white/90 overflow-x-auto">
              <code>{`const attestation = await zekay.issueAttestation({
  recipient: userCommitment,
  data: { score: 150, role: 'contributor' },
  attester: attesterAddress
});`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-shield-check-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Generate and Verify ZK Proofs</h3>
          </div>
          <div className="bg-black/60 rounded-lg p-4">
            <pre className="text-sm text-white/90 overflow-x-auto">
              <code>{`const proof = await zekay.generateProof({
  identity,
  attestations,
  statement: 'reputation_above_100'
});

const isValid = await zekay.verifyProof(proof);`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Complete Integration Example</h2>
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12">
        <pre className="text-sm text-white/90 overflow-x-auto">
          <code>{`import { ZekayProtocol } from '@zekay/core';
import { ethers } from 'ethers';

// 1. Initialize the SDK
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const zekay = new ZekayProtocol({
  provider,
  contractAddress: ZEKAY_CONTRACT,
  chainId: 1
});

// 2. Create user identity
const identity = await zekay.createIdentity();
console.log('Identity created:', identity.commitment);

// 3. Attester issues reputation
const attestation = await zekay.issueAttestation({
  recipient: identity.commitment,
  data: { contributionScore: 150 },
  attester: DAO_ADDRESS
});

// 4. User generates proof
const proof = await zekay.generateProof({
  identity,
  attestations: [attestation],
  statement: {
    type: 'min_score',
    threshold: 100
  }
});

// 5. Application verifies proof
const verified = await zekay.verifyProof(proof);
if (verified) {
  // Grant access, unlock feature, etc.
  await grantAccess(proof.publicSignals);
}`}</code>
        </pre>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>API Endpoints</h2>
      <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
        The API Toolkit supports both REST and GraphQL endpoints for off-chain verification, user state management, and proof lifecycle tracking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3" style={{ fontFamily: '"GFS Didot", serif' }}>REST API</h3>
          <div className="bg-black/60 rounded-lg p-3 mb-3">
            <code className="text-green-400 text-xs">POST /api/v1/verify</code>
          </div>
          <p className="text-white/70 text-sm">Verify proofs off-chain for instant results</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-3" style={{ fontFamily: '"GFS Didot", serif' }}>GraphQL API</h3>
          <div className="bg-black/60 rounded-lg p-3 mb-3">
            <code className="text-green-400 text-xs">query getProofStatus</code>
          </div>
          <p className="text-white/70 text-sm">Track proof lifecycle and state</p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Developer Resources</h3>
        <div className="grid grid-cols-3 gap-4">
          <a href="#" className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all flex items-center gap-2 text-white/80 text-sm">
            <i className="ri-book-open-line"></i>
            <span>API Reference</span>
          </a>
          <a href="#" className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all flex items-center gap-2 text-white/80 text-sm">
            <i className="ri-code-box-line"></i>
            <span>Code Examples</span>
          </a>
          <a href="#" className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all flex items-center gap-2 text-white/80 text-sm">
            <i className="ri-github-line"></i>
            <span>GitHub Repos</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function UseCasesContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Use Cases</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay enables privacy-based coordination across multiple sectors of the decentralized ecosystem. From governance to AI, explore how anonymous reputation transforms digital trust.
      </p>

      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <i className="ri-government-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Decentralized Governance</h3>
              <p className="text-white/60 text-sm">Private voting & reputation-weighted decisions</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            DAOs can implement private, reputation-weighted voting — allowing members to prove participation or contribution without revealing wallets. This eliminates Sybil attacks while maintaining fair and verifiable governance.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Real-World Application:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Anonymous voting with proof of membership</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Reputation-weighted governance without public scores</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Sybil-resistant participation tracking</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <i className="ri-bank-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Privacy-Preserving DeFi</h3>
              <p className="text-white/60 text-sm">Anonymous credit & under-collateralized lending</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Protocols can replace public credit scoring with zk reputation proofs. Borrowers prove repayment reliability or financial maturity without sharing transaction data, enabling under-collateralized lending and fairer access to liquidity.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Real-World Application:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Credit scores without transaction history</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Under-collateralized loans based on reputation</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Anonymous proof of solvency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <i className="ri-user-star-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Anonymous Social Identity</h3>
              <p className="text-white/60 text-sm">Verifiable personas without surveillance</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Communities can issue verifiable trust badges or social reputation points that are provable but unlinkable to user identities. Users earn credibility through actions, not exposure.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Real-World Application:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Karma systems without user tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Creator verification without doxxing</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Private moderation trust scores</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <i className="ri-shield-check-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Zero-Knowledge Compliance</h3>
              <p className="text-white/60 text-sm">Regulatory verification without data exposure</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Organizations can use Zekay for zero-knowledge compliance, verifying attributes like jurisdiction or accreditation without traditional KYC. Regulation becomes math-based instead of data-based.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Real-World Application:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Age verification without ID documents</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Accreditation proofs for regulated markets</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Jurisdiction compliance through ZK proofs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <i className="ri-robot-line text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>AI & Autonomous Agents</h3>
              <p className="text-white/60 text-sm">Verifiable machine reputation</p>
            </div>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-4">
            Autonomous agents can use Zekay to establish cryptographic trust with humans or other systems. Each agent can hold a verifiable reputation without leaking internal data — paving the way for safe AI-to-AI and AI-human collaboration.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="text-white font-medium text-sm mb-3">Real-World Application:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">AI agent reputation in autonomous markets</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Provable bot behavior without code exposure</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-white/70 mt-0.5"></i>
                <span className="text-white/70">Trustless human-AI coordination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mt-12">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Emerging Use Cases</h3>
        <p className="text-white/80 font-light leading-relaxed mb-4">
          As the ecosystem grows, developers are discovering new applications daily:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 font-medium text-sm mb-1">Cross-Chain Reputation</p>
            <p className="text-white/60 text-xs">Prove trust from one chain on another</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 font-medium text-sm mb-1">Supply Chain Verification</p>
            <p className="text-white/60 text-xs">Authenticity proofs without data leaks</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 font-medium text-sm mb-1">Gaming Achievements</p>
            <p className="text-white/60 text-xs">Portable player reputation</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 font-medium text-sm mb-1">Educational Credentials</p>
            <p className="text-white/60 text-xs">Verifiable degrees without transcripts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EcosystemContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Ecosystem & Integrations</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay is designed to integrate seamlessly with other protocols and ecosystems. The proof layer is interoperable across multiple blockchains, and the SDK allows developers to plug into existing architectures without redesigning their systems.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Integration Philosophy</h2>
        <p className="text-white/80 font-light leading-relaxed">
          Zekay's architecture prioritizes composability. Whether you're building a new application from scratch or integrating privacy features into an existing system, Zekay provides flexible integration paths that respect your current architecture.
        </p>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Featured Integrations</h2>
      
      <div className="space-y-6 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://i.postimg.cc/G2NT1jhx/Privado-ID.png" alt="Privado ID" className="w-16 h-16 rounded-xl object-contain" />
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Privado ID</h3>
              <p className="text-white/60 text-sm">Enterprise Identity Framework</p>
            </div>
          </div>
          <p className="text-white/70 font-light leading-relaxed mb-4">
            Zero-knowledge identity framework used by financial institutions and enterprises to enable privacy-preserving verification and compliance.
          </p>
          <div className="flex gap-2">
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">Financial Services</span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">Enterprise</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://i.postimg.cc/0Q3KqC2V/Quark-ID.png" alt="QuarkID" className="w-16 h-16 rounded-xl object-contain" />
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>QuarkID</h3>
              <p className="text-white/60 text-sm">Government Digital Identity</p>
            </div>
          </div>
          <p className="text-white/70 font-light leading-relaxed mb-4">
            Government-backed digital identity initiative built on zero-knowledge reputation systems for secure citizen verification across Latin America.
          </p>
          <div className="flex gap-2">
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">Public Sector</span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">Latin America</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://i.postimg.cc/DZD4Kcy5/Verifik.png" alt="Verifik" className="w-16 h-16 rounded-xl object-contain" />
            <div>
              <h3 className="text-2xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Verifik</h3>
              <p className="text-white/60 text-sm">Biometric Verification Platform</p>
            </div>
          </div>
          <p className="text-white/70 font-light leading-relaxed mb-4">
            Biometric and identity-verification platform using ZK Face Proof technology to authenticate users without storing or exposing raw biometric data.
          </p>
          <div className="flex gap-2">
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">Biometrics</span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">Privacy-First</span>
          </div>
        </div>
      </div>

      <p className="text-lg text-white/80 font-light leading-relaxed mt-12">
        As the ecosystem expands, Zekay's modular structure allows new use cases to emerge organically — connecting governance, finance, identity, and AI into one verifiable privacy layer.
      </p>
    </div>
  );
}

export function SecurityContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Security Model</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay's security relies on sound cryptography, formal verification, and open audits. Every layer is independently verifiable, ensuring that no single actor can compromise the protocol.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Security First</h2>
        <p className="text-white/80 font-light leading-relaxed">
          Security in Zekay is multi-layered. From cryptographic primitives to smart contract logic, every component is designed with adversarial thinking and defense-in-depth principles.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-shield-check-line text-2xl text-white"></i>
            Audits and Verification
          </h3>
          <p className="text-white/80 font-light leading-relaxed mb-6">
            All smart contracts and zk-circuits undergo external audits. Circuit correctness, soundness, and non-linkability are validated through simulation and peer review.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-white font-medium text-sm mb-1">Smart Contracts</p>
              <p className="text-white/60 text-xs">Audited by Trail of Bits, ConsenSys Diligence</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-white font-medium text-sm mb-1">ZK Circuits</p>
              <p className="text-white/60 text-xs">Formally verified with theorem provers</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-error-warning-line text-2xl text-white"></i>
            Threat Model
          </h3>
          <p className="text-white/80 font-light leading-relaxed mb-6">
            Zekay assumes an untrusted environment. Data integrity, replay protection, and proof expiration are enforced through cryptographic signatures and verifiable timestamps. No component relies on trusted storage or intermediaries.
          </p>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-4 flex items-start gap-3">
              <i className="ri-shield-cross-line text-red-400"></i>
              <div>
                <p className="text-white font-medium text-sm">Sybil Resistance</p>
                <p className="text-white/60 text-xs">Unique identity commitments prevent duplicate accounts</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 flex items-start gap-3">
              <i className="ri-refresh-line text-red-400"></i>
              <div>
                <p className="text-white font-medium text-sm">Replay Protection</p>
                <p className="text-white/60 text-xs">Nullifiers prevent proof reuse</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 flex items-start gap-3">
              <i className="ri-time-line text-red-400"></i>
              <div>
                <p className="text-white font-medium text-sm">Temporal Security</p>
                <p className="text-white/60 text-xs">Time-bound proofs with automatic expiration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
            <i className="ri-bug-line text-2xl text-white"></i>
            Responsible Disclosure
          </h3>
          <p className="text-white/80 font-light leading-relaxed mb-6">
            Researchers are encouraged to report vulnerabilities through the Responsible Disclosure Program. Transparency is essential to maintaining public trust and protocol integrity.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/80 text-sm">
              <strong>Bug Bounty Program:</strong> Up to $100,000 for critical vulnerabilities
            </p>
            <p className="text-white/60 text-xs mt-2">Contact: security@zekay.io</p>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Security Guarantees</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Zero-knowledge property: Proofs reveal nothing beyond statement validity</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Soundness: Invalid proofs cannot be generated</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Non-malleability: Proofs cannot be altered after generation</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="ri-checkbox-circle-fill text-green-400 text-xl mt-0.5"></i>
            <span className="text-white/80">Forward security: Compromised keys don't affect past proofs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function GovernanceContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Governance Framework</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Zekay Protocol is governed by its community of builders, validators, and researchers. Governance decisions define protocol upgrades, attestation standards, and reward mechanisms.
      </p>

      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Community-Driven Evolution</h2>
        <p className="text-lg text-white/90 font-light leading-relaxed">
          Proposals are submitted on-chain, discussed transparently, and executed through verifiable governance contracts. This ensures that Zekay remains adaptable while preserving its cryptographic integrity.
        </p>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Governance Process</h2>
      <div className="space-y-6 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">1</div>
          <div>
            <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Proposal Submission</h3>
            <p className="text-white/70 text-sm">Community members submit improvement proposals with detailed specifications</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">2</div>
          <div>
            <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Community Discussion</h3>
            <p className="text-white/70 text-sm">Open forum for feedback, technical review, and refinement</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">3</div>
          <div>
            <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>On-Chain Voting</h3>
            <p className="text-white/70 text-sm">Token-weighted or reputation-weighted voting period</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-semibold">4</div>
          <div>
            <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Execution</h3>
            <p className="text-white/70 text-sm">Approved proposals are executed automatically through governance contracts</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-white mt-12 mb-6" style={{ fontFamily: '"GFS Didot", serif' }}>Stakeholders</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <i className="ri-code-line text-3xl text-white mb-3 block"></i>
          <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Developers</h3>
          <p className="text-white/60 text-xs">Building applications and tooling</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <i className="ri-database-line text-3xl text-white mb-3 block"></i>
          <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Validators</h3>
          <p className="text-white/60 text-xs">Running infrastructure nodes</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          <i className="ri-flask-line text-3xl text-white mb-3 block"></i>
          <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Researchers</h3>
          <p className="text-white/60 text-xs">Advancing cryptographic research</p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <h3 className="text-2xl font-medium text-white mb-4" style={{ fontFamily: '"GFS Didot", serif' }}>Long-Term Vision</h3>
        <p className="text-white/80 font-light leading-relaxed italic">
          The long-term goal is to transition to a fully decentralized governance model, where stakeholders maintain and evolve the system in alignment with the core principle: <span className="text-white font-medium">privacy is not a feature — it's the foundation.</span>
        </p>
      </div>
    </div>
  );
}

export function GlossaryContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl font-light text-white mb-8" style={{ fontFamily: '"GFS Didot", serif' }}>Glossary</h1>
      
      <p className="text-xl text-white/90 font-light leading-relaxed mb-12">
        Key terms and concepts used throughout the Zekay Protocol documentation.
      </p>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-file-shield-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Attestation</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-3">
            A signed, encrypted statement about user behavior or attributes. Attestations form the basis of reputation in Zekay.
          </p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">Example: DAO membership proof, credit score, voting record</code>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-user-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Identity Commitment</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-3">
            A cryptographic hash that uniquely represents a user without linking to personal or wallet data. Generated from a secret using Poseidon hashing.
          </p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">commitment = poseidon(secret, nullifier)</code>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-shield-check-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Proof (ZK-Proof)</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-3">
            A zero-knowledge cryptographic demonstration that validates truth without revealing data. Contains public signals and proof elements (π).
          </p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">Proof = (publicSignals, π)</code>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-checkbox-circle-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Verification</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed">
            The process of mathematically confirming a proof's validity using verification keys. Can occur on-chain or off-chain.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-lock-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>ZK-SNARK</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed mb-3">
            Zero-Knowledge Succinct Non-Interactive Argument of Knowledge. A type of zero-knowledge proof enabling fast, scalable verification used within Zekay's core circuits.
          </p>
          <div className="bg-black/40 rounded-lg p-3">
            <code className="text-green-400 text-xs">Succinct + Non-Interactive + Zero-Knowledge</code>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-forbid-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Nullifier</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed">
            A unique value derived from identity and proof inputs that prevents double-spending and replay attacks. Each nullifier can only be used once.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-git-commit-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Merkle Tree</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed">
            A cryptographic data structure used to efficiently store and prove membership of attestations. Enables compact proofs and efficient verification.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-user-settings-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Attester</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed">
            An entity authorized to issue attestations. Can be a DAO, protocol, organization, or individual with delegation rights.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-terminal-box-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Circuit</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed">
            A Circom program defining the constraints and logic for zero-knowledge proof generation. Each proof type has its own circuit.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <i className="ri-key-line text-2xl text-white"></i>
            <h3 className="text-xl font-medium text-white" style={{ fontFamily: '"GFS Didot", serif' }}>Proving Key & Verification Key</h3>
          </div>
          <p className="text-white/80 font-light leading-relaxed">
            Cryptographic keys generated during trusted setup. Proving keys generate proofs; verification keys validate them.
          </p>
        </div>
      </div>

      <div className="bg-white/5 border-l-4 border-white/20 rounded-r-xl p-6">
        <div className="flex items-start gap-3">
          <i className="ri-information-line text-xl text-white/70 mt-1"></i>
          <div>
            <h3 className="text-white font-medium mb-2" style={{ fontFamily: '"GFS Didot", serif' }}>Need More Help?</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              For additional technical terms or clarifications, check the full API reference documentation or visit our GitHub repository.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

