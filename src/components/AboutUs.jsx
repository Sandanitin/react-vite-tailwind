import React from 'react';
import { FiShield, FiPackage, FiAward, FiBookOpen } from 'react-icons/fi';

export default function AboutUs() {
  const pillars = [
    {
      icon: <FiShield className="w-8 h-8 text-emerald-400" />,
      title: 'Certified Quality',
      desc: 'Rigorous lab testing for moisture, aflatoxins, and heavy metals. Strictly compliant with global safety codes.'
    },
    {
      icon: <FiPackage className="w-8 h-8 text-gold-400" />,
      title: 'Premium Packaging',
      desc: 'Vacuum packing, multi-layer PP, and robust non-woven bags to prevent moisture retention and damage during sea transit.'
    },
    {
      icon: <FiBookOpen className="w-8 h-8 text-emerald-400" />,
      title: 'Export Documentation Desk',
      desc: 'Fast-tracked custom approvals, Phytosanitary certification, APEDA/Spices Board certificates, and clean Bills of Lading.'
    },
    {
      icon: <FiAward className="w-8 h-8 text-gold-400" />,
      title: 'Direct Farmer Network',
      desc: 'Sourcing directly from co-operatives and coastal farmers, ensuring fair-trade compensation and pure harvests.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">Our Organization</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">The Pillars of <span className="text-gradient-emerald">PVP International</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Founded with a vision to deliver premium agricultural commodities globally, we bridge local Indian farms with international manufacturing facilities.
          </p>
        </div>

        {/* content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Graphic image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
              <img 
                src="/images/grains.png" 
                alt="Agricultural Landscape Sourcing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card glow-border rounded-2xl">
                <span className="text-gold-400 font-extrabold text-3xl block">Visakhapatnam</span>
                <span className="text-xs text-gray-300 font-medium tracking-wider uppercase block">Headquarters & Port Logistics Access</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Delivering Trust & High-Grade Commodities Worldwide</h3>
            
            <p className="text-gray-300 font-light leading-relaxed">
              Based in the strategic coastal city of Visakhapatnam (Madhurawada), PVP International utilizes major sea port networks to ship containerized agricultural loads smoothly. We pride ourselves on transparent bulk dealings, accurate weight scales, and clean shipping practices.
            </p>

            <p className="text-gray-300 font-light leading-relaxed">
              By working hand-in-hand with agricultural specialists, we oversee the quality of turmeric fingers, cardamom, basmati rice, and fresh sea harvests from the moment of collection to final stuffing in cargo container yards.
            </p>

            {/* Credentials Badges */}
            <div className="pt-4 flex flex-wrap gap-3">
              {['APEDA COMPLIANT', 'SPICES BOARD REGISTERED', 'FSSAI CERTIFIED', 'GLOBAL GAP STANDARDS'].map((c, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase">
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => (
            <div key={idx} className="glass-card glow-border p-6 rounded-3xl space-y-4 hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-white/5 rounded-2xl inline-block">
                {p.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{p.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
