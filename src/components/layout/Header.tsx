// src/components/layout/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[100] px-4 py-4 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-0">
      <nav className="flex items-center justify-between max-w-7xl mx-auto relative z-[100]">
        {/* Logo - Also updated to be a Link to the homepage */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <img
            src="/animo-logo-green.png"
            alt="Animo by PawPal Logo"
            className="h-12 w-12 object-cover"
          />
          <span className="text-xl font-bold text-[#2D6063] lg:text-[30px]">Animo</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#345045] transition-colors">Home</Link>
            <Link href="/#features" className="text-gray-700 hover:text-[#345045] transition-colors">Features</Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-[#345045] transition-colors">How it Works</Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-[#345045] transition-colors">Testimonials</Link>
            <a href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#345045] transition-colors">Download</a>
            <Link href="/blog" className="text-gray-700 hover:text-[#345045] transition-colors">Blog</Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-[101]"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99] md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out relative z-[100] ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="pt-4 pb-6 space-y-4 border-t border-gray-200 mt-4 relative z-[100]">
          <Link 
            href="/" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/#features" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link 
            href="/#how-it-works" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            How it Works
          </Link>
          <Link 
            href="/#testimonials" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <a 
            href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Download
          </a>
          <Link 
            href="/blog" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}