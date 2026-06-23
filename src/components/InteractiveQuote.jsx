import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiCalculator, BiSend, BiCheckCircle } from 'react-icons/bi';
import { FaShip, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function InteractiveQuote() {
  const [product, setProduct] = useState('turmeric');
  const [region, setRegion] = useState('gcc');
  const [quantity, setQuantity] = useState(15);
  const [packageType, setPackageType] = useState('20ft');
  
  // Results
  const [containerCount, setContainerCount] = useState(1);
  const [transitDays, setTransitDays] = useState('6 - 8');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: ''
  });

  const productsList = [
    { id: 'turmeric', label: 'Premium Dried Turmeric Finger', density: 16 }, // Metric tons per 20ft
    { id: 'cardamom', label: 'Green Cardamom (7mm+)', density: 10 },
    { id: 'cloves', label: 'Organic Dry Cloves', density: 12 },
    { id: 'rice', label: 'Basmati Paddy Rice', density: 21 },
    { id: 'toor_dal', label: 'Yellow Toor Dal', density: 24 },
    { id: 'groundnut', label: 'Groundnut Kernels', density: 19 },
    { id: 'maize', label: 'Yellow Maize Seeds', density: 22 },
    { id: 'mangoes', label: 'Fresh Alphonso Mangoes (Reefer)', density: 8 },
    { id: 'seer_fish', label: 'Fresh Seer Fish (Blast Frozen)', density: 14 }
  ];

  const regionsList = [
    { id: 'gcc', label: 'Middle East / Gulf (Jebel Ali)', days: '6 - 9' },
    { id: 'eu', label: 'Europe (Rotterdam)', days: '16 - 20' },
    { id: 'usa', label: 'North America (New York)', days: '24 - 28' },
    { id: 'sea', label: 'South East Asia (Singapore)', days: '5 - 8' },
    { id: 'safrica', label: 'South Africa (Durban)', days: '14 - 18' }
  ];

  useEffect(() => {
    // Calculate estimated container loads
    const selectedProd = productsList.find(p => p.id === product);
    const capacityLimit = packageType === '40ft' ? (selectedProd?.density || 15) * 1.8 : (selectedProd?.density || 15);
    const count = Math.ceil(quantity / capacityLimit);
    setContainerCount(isNaN(count) ? 1 : count);

    // Get transit duration
    const selectedReg = regionsList.find(r => r.id === region);
    setTransitDays(selectedReg ? selectedReg.days : '10 - 15');
  }, [product, region, quantity, packageType]);

  const handleSubmitRFQ = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      toast.error('Please fill in name, email, and company details.');
      return;
    }

    setIsSubmitting(true);

    const selectedProd = productsList.find(p => p.id === product)?.label || product;
    const selectedReg = regionsList.find(r => r.id === region)?.label || region;

    const formattedMessage = `*PVP International - Bulk Export RFQ Request*%0A%0A` +
      `*Commodity:* ${selectedProd}%0A` +
      `*Volume:* ${quantity} Tons (${containerCount} ${packageType === 'lcl' ? 'Pallet(s)' : 'FCL Container(s)'})%0A` +
      `*Destination:* ${selectedReg}%0A` +
      `*Est. Transit:* ${transitDays} Days%0A%0A` +
      `*Contact Details:*%0A` +
      `- *Name:* ${formData.name}%0A` +
      `- *Company:* ${formData.company}%0A` +
      `- *Email:* ${formData.email}%0A` +
      `- *Phone:* ${formData.phone || 'N/A'}%0A` +
      `- *Notes:* ${formData.notes || 'None'}`;

    const phoneNumber = "918897514226"; // PVP International WhatsApp

    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${formattedMessage}`, '_blank');
      toast.success('RFQ details generated! Opening WhatsApp chat...');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', phone: '', notes: '' });
    }, 1000);
  };

  return (
    <section id="quote" className="py-24 bg-dark-900 relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Interactive Cargo Planning</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Export Load & <span className="text-gradient-gold">Quote Calculator</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Plan your sea freight requirements in real-time. Select commodities, input bulk weights, and generate load estimations instantly.
          </p>
        </div>

        {/* main container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Calculator controls & live readings */}
          <div className="lg:col-span-7 glass-card glow-border p-8 rounded-3xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <BiCalculator className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Live Cargo Configuration</h3>
              </div>

              {/* Calculator Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Select Product */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Selected Commodity</label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                  >
                    {productsList.map((p) => (
                      <option key={p.id} value={p.id} className="bg-dark-900 text-white">{p.label}</option>
                    ))}
                  </select>
                </div>

                {/* Target Destination */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Destination Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                  >
                    {regionsList.map((r) => (
                      <option key={r.id} value={r.id} className="bg-dark-900 text-white">{r.label}</option>
                    ))}
                  </select>
                </div>

                {/* Weight/Metric Tons */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Target Volume (Metric Tons)</label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                  />
                </div>

                {/* Packaging container Type */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Container / Shipping Mode</label>
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                  >
                    <option value="20ft" className="bg-dark-900 text-white">20ft FCL Standard Container</option>
                    <option value="40ft" className="bg-dark-900 text-white">40ft FCL High Cube</option>
                    <option value="lcl" className="bg-dark-900 text-white">LCL (Less than Container Load)</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Calculations Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Required Load</span>
                <span className="text-2xl font-black text-emerald-400">
                  {containerCount} {packageType === 'lcl' ? 'Pallet(s)' : 'FCL Container(s)'}
                </span>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Est. Transit Time</span>
                <span className="text-2xl font-black text-gold-400 flex items-center justify-center gap-1">
                  <FaShip className="w-5 h-5 text-gold-400" />
                  {transitDays} Days
                </span>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Port Compliance</span>
                <span className="text-2xl font-black text-white flex items-center justify-center gap-1">
                  <BiCheckCircle className="w-5 h-5 text-emerald-500" />
                  Approved
                </span>
              </div>
            </div>

          </div>

          {/* Right panel: RFQ Submission Form */}
          <div className="lg:col-span-5 glass-card glow-border p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl border-l border-b border-emerald-500/20">
              FAST-TRACK RFQ
            </div>

            <form onSubmit={handleSubmitRFQ} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Submit Quotation Request</h3>
                <p className="text-xs text-gray-400">Receive formal commercial invoices with customized pricing grids.</p>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                />
                
                <input
                  type="email"
                  placeholder="Work Email *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Company Name *"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number (Include Country Code)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
                />

                <textarea
                  rows="3"
                  placeholder="Packaging specifications or target port requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-emerald-500/40 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 border border-emerald-400/20"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FaWhatsapp className="w-5 h-5" />
                    Request Quotes on WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
