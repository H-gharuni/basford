import React, { useState, useEffect } from 'react';
import { Menu, X, Gem } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Click to go Home */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1">
             {/* Using Gem as a placeholder logo icon, represents coal/value */}
            <Gem className="w-8 h-8 text-amber-500 transition-transform group-hover:rotate-12" />
            <span className="text-xl md:text-2xl font-bold font-serif text-white tracking-tight">
              Basford <span className="text-amber-500">Welfare</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors text-sm uppercase tracking-wider scroll-smooth"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#join"
              className="bg-amber-600 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-700 transition shadow-lg shadow-amber-900/20"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl absolute top-full left-0 right-0 border-t border-gray-800 shadow-xl">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-amber-500 hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#join"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center mt-4 bg-amber-600 text-white px-3 py-3 rounded-md font-medium"
            >
                Become a Member
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;