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
    <header className="relative z-10 px-4 py-4 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-0">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Also updated to be a Link to the homepage */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <img
            src="https://ugc.same-assets.com/lDb0fXjL-jpPYAZZTJOdg7au2HDrnHxv.png"
            alt="PAWPAL Logo"
            className="h-8 w-8 object-cover"
          />
          <span className="text-xl font-bold text-[#2D6063] lg:text-[30px]">PAWPAL</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#345045] transition-colors">Home</Link>
            <Link href="/#features" className="text-gray-700 hover:text-[#345045] transition-colors">Features</Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-[#345045] transition-colors">How it Works</Link>
            <Link href="/#why-pawpal" className="text-gray-700 hover:text-[#345045] transition-colors">Why Pawpal?</Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-[#345045] transition-colors">Testimonials</Link>
            <Link href="/#waitlist" className="text-gray-700 hover:text-[#345045] transition-colors">Waitlist</Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#345045] transition-colors">Blog</Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="pt-4 pb-6 space-y-4 border-t border-gray-200 mt-4">
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
            href="/#why-pawpal" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Why Pawpal?
          </Link>
          <Link 
            href="/#testimonials" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link 
            href="/#waitlist" 
            className="block text-gray-700 hover:text-[#345045] transition-colors py-2"
            onClick={closeMenu}
          >
            Waitlist
          </Link>
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