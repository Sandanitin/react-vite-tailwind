import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiShield, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  const stats = [
    { icon: <FiGlobe className="w-5 h-5 text-emerald-400" />, label: 'Global Footprint', val: '25+ Countries' },
    { icon: <FiTrendingUp className="w-5 h-5 text-gold-400" />, label: 'Annual Export Volume', val: '10,000+ Tons' },
    { icon: <FiShield className="w-5 h-5 text-emerald-400" />, label: 'Quality Standards', val: '100% Certified' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image with Rich Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/40" />

      {/* Hero Layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Premium Pitch */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Premier Global Export Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
          >
            Connecting Nature's <br />
            <span className="text-gradient-emerald">Premium Bounty</span> <br />
            to the <span className="text-gradient-gold">Entire World</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg sm:text-xl max-w-2xl font-light leading-relaxed"
          >
            PVP International is a trusted global wholesale exporter of superior spices, fine grains, fresh organic produce, and premium seafood sourced directly from rich local soils and pristine coastal waters.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold tracking-wide transition-all shadow-xl shadow-emerald-950/40 glow-border flex items-center gap-2 group"
            >
              Explore Catalog
              <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918897514226?text=Hello%20PVP%20International%2C%20I%20would%20like%20to%20inquire%20about%20your%20premium%20export%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500 text-white border border-white/10 font-semibold tracking-wide transition-all backdrop-blur-md flex items-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Stat Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
          >
            {stats.map((s, idx) => (
              <div key={idx} className="glass-card glow-border p-4 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl">
                  {s.icon}
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">{s.label}</span>
                  <span className="text-base font-bold text-white">{s.val}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive CSS/SVG Shipping Animation */}
        <div className="lg:col-span-5 hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="glass-card glow-border p-6 rounded-3xl relative overflow-hidden aspect-square flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-gold-500/5 pointer-events-none" />
            
            <div className="flex justify-between items-center z-10">
              <div>
                <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest">Global Logistics Dashboard</span>
                <h3 className="text-lg font-bold text-white">Live Trade Routing</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold animate-pulse border border-emerald-500/20">
                ACTIVE SHIPMENTS
              </span>
            </div>

            {/* SVG Trade Map */}
            <div className="relative my-4 flex-grow flex items-center justify-center">
              <svg viewBox="0 0 400 240" className="w-full h-auto opacity-75">
                {/* Simulated continents/grid */}
                <path d="M50,80 Q90,50 140,80 T240,60 T340,90" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                <path d="M30,140 Q110,120 180,150 T310,140" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                
                {/* Port Nodes */}
                <circle cx="80" cy="110" r="5" fill="#22c55e" className="animate-ping" />
                <circle cx="80" cy="110" r="3" fill="#22c55e" />
                <text x="80" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontWeight="bold">Visakhapatnam (HQ)</text>

                {/* Destination Nodes */}
                <circle cx="280" cy="70" r="3" fill="#d4a317" />
                <text x="280" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">Europe Port</text>
                
                <circle cx="340" cy="160" r="3" fill="#d4a317" />
                <text x="340" y="150" fill="#94a3b8" fontSize="8" textAnchor="middle">East Asia Port</text>

                <circle cx="160" cy="180" r="3" fill="#d4a317" />
                <text x="160" y="195" fill="#94a3b8" fontSize="8" textAnchor="middle">Gulf Port</text>

                <circle cx="40" cy="70" r="3" fill="#d4a317" />
                <text x="40" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">USA Port</text>

                {/* Animated shipping lines */}
                <path d="M80,110 Q180,80 280,70" fill="none" stroke="url(#emeraldGoldGrad)" strokeWidth="1.5" className="route-line" />
                <path d="M80,110 Q210,140 340,160" fill="none" stroke="url(#emeraldGoldGrad)" strokeWidth="1.5" className="route-line" />
                <path d="M80,110 Q120,150 160,180" fill="none" stroke="url(#emeraldGoldGrad)" strokeWidth="1.5" className="route-line" />
                <path d="M80,110 Q50,90 40,70" fill="none" stroke="url(#emeraldGoldGrad)" strokeWidth="1.5" className="route-line" />

                <defs>
                  <linearGradient id="emeraldGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#d4a317" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex justify-between items-center border-t border-white/5 pt-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Rotterdam transit: 18 days</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Jebel Ali transit: 6 days</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
