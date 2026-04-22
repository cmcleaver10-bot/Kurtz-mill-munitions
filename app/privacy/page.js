

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[var(--primary)] selection:text-black">

      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>
              At Kurtz Mill Munitions LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
            </p>

            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website, but may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
              <li>Identifiers such as your name, email address, phone number, and physical address.</li>
              <li>Commercial information regarding products or services purchased or considered.</li>
              <li>Financial data relevant to payment processing.</li>
            </ul>

            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>

            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers. We may also share information as legally required to comply with state and federal firearms regulations.
            </p>
            
            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at Kurtzmillmunitions@gmail.com.
            </p>
          </div>
        </div>
      </main>


    </div>
  );
}
