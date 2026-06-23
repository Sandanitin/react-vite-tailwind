import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import InteractiveQuote from './components/InteractiveQuote';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import { BiChevronUp } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-emerald-500/30 selection:text-white font-sans antialiased relative">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#0f172a',
          color: '#f8fafc',
          border: '1px solid rgba(34, 197, 94, 0.2)'
        }
      }} />

      {/* Global Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            {/* Sections */}
            <HeroSection />
            <ProductCatalog />
            <InteractiveQuote />
            <AboutUs />
            <ContactForm />

            {/* Premium Footer */}
            <footer className="bg-dark-950 py-12 border-t border-white/5 relative z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-wider text-gradient-emerald">PVP</span>
                  <span className="text-xs font-semibold text-gold-400 block tracking-widest uppercase">International</span>
                </div>

                <p className="text-xs text-gray-500 font-light">
                  © 2026 PVP International. All rights reserved. Sourced & exported with uncompromising quality standards.
                </p>

                <div className="flex gap-6">
                  <a href="#about" className="text-xs text-gray-400 hover:text-white transition-colors">Compliance</a>
                  <a href="#quote" className="text-xs text-gray-400 hover:text-white transition-colors">Export Desk</a>
                  <a href="#contact" className="text-xs text-gray-400 hover:text-white transition-colors">Inquiries</a>
                </div>

              </div>
            </footer>

            {/* Floating WhatsApp FAB */}
            <a
              href="https://wa.me/918897514226?text=Hello%20PVP%20International%2C%20I%20visited%20your%20website%20and%20want%20to%20inquire%20about%20your%20export%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-20 right-6 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg transition-all hover:-translate-y-1 duration-300 z-50 flex items-center justify-center group hover:scale-105"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>

            {/* Scroll-to-Top FAB */}
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-emerald-500/25 duration-300 z-50 glow-border group"
            >
              <BiChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
