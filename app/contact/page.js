import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { getSiteConfig } from '@/lib/data';

export const metadata = {
  title: "Contact Kurtz Mill Munitions | Mohnton, PA Gun Shop",
  description: "Get in touch with our Mohnton, PA gun shop. Serving Birdsboro, Reading, and the surrounding Berks and Chester County areas.",
};

export default async function ContactPage() {
  const config = await getSiteConfig();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in Mohnton, PA, we proudly serve Birdsboro, Reading, and the surrounding communities. Reach out for expert assistance with firearms, ammunition, or gunsmithing services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-2xl">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-8">Shop Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-[var(--primary)]/10 rounded-lg shrink-0 h-fit">
                    <MapPin className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Our Location</h4>
                    <p className="text-sm leading-relaxed">{config.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-[var(--primary)]/10 rounded-lg shrink-0 h-fit">
                    <Phone className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone Number</h4>
                    <p className="text-sm leading-relaxed">{config.phone}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-[var(--primary)]/10 rounded-lg shrink-0 h-fit">
                    <Mail className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Email Address</h4>
                    <p className="text-sm leading-relaxed">{config.email}</p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-white/5 pt-6">
                  <div className="p-3 bg-[var(--primary)]/10 rounded-lg shrink-0 h-fit">
                    <Clock className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Business Hours</h4>
                    <div className="text-sm space-y-2">
                       <p className="text-white font-bold">By Appointment Only</p>
                       <p className="text-muted-foreground">Available Monday - Sunday</p>
                       <div className="pt-2 border-t border-white/5">
                          <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--primary)] mb-1">Schedule your visit:</p>
                          <p className="text-white">Call/Text: 610-802-7359</p>
                          <p className="text-white">Email: kurtzmillmunitions@gmail.com</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 md:p-12 bg-neutral-900 border border-white/5 rounded-2xl h-full">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-[400px] w-full bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden grayscale relative">
           <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              <div>
                 <MapPin className="mx-auto mb-4 text-[var(--primary)]" size={48} />
                 <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Google Maps Integration</h3>
                 <p className="text-muted-foreground">Interactive map can be enabled with a Google Maps API Key.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
