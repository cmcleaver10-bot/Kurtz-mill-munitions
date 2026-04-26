"use client";

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState(null); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // 1. Save to Firestore (Internal Backup)
      const { db } = await import('@/lib/firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        read: false
      });

      // 2. Send Email via Formspree
      const response = await fetch('https://formspree.io/f/mdayjwen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            className="input-field" 
            placeholder="John Doe" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            className="input-field" 
            placeholder="john@example.com" 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
        <select 
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input-field appearance-none"
        >
          <option>General Inquiry</option>
          <option>Product Availability</option>
          <option>Gunsmithing Service</option>
          <option>Used Inventory Trade-in</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required 
          rows={6} 
          className="input-field resize-none" 
          placeholder="How can we help you?"
        ></textarea>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm font-bold uppercase tracking-widest text-center bg-red-400/10 py-3 rounded-lg border border-red-400/20">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

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
