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
          className="relative w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] aspect-square mb-8 group flex items-start justify-center mx-auto"
        >
          <div className="absolute inset-0 bg-[var(--primary)]/10 blur-[100px] rounded-full scale-110 opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src="/images/logo.png?v=4" 
              alt="Kurtz Mill Munitions Logo" 
              className="w-full h-full object-contain relative z-10"
            />
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-8 flex flex-col items-center"
            >
              <span className="text-[var(--primary)] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3">
                Areas Served
              </span>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-lg mx-auto">
                {['Mohnton', 'Birdsboro', 'Reading', 'Pottstown', 'West Chester'].map((city, i) => (
                  <span key={city} className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest font-medium flex items-center">
                    {city}
                    {i < 4 && <span className="ml-4 w-1 h-1 rounded-full bg-[var(--primary)]/30" />}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-5 mt-4"
          >
            <Link href="/ammunition" className="btn-primary px-8 text-xs min-w-[200px]">
              Shop Inventory Catalog
            </Link>
            <Link href="/services" className="btn-secondary px-8 text-xs min-w-[200px]">
              Our Professional Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
