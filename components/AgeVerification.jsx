"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function AgeVerification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem('age-verified');
    if (!verified) {
      setShow(true);
    }
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem('age-verified', 'true');
    setShow(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md w-full bg-neutral-900 border border-white/10 p-10 rounded-2xl text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-[var(--primary)]" />
            </div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Age Verification</h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              To enter Kurtz Mill Munitions, you must be 18 years of age or older. By entering this site, you agree to our terms and conditions.
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleVerify}
                className="btn-primary w-full py-4 uppercase tracking-widest text-sm"
              >
                I am 18 or older
              </button>
              <button
                onClick={handleReject}
                className="btn-secondary w-full py-4 uppercase tracking-widest text-sm"
              >
                Exit
              </button>
            </div>
            
            <p className="mt-8 text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Please enjoy responsibly and obey all local laws.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
