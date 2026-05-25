import { useState } from "react";
import { ShoppingCart, Menu, X, Scissors, Star } from "lucide-react";

interface NavbarProps {
  totalItems: number;
  onCartClick: () => void;
}

export default function Navbar({ totalItems, onCartClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#shop" },
    { label: "Categories", href: "#categories" },
    { label: "How It Works", href: "#how" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-playfair text-xl font-bold text-amber-800 block leading-none">
                Crafty Hands
              </span>
              <span className="text-[10px] text-amber-500 font-semibold tracking-widest uppercase">
                Handmade with love
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-600 hover:text-amber-600 font-medium text-sm transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-amber-50 transition-colors group"
            >
              <ShoppingCart className="w-5 h-5 text-stone-600 group-hover:text-amber-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
            <a
              href="#shop"
              className="hidden md:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
              <Star className="w-3.5 h-3.5" />
              Shop Now
            </a>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-amber-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-stone-600" />
              ) : (
                <Menu className="w-5 h-5 text-stone-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-stone-600 hover:text-amber-600 hover:bg-amber-50 font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop"
            className="block mt-2 text-center bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}
