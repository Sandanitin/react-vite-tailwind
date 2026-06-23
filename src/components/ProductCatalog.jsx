import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiLayer, BiBadgeCheck, BiInfoCircle } from 'react-icons/bi';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState('spices');

  const categories = [
    { id: 'spices', label: 'Spices & Herbs', image: '/images/spices.png' },
    { id: 'grains', label: 'Grains & Seeds', image: '/images/grains.png' },
    { id: 'fresh', label: 'Fresh Produce', image: '/images/seafood.png' },
  ];

  const productsData = {
    spices: [
      {
        name: 'Premium Dried Turmeric Finger',
        desc: 'Bright golden yellow turmeric fingers with high curcumin content, sun-dried to perfection under organic standards.',
        image: '/images/turmeric.png',
        specs: [
          { name: 'Curcumin Value', value: '3.5% - 5.0%' },
          { name: 'Moisture', value: 'Max 12%' },
          { name: 'Origin', value: 'Andhra Pradesh, India' },
          { name: 'Packing', value: '25kg / 50kg Jute Bags' }
        ],
        badge: 'High Curcumin'
      },
      {
        name: 'Fresh Turmeric Finger',
        desc: 'Plump, raw, organic fresh turmeric fingers harvested from rich soil, perfect for extraction and direct consumption.',
        image: '/images/turmeric.png',
        specs: [
          { name: 'State', value: 'Fresh / Whole Raw' },
          { name: 'Moisture', value: 'Natural High' },
          { name: 'Curcumin', value: '3.0% - 4.5%' },
          { name: 'Packing', value: '25kg Jute Bags' }
        ],
        badge: 'Fresh Harvest'
      },
      {
        name: 'Green Cardamom (7mm+ / 8mm)',
        desc: 'Extra bold, deep green cardamom pods packed with rich aroma and intense essential oils.',
        image: '/images/cardamom.png',
        specs: [
          { name: 'Size', value: '7.5mm - 8mm Bold' },
          { name: 'Color', value: 'Deep Green' },
          { name: 'Foreign Matter', value: 'Max 1%' },
          { name: 'Packing', value: 'Vacuum Bags / Cartons' }
        ],
        badge: 'Extra Bold'
      },
      {
        name: 'Organic Whole Dry Cloves',
        desc: 'Highly aromatic, selected organic dry cloves with fully formed heads and optimal oil levels.',
        image: '/images/cloves.png',
        specs: [
          { name: 'Stems/Debris', value: 'Max 2%' },
          { name: 'Moisture', value: 'Max 10%' },
          { name: 'Quality', value: 'Grade A Export' },
          { name: 'Packing', value: '25kg PP Bags' }
        ],
        badge: 'Organic'
      },
      {
        name: 'Dry Red Chilli',
        desc: 'Premium stemless and with-stem sun-dried red chillies, sorted for uniform deep red color and fiery heat level.',
        image: '/images/dry_red_chilli.png',
        specs: [
          { name: 'Type', value: 'Teja / G4 / Byadgi' },
          { name: 'Moisture', value: 'Max 11%' },
          { name: 'Foreign Matter', value: 'Max 1%' },
          { name: 'Packing', value: '20kg Gunny / PP Bags' }
        ],
        badge: 'Sun-Dried'
      },
      {
        name: 'Black Mustard Seeds',
        desc: 'Clean, sortex-filtered tiny black mustard seeds with high volatile oil content and sharp pungent taste.',
        image: '/images/mustard_seeds.png',
        specs: [
          { name: 'Purity', value: 'Min 99.5%' },
          { name: 'Moisture', value: 'Max 8%' },
          { name: 'Admixture', value: 'Max 0.5%' },
          { name: 'Packing', value: '25kg / 50kg Bags' }
        ],
        badge: 'High Purity'
      }
    ],
    grains: [
      {
        name: 'Premium Basmati Paddy Rice',
        desc: 'Long-grain aromatic basmati paddy rice, cured and aged for supreme fluffiness and rich traditional flavor.',
        image: '/images/basmati.png',
        specs: [
          { name: 'Grain Length', value: '7.4mm - 8.2mm' },
          { name: 'Aroma', value: 'Strong Exotic' },
          { name: 'Admixture', value: 'Max 1%' },
          { name: 'Packing', value: 'Non-Woven Bags / Custom' }
        ],
        badge: 'Aged Grain'
      },
      {
        name: 'White Short Grain Rice',
        desc: 'Superfine milled white short-grain rice, polished to perfection. Yields non-sticky, fluffy textured grain upon cooking.',
        image: '/images/short_grain_rice.png',
        specs: [
          { name: 'Grain Length', value: '5.2mm - 5.8mm' },
          { name: 'Broken', value: 'Max 5%' },
          { name: 'Whiteness', value: 'Min 40% (Kett)' },
          { name: 'Packing', value: '25kg / 50kg PP Bags' }
        ],
        badge: 'Premium Table'
      },
      {
        name: 'Golden Broken Rice',
        desc: 'Cleaned broken rice grains ideal for various culinary and industrial starch manufacturing processes.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Broken Grains', value: '100% Broken' },
          { name: 'Color', value: 'Natural Golden/White' },
          { name: 'Foreign Matter', value: 'Max 0.5%' },
          { name: 'Packing', value: '50kg Double-layer Bags' }
        ],
        badge: 'Sortex Cleaned'
      },
      {
        name: 'Yellow Toor Dal (Pigeon Peas)',
        desc: 'Sorted, polished, and unpolished premium grade yellow split pigeon peas with high protein value.',
        image: '/images/toor_dal.png',
        specs: [
          { name: 'Foreign Matter', value: 'Nil' },
          { name: 'Broken Grains', value: 'Max 1.5%' },
          { name: 'Origin', value: 'Maharashtra/AP, India' },
          { name: 'Packing', value: '25kg Multi-layer Bags' }
        ],
        badge: 'Sortex Cleaned'
      },
      {
        name: 'Whole Green Moong Dal',
        desc: 'Export-quality green moong beans, rich in nutrients, carefully double-sorted to ensure uniform size and color.',
        image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Size', value: '3.5mm - 4.5mm' },
          { name: 'Moisture', value: 'Max 12%' },
          { name: 'Foreign Matter', value: 'Nil' },
          { name: 'Packing', value: '25kg PP Bags' }
        ],
        badge: 'Nutrient Rich'
      },
      {
        name: 'Groundnut Kernels (Bold/Java)',
        desc: 'High-oil content peanut kernels, meticulously sorted and tested for aflatoxin compliance.',
        image: '/images/groundnut.png',
        specs: [
          { name: 'Counts/Ounce', value: '40/50, 50/60, 60/70' },
          { name: 'Moisture', value: 'Max 7.5%' },
          { name: 'Aflatoxin', value: 'Negative (Below 4ppb)' },
          { name: 'Packing', value: '25kg Vacuum Jute Bags' }
        ],
        badge: 'Tested Safe'
      },
      {
        name: 'Yellow Maize Seeds (Feed/Starch)',
        desc: 'Premium yellow dent corn kernels, ideal for feed millers and industrial starch processing.',
        image: '/images/yellow_maize.png',
        specs: [
          { name: 'Protein', value: 'Min 9%' },
          { name: 'Moisture', value: 'Max 14%' },
          { name: 'Weevilled Grains', value: 'Max 1%' },
          { name: 'Packing', value: 'Bulk in Containers / PP Bags' }
        ],
        badge: 'Bulk Supply'
      },
      {
        name: 'White Refined Sugar',
        desc: 'High-purity granulated refined sugar matching strict international ICUMSA-45 specifications.',
        image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Grade', value: 'ICUMSA-45 Premium' },
          { name: 'Polarization', value: 'Min 99.80%' },
          { name: 'Moisture', value: 'Max 0.04%' },
          { name: 'Packing', value: '50kg Poly-lined Bags' }
        ],
        badge: 'Refined Grade'
      }
    ],
    fresh: [
      {
        name: 'Fresh Alphonso Mangoes',
        desc: 'The king of mangoes, selected for ideal skin appearance, rich orange pulp sweetness, and fiberless texture.',
        image: '/images/alphonso_mangoes.png',
        specs: [
          { name: 'Weight', value: '200g - 300g per fruit' },
          { name: 'Maturity', value: '80% - 85%' },
          { name: 'Shipping Temp', value: '12°C - 13°C Air/Reefer' },
          { name: 'Packing', value: '3kg / 5kg Corrugated Boxes' }
        ],
        badge: 'Seasonal King'
      },
      {
        name: 'Organic Fresh Watermelon',
        desc: 'Juicy, deep red flesh watermelons cultivated using organic practices. High sugar content and long shelf life.',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Sugar Value', value: '11% - 13% Brix' },
          { name: 'Weight', value: '3.5kg - 6kg per fruit' },
          { name: 'Temp', value: '10°C - 12°C Reefer' },
          { name: 'Packing', value: 'Crates / Bulk in Containers' }
        ],
        badge: 'Organic Sweet'
      },
      {
        name: 'Fresh Tender Coconut',
        desc: 'Vibrant green tender coconuts containing abundant fresh, mineral-rich water and sweet soft pulp.',
        image: 'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Water Volume', value: '450ml - 600ml' },
          { name: 'Weight', value: '1.6kg - 2.2kg' },
          { name: 'Shell Thickness', value: 'Optimal Green' },
          { name: 'Packing', value: 'Thermo-insulated Crates' }
        ],
        badge: 'Natural Hydrator'
      },
      {
        name: 'Half Cut Dry Coconut',
        desc: 'Clean, dried split coconut copra halves with high natural oil yield, ideal for food processing and oil milling.',
        image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Moisture', value: 'Max 6%' },
          { name: 'Oil Content', value: 'Min 63%' },
          { name: 'Quality', value: 'Grade A Clean Copra' },
          { name: 'Packing', value: '25kg / 50kg Gunny Bags' }
        ],
        badge: 'High Oil Yield'
      },
      {
        name: 'Semi Husked Coconut',
        desc: 'Fully matured coconuts with the outer fibrous husk partially removed, preserving the inner shell and water content.',
        image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Weight', value: '550g - 650g' },
          { name: 'Maturity', value: '100% Fully Matured' },
          { name: 'Water', value: 'Present & Fresh' },
          { name: 'Packing', value: '25kg Mesh / Gunny Bags' }
        ],
        badge: 'Export Grade'
      },
      {
        name: 'Fresh Green Chilli',
        desc: 'Freshly harvested pungent green chillies, handpicked for export-ready crispness, uniform length, and color.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Length', value: '6cm - 9cm' },
          { name: 'Pungency', value: 'High (Teja / G4)' },
          { name: 'Temp', value: '8°C Reefer' },
          { name: 'Packing', value: '5kg / 10kg Corrugated Boxes' }
        ],
        badge: 'Spiced Hot'
      },
      {
        name: 'Fresh Sweet Potato',
        desc: 'Organic class-A red skin sweet potatoes, sorted for clean skin, solid texture, and natural sweetness.',
        image: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?auto=format&fit=crop&w=600&q=80',
        specs: [
          { name: 'Size Range', value: '120g - 280g' },
          { name: 'Skin', value: 'Smooth Red/Purple' },
          { name: 'Temp', value: '13°C - 15°C' },
          { name: 'Packing', value: '20kg Mesh Bags / Cartons' }
        ],
        badge: 'Rich Starch'
      },
      {
        name: 'Arabica & Robusta Raw Coffee Beans',
        desc: 'High-elevation shade-grown green coffee beans, washed and naturally processed for global roasters.',
        image: '/images/coffee_beans.png',
        specs: [
          { name: 'Grade', value: 'Plantation A / AAA' },
          { name: 'Screen Size', value: '17/18 Screen' },
          { name: 'Defects', value: 'Less than 1.5%' },
          { name: 'Packing', value: '60kg GrainPro Bags' }
        ],
        badge: 'Specialty Grade'
      },
      {
        name: 'Fresh Seer Fish (Spanish Mackerel)',
        desc: 'Line-caught fresh seer fish from Bay of Bengal, processed under blast freezing and sanitary standards.',
        image: '/images/seer_fish.png',
        specs: [
          { name: 'State', value: 'Whole Round / G&G / Steaks' },
          { name: 'Freezing', value: 'Blast Frozen (-40°C)' },
          { name: 'Glaze', value: '10% - 15% (Customizable)' },
          { name: 'Packing', value: 'Thermo-insulated Boxes' }
        ],
        badge: 'Bay Premium'
      }
    ]
  };

  const handleInquire = (productName) => {
    const phoneNumber = "918897514226"; // PVP International WhatsApp
    const message = encodeURIComponent(`Hello PVP International, I am interested in requesting a sample / bulk price quote for *${productName}*. Please share the export specifications and FOB/CIF details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">Export Catalogue</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Our Premium <span className="text-gradient-emerald">Product Segments</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Sourced responsibly, processed with modern hygiene protocols, and packaged securely to survive international transit without losing freshness.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3.5 rounded-2xl font-semibold tracking-wide transition-all duration-300 flex items-center gap-2.5 border ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-950/50 glow-border'
                  : 'bg-white/5 text-gray-300 border-white/5 hover:bg-white/10'
              }`}
            >
              <BiLayer className="w-5 h-5" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual AI Graphic Banner */}
          <div className="lg:col-span-4 h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10 aspect-[3/4]">
              <img 
                src={categories.find(c => c.id === activeTab)?.image} 
                alt="Product Category Banner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
                  Global Standard Sourcing
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {categories.find(c => c.id === activeTab)?.label}
                </h3>
                <p className="text-gray-300 text-sm font-light">
                  Hand-picked and double-sorted to meet strict phytosanitary guidelines in EU, USA, and GCC markets.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Product List */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {productsData[activeTab].map((p, idx) => (
                  <div key={idx} className="glass-card glow-border p-4 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/10 transition-all duration-300">
                    <div className="space-y-3">
                      {p.image && (
                        <div className="w-full h-32 rounded-xl overflow-hidden border border-white/5">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                          />
                        </div>
                      )}
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-base font-bold text-white leading-snug">{p.name}</h4>
                        <span className="shrink-0 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider border border-emerald-500/20">
                          {p.badge}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs font-light leading-relaxed line-clamp-3">{p.desc}</p>
                      
                      {/* Specs List */}
                      <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-white/5">
                        {p.specs.map((s, sIdx) => (
                          <div key={sIdx} className="space-y-0.5">
                            <span className="text-[9px] text-gray-500 uppercase tracking-wider block font-semibold">{s.name}</span>
                            <span className="text-[11px] text-gray-300 font-medium truncate block">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <BiBadgeCheck className="text-emerald-500 w-3.5 h-3.5" /> Lab Certified
                      </span>
                      <button
                        onClick={() => handleInquire(p.name)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 hover:border-emerald-500 text-[11px] font-semibold tracking-wide transition-all"
                      >
                        Request Sample
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
