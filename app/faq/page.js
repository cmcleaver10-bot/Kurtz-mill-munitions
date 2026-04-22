

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[var(--primary)] selection:text-black">

      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm">
              Answers to your common inquiries
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Do I need an FFL to purchase a firearm?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes. All firearms purchases must be shipped to a valid Federal Firearms License (FFL) dealer. You cannot have a firearm shipped directly to your home. Please contact us if you need help finding a local FFL.
              </p>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Can I buy ammunition online?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, ammunition can be purchased online and shipped directly to most states. However, certain states (like California, New York, and Illinois) have specific restrictions or require it to be shipped to an FFL or licensed vendor.
              </p>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Do you offer gunsmithing services?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! We offer a full suite of services including custom builds, maintenance, and restorations. Please see our Services page or contact us directly to discuss your specific needs.
              </p>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-3">How do I purchase items listed as "See In Store"?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Some items are restricted from direct online checkout due to compliance or custom fitting requirements. Please visit us in person or contact us directly to arrange the purchase of these specific items.
              </p>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
