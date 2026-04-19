"use client";

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-neutral-900 border border-[var(--primary)]/30 p-12 rounded-2xl text-center">
        <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-[var(--primary)]" size={32} />
        </div>
        <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Message Sent</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for reaching out. Your inquiry has been sent to Kurtzmillmunitions@gmail.com and our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus(null)}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      name="contact" 
      method="POST" 
      data-netlify="true"
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
          <input type="text" required className="input-field" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
          <input type="email" required className="input-field" placeholder="john@example.com" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
        <select className="input-field appearance-none">
          <option>General Inquiry</option>
          <option>Product Availability</option>
          <option>Gunsmithing Service</option>
          <option>Used Inventory Trade-in</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
        <textarea required rows={6} className="input-field resize-none" placeholder="How can we help you?"></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>Sending Message...</>
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
