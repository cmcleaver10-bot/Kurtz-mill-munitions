

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[var(--primary)] selection:text-black">

      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Legal Disclaimer
            </h1>
            <p className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm">
              Please read carefully before using this site
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-lg border-l-4 border-l-[var(--primary)]">
              <h2 className="text-white text-xl font-bold uppercase tracking-widest mb-4">Compliance with Federal and State Laws</h2>
              <p>
                Kurtz Mill Munitions LLC complies strictly with all Federal, State, and Local firearms regulations. It is the buyer's absolute responsibility to understand and comply with all laws applicable in their jurisdiction regarding the purchase, possession, and use of firearms, ammunition, and related accessories.
              </p>
            </div>

            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">Age Restrictions</h2>
            <p>
              By accessing this site and attempting a purchase, you verify that you are of legal age. You must be at least 18 years of age to purchase long guns and rifle/shotgun ammunition, and at least 21 years of age to purchase handguns, receivers, and handgun ammunition.
            </p>

            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">FFL Transfers</h2>
            <p>
              Under Federal Law, firearms cannot be shipped directly to a private individual. All firearms purchases must be shipped to a registered Federal Firearms License (FFL) dealer. The buyer is responsible for arranging the transfer with their local FFL and paying any associated transfer fees.
            </p>

            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">Limitation of Liability</h2>
            <p>
              Kurtz Mill Munitions LLC shall not be held liable for any damages, whether direct, indirect, incidental, special, or consequential, resulting from the use or inability to use this website, or from the purchase, possession, or use of any product acquired through this website. All products are sold "as is" with the manufacturer's warranty, if any.
            </p>

            <h2 className="text-white text-xl font-bold uppercase tracking-widest mt-8 mb-4">Accuracy of Information</h2>
            <p>
              While we strive to ensure that product descriptions, pricing, and availability are accurate, errors may occur. We reserve the right to correct any errors and to update information at any time without prior notice. We reserve the right to cancel any orders placed for a product listed at an incorrect price.
            </p>
          </div>
        </div>
      </main>


    </div>
  );
}
