"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ item }) {
  const { title, price, image, brand, caliber, category, type, featured } = item;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-[var(--primary)]/30 transition-all duration-500 shadow-xl"
    >
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-[var(--primary)] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Featured
        </div>
      )}
      
      <div className="aspect-[4/3] overflow-hidden bg-neutral-800 relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-700">
             <div className="w-20 h-20 border-2 border-neutral-800 rounded-full flex items-center justify-center italic text-xs">
                No Image
             </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowUpRight size={20} />
           </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] text-[var(--primary)] font-bold uppercase tracking-widest mb-1">
              {brand || category || type || 'Product'}
            </p>
            <h3 className="font-bold text-lg group-hover:text-[var(--primary)] transition-colors line-clamp-1">
              {title}
            </h3>
          </div>
          <span className="font-bold text-lg text-white">
            ${price?.toFixed(2)}
          </span>
        </div>
        
        {caliber && (
          <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-medium">
            Caliber: {caliber}
          </p>
        )}

        <button className="w-full mt-6 py-3 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
