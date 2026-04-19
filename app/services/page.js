import { getCollectionData } from '@/lib/data';
import { Settings, Wrench, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: "Services | Kurtz Mill Munitions LLC",
  description: "Professional gunsmithing, cleaning, and custom services.",
};

const iconMap = {
  Settings: Settings,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

export default async function ServicesPage() {
  const services = await getCollectionData('services');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            We provide expert technical support, precision maintenance, and custom enhancements for your firearms. Our expert gunsmiths ensure every job meets the highest standards of safety and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.length > 0 ? (
            services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <div key={service.slug} className="group p-8 bg-neutral-900 border border-white/5 rounded-2xl hover:border-[var(--primary)]/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-[var(--primary)]" size={28} />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tight">{service.title}</h3>
                    {service.cost && (
                      <span className="text-[var(--primary)] font-bold text-sm tracking-widest">{service.cost}</span>
                    )}
                  </div>
                  <div className="text-muted-foreground leading-relaxed prose prose-invert max-w-none">
                     {service.content}
                  </div>
                </div>
              );
            })
          ) : (
             <>
               {/* Fallback default services if none in CMS */}
               <div className="group p-8 bg-neutral-900 border border-white/5 rounded-2xl">
                 <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                   <Settings className="text-[var(--primary)]" size={28} />
                 </div>
                 <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Professional Cleaning</h3>
                 <p className="text-muted-foreground leading-relaxed">
                   Deep sonic cleaning, inspection, and professional lubrication. Prices starting at $45.
                 </p>
               </div>
               <div className="group p-8 bg-neutral-900 border border-white/5 rounded-2xl">
                 <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                   <Wrench className="text-[var(--primary)]" size={28} />
                 </div>
                 <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Optics & Mounting</h3>
                 <p className="text-muted-foreground leading-relaxed">
                   Professional scope mounting, leveling, and bore sighting for maximum precision.
                 </p>
               </div>
             </>
          )}
        </div>
      </div>
    </div>
  );
}
