import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Award, ArrowRight } from 'lucide-react';
import { getSiteConfig, getFeaturedProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';

export default async function Home() {
  const config = await getSiteConfig();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col w-full">
      <Hero config={config} />

      {/* Stats / Features */}
      <section className="bg-neutral-900 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
              <Shield className="text-[var(--primary)]" size={24} />
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-wider">Quality Focused</h3>
              <h4 className="text-muted-foreground text-xs uppercase tracking-widest mt-1">Excellence in every detail</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
              <Target className="text-[var(--primary)]" size={24} />
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-wider">Expert Knowledge</h3>
              <p className="text-muted-foreground text-xs">Decades of combined experience</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
              <Award className="text-[var(--primary)]" size={24} />
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-wider">Premium Quality</h3>
              <p className="text-muted-foreground text-xs">Only the best brands in stock</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            Our Story
          </h2>
          <h3 className="text-4xl font-bold mb-8 uppercase tracking-tight">
            Built on Integrity and Precision
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{config.about_text}</p>
            <p>
              Whether you are a first-time owner or a seasoned competitive shooter, we are here to provide 
              the tools and knowledge you need to succeed. Our mission is to support the 2nd Amendment 
              through education, safety, and quality gear.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/contact" className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-[var(--primary)] transition-colors group">
              Learn more about us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/about.jpg"
            alt="About Kurtz Mill Munitions"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
                Products
              </h2>
              <h3 className="text-4xl font-bold uppercase tracking-tight">
                Featured Inventory
              </h3>
            </div>
            <Link href="/ammunition" className="btn-secondary text-sm">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <ProductCard key={product.slug} item={product} />
              ))
            ) : (
              <p className="text-muted-foreground">No featured products available at the moment.</p>
            )}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-24 bg-[var(--primary)] text-black">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl text-center md:text-left">
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">
                  Need Professional Services?
               </h2>
               <p className="text-lg font-medium opacity-80">
                  From deep cleaning and optics mounting to complete custom builds, our expert gunsmiths have you covered.
               </p>
            </div>
            <Link href="/services" className="bg-black text-white px-8 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform shrink-0">
               Explore Services
            </Link>
         </div>
      </section>
    </div>
  );
}
