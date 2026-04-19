"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero({ config }) {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10" />
        <div className="absolute inset-0 bg-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-[600px] md:h-[450px] mb-4 group flex items-start justify-center"
        >
          <div className="absolute inset-0 bg-[var(--primary)]/10 blur-3xl rounded-full scale-110 group-hover:opacity-30 transition-opacity" />
          <div className="relative w-full h-[600px] overflow-hidden">
            <Image 
              src="/images/logo.png" 
              alt="Kurtz Mill Munitions Star Icon" 
              fill
              priority
              className="object-contain object-top relative z-10"
              style={{ clipPath: 'inset(10% 0 32% 0)', transform: 'translateY(-10%)' }}
            />
          </div>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-[var(--primary)]" />
            <span className="text-[var(--primary)] font-bold uppercase tracking-[0.4em] text-[10px]">
              {config.tagline}
            </span>
            <div className="w-8 h-[1px] bg-[var(--primary)]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9] text-white"
          >
            <span className="block">{config.hero_title.split(' & ')[0]}</span>
            <span className="text-[var(--primary)]">&</span>
            <span className="block">{config.hero_title.split(' & ')[1]}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto"
          >
            {config.hero_subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <Link href="/ammunition" className="btn-primary px-8 text-xs min-w-[180px]">
              Browse Ammunition
            </Link>
            <Link href="/used-firearms" className="btn-secondary px-8 text-xs min-w-[180px]">
              Inventory Catalog
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
