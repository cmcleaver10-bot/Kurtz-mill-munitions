import Link from 'next/link';
import { Wrench, ShieldCheck, Zap, Settings, Info, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Gunsmithing Services in Mohnton, PA | Kurtz Mill Munitions LLC",
  description: "Professional gunsmithing, cleaning, and custom AR-15 builds serving Mohnton, Birdsboro, Reading, and Berks County.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Services & Pricing
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Expert, one-on-one gunsmithing services for Mohnton, Birdsboro, Reading, and surrounding Berks and Chester County areas. Military and first responders receive discounts on FFL transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* FFL Transfers */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-[var(--primary)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight">FFL Transfers</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-muted-foreground">Regular</span>
                <span className="text-xl font-bold">$30</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-muted-foreground">Active Military / First Responders</span>
                <span className="text-xl font-bold text-[var(--primary)]">$25</span>
              </div>
            </div>
          </div>

          {/* Cleaning Services */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                <Zap className="text-[var(--primary)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight">Cleaning Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[var(--primary)] font-bold uppercase tracking-widest text-xs mb-4">Field Strip</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Handgun</span>
                    <span>$35</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shotgun</span>
                    <span>$40</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rifle</span>
                    <span>$45</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[var(--primary)] font-bold uppercase tracking-widest text-xs mb-4">Full Disassembly</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pistol</span>
                    <span>$55</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shotgun</span>
                    <span>$60</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rifle</span>
                    <span>$65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repairs & Assembly */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                <Wrench className="text-[var(--primary)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight">Repairs & Assembly Services</h2>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold uppercase tracking-widest text-sm">Labor Rate</h3>
                  <span className="text-xl font-bold">$50<span className="text-xs text-muted-foreground font-normal"> / hour</span></span>
                </div>
                <p className="text-xs text-muted-foreground">Plus cost of parts</p>
              </div>
              <p className="text-sm text-muted-foreground pt-4 border-t border-white/5">
                Expert repairs, component assembly, and diagnostic services tailored to your specific needs.
              </p>
            </div>
          </div>

          {/* Optics Services */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                <Settings className="text-[var(--primary)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight">Optics Services</h2>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm pb-2 border-b border-white/5">
                <span className="text-muted-foreground">Scope Mounting</span>
              </div>
              <div className="flex justify-between text-sm pb-2 border-b border-white/5">
                <span className="text-muted-foreground">Red Dot Mounting</span>
              </div>
              <div className="flex justify-between text-sm pb-2 border-b border-white/5">
                <span className="text-muted-foreground">Boresighting</span>
              </div>
              <div className="flex justify-between text-sm pb-2 border-b border-white/5">
                <span className="text-muted-foreground">True Zero</span>
              </div>
            </div>
            <div className="p-4 bg-[var(--primary)]/5 border border-[var(--primary)]/10 rounded-xl text-center">
              <p className="text-xs text-[var(--primary)] font-bold uppercase tracking-widest">
                Pricing based on selection - contact for custom quote
              </p>
            </div>
          </div>
        </div>

        {/* Custom AR-15 Builds - STANDOUT SECTION */}
        <div className="relative mb-20 overflow-hidden rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 blur-3xl -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-3xl -z-10 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest mb-4">
                Premium Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">Custom AR-15 Builds</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Build your dream rifle with quality parts tailored to your needs and budget. Whether for competition, home defense, or tactical use, we ensure every component is perfectly matched and expertly assembled.
              </p>
              
              <div className="bg-black/40 border border-white/5 p-6 rounded-xl">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Labor & Parts</span>
                    <span className="font-bold text-[var(--primary)] text-right">Based on Selection</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-4 italic">
                    Custom quotes available based on your specific build requirements
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight">How It Works</h3>
              <div className="space-y-4">
                {[
                  "Schedule a free consultation",
                  "Discuss your build goals and budget",
                  "Select parts (or bring your own)",
                  "Expertly built for you"
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)] text-black text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm italic text-muted-foreground pt-4 border-t border-white/5">
                Contact us to schedule your consultation.
              </p>
            </div>
          </div>
        </div>

        {/* Identification Requirements */}
        <div className="bg-neutral-900 border border-white/5 p-8 md:p-10 rounded-2xl mb-16">
          <div className="flex items-start gap-4 mb-8">
            <Info className="text-[var(--primary)] shrink-0" size={24} />
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Required Identification</h2>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">For Firearm Transfers</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/40 border border-white/5 rounded-xl">
              <span className="block text-[var(--primary)] font-bold text-lg mb-2">01</span>
              <p className="text-sm font-bold uppercase leading-tight">PA Driver's License</p>
              <p className="text-xs text-muted-foreground mt-2">Showing current physical address</p>
            </div>
            <div className="p-6 bg-black/40 border border-white/5 rounded-xl">
              <span className="block text-[var(--primary)] font-bold text-lg mb-2">02</span>
              <p className="text-sm font-bold uppercase leading-tight">PA Photo ID Card</p>
              <p className="text-xs text-muted-foreground mt-2">Issued by PennDOT</p>
            </div>
            <div className="p-6 bg-black/40 border border-white/5 rounded-xl">
              <span className="block text-[var(--primary)] font-bold text-lg mb-2">03</span>
              <p className="text-sm font-bold uppercase leading-tight">Military Photo ID</p>
              <p className="text-xs text-muted-foreground mt-2">Issued by U.S. DOD</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-xs text-center text-red-400 uppercase tracking-widest font-bold">
              Note: Your ID must show your current physical address. PO Boxes are not acceptable.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-[var(--primary)] text-black font-bold uppercase tracking-widest px-10 py-4 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            Schedule Service
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
