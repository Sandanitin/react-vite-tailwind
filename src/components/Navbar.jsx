import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { BiGlobe } from 'react-icons/bi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Export Calculator', href: '#quote' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="p-2 bg-gradient-to-tr from-emerald-500 to-gold-500 rounded-lg shadow-inner">
              <BiGlobe className="w-6 h-6 text-dark-950 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-glow text-gradient-emerald">PVP</span>
              <span className="text-xs font-semibold text-gold-400 block tracking-widest -mt-1 uppercase">International</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#quote"
              onClick={(e) => handleNavClick(e, '#quote')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-lg shadow-emerald-950/40 glow-border"
            >
              Get Custom Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-xs bg-dark-950/95 backdrop-blur-2xl z-50 p-6 shadow-2xl border-l border-white/5 transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-tr from-emerald-500 to-gold-500 rounded-lg">
              <BiGlobe className="w-5 h-5 text-dark-950" />
            </div>
            <span className="text-lg font-bold text-gradient-emerald">PVP International</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-white font-medium text-lg border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#quote"
            onClick={(e) => handleNavClick(e, '#quote')}
            className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-center tracking-wide transition-all shadow-lg glow-border"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
