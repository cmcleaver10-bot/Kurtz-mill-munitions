"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Ammunition', href: '/ammunition' },
  { name: 'Parts & Accessories', href: '/parts' },
  { name: 'Used Firearms', href: '/used-firearms' },
  { name: 'Services', href: '/services' },
  { name: 'Merch', href: '/merch' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12">
            <Image 
              src="/images/logo.png" 
              alt="Kurtz Mill Munitions" 
              fill
              sizes="48px"
              className="object-contain group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tighter uppercase leading-none">
              Kurtz Mill
            </span>
            <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest leading-none mt-1">
              Munitions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-[var(--primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <button className="hover:text-[var(--primary)] transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest hover:text-[var(--primary)]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-6 pt-4 border-t border-white/5">
                 <button className="flex items-center gap-2 hover:text-[var(--primary)]">
                    <Search size={20} /> SEARCH
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
