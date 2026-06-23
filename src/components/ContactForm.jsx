import React, { useState } from 'react';
import { BiMailSend, BiPhoneCall, BiMapPin, BiLinkExternal } from 'react-icons/bi';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success('Thank you! Your message has been sent to our export desk.');
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Initiate Global <span className="text-gradient-emerald">Trade Dialogues</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Contact us for bulk shipments, wholesale specifications, sample requests, or partnership enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left panel: Info & Map mock */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Registered Address</h3>
              
              <div className="space-y-4">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-emerald-400">
                    <BiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Office Location</h4>
                    <p className="text-white text-sm font-light mt-1">
                      Madhurawada, Visakhapatnam, <br />
                      Andhra Pradesh - 530048, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-gold-400">
                    <BiPhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Phone & WhatsApp</h4>
                    <div className="text-white text-sm font-light mt-1 space-y-1">
                      <a href="https://wa.me/918897514226" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors block">
                        +91 88975 14226 (Export)
                      </a>
                      <a href="https://wa.me/919490245893" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors block">
                        +91 94902 45893 (Support)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-emerald-400">
                    <BiMailSend className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">E-Mail Address</h4>
                    <p className="text-white text-sm font-light mt-1">
                      exports@pvpinternational.com <br />
                      info@pvpinternational.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated interactive Map */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 h-64 bg-slate-950 flex flex-col justify-end p-6 group">
              {/* Abstract Map Background Layout */}
              <div className="absolute inset-0 bg-slate-900 flex items-center justify-center opacity-70">
                <svg width="100%" height="100%" className="text-emerald-500/10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="20" height="20" fill="none" />
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <circle cx="180" cy="120" r="10" fill="rgba(34,197,94,0.15)" />
                  <circle cx="180" cy="120" r="4" fill="rgba(34,197,94,0.8)" className="animate-pulse" />
                  <path d="M 80,40 Q 180,120 280,180" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
              <div className="relative z-10 space-y-1">
                <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest block">Geographical Hub</span>
                <h4 className="text-lg font-bold text-white">East-Coast Sea Connectivity</h4>
                <p className="text-xs text-gray-400 font-light">Visakhapatnam Deepwater Harbor - AP's Primary Ocean Freight Gateway.</p>
              </div>
            </div>

          </div>

          {/* Right panel: Form input */}
          <div className="lg:col-span-7 glass-card glow-border p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Send Corporate Inquiry</h3>
                <p className="text-sm text-gray-400 font-light">For quick price catalogs and customized quotes, fill out the form below.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Cardamom wholesale catalog request"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Message *</label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your load requirements, target port, and delivery schedule..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <a 
                  href="https://www.indiamart.com/pvp-international/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  View IndiaMART Profile <BiLinkExternal />
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 border border-emerald-400/20"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Send Inquiry Mail'
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
