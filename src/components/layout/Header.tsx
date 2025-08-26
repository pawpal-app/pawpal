// src/components/layout/Header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="relative z-10 px-4 py-4 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-0">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Also updated to be a Link to the homepage */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://ugc.same-assets.com/lDb0fXjL-jpPYAZZTJOdg7au2HDrnHxv.png"
            alt="PAWPAL Logo"
            className="h-8 w-8 object-cover"
          />
          <span className="text-xl font-bold text-[#2D6063] lg:text-[30px]">PAWPAL</span>
        </Link>

        {/* Navigation Menu - ✨ THIS IS THE UPDATED PART ✨ */}
        <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#345045] transition-colors">Home</Link>
            <Link href="/#features" className="text-gray-700 hover:text-[#345045] transition-colors">Features</Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-[#345045] transition-colors">How it Works</Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-[#345045] transition-colors">Testimonials</Link>
            <Link href="/#waitlist" className="text-gray-700 hover:text-[#345045] transition-colors">Waitlist</Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#345045] transition-colors">Blog</Link>
        </div>
      </nav>
    </header>
  );
}