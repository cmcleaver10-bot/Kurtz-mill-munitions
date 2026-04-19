import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Share2, Rss } from 'lucide-react';

const FacebookIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.455.163 2.855.211v3.424h-2.052c-1.423 0-1.782.592-1.782 1.812v2.111h3.79l-.541 3.667h-3.249v7.981H9.101z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Branding */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-16 h-16">
              <Image 
                src="/images/logo.png" 
                alt="Kurtz Mill Munitions" 
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter uppercase leading-none">
                Kurtz Mill
              </span>
              <span className="text-[var(--primary)] text-sm font-bold uppercase tracking-widest leading-none mt-1">
                Munitions
              </span>
            </div>
          </Link>
          <p className="text-[var(--primary)] text-xs font-bold uppercase tracking-[0.2em] italic -mt-2">
            Where tradition meets readiness
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium firearms, precision ammunition, and professional services. Dedicated to quality, safety, and excellence.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61568021815140" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--primary)] hover:text-black transition-all">
              <FacebookIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--primary)] hover:text-black transition-all">
              <Share2 size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--primary)] hover:text-black transition-all">
              <Rss size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
            <li><Link href="/ammunition" className="hover:text-[var(--primary)] transition-colors">Ammunition</Link></li>
            <li><Link href="/parts" className="hover:text-[var(--primary)] transition-colors">Parts & Accessories</Link></li>
            <li><Link href="/used-firearms" className="hover:text-[var(--primary)] transition-colors">Used Firearms</Link></li>
            <li><Link href="/services" className="hover:text-[var(--primary)] transition-colors">Services</Link></li>
            <li><Link href="/merch" className="hover:text-[var(--primary)] transition-colors">Merch</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
            <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-[var(--primary)] transition-colors">FAQs</Link></li>
            <li><Link href="/shipping" className="hover:text-[var(--primary)] transition-colors">Shipping Policy</Link></li>
            <li><Link href="/returns" className="hover:text-[var(--primary)] transition-colors">Returns</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Get in Touch</h4>
          <ul className="flex flex-col gap-5 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={18} className="text-[var(--primary)] shrink-0" />
              <span>3371 Morgantown Pa, Mohnton, PA, United States, Pennsylvania</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-[var(--primary)] shrink-0" />
              <span>+1 610-802-7359</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-[var(--primary)] shrink-0" />
              <span>Kurtzmillmunitions@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Kurtz Mill Munitions LLC. All Rights Reserved.</span>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/legal" className="hover:text-white transition-colors">Legal Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
