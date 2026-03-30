import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'होम', href: '#home' },
  { name: 'नेतृत्व', href: '#leadership' },
  { name: 'पोर्टल', href: '#portal' },
  { name: 'उपलब्धियां', href: '#achievements' },
  { name: 'गैलरी', href: '#gallery' },
  { name: 'विचार', href: '#testimonials' },
  { name: 'संपर्क', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md py-2 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-white p-1 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform">
              <img 
                src="https://res.cloudinary.com/dabboo5yx/image/upload/v1774838961/app_logo.png_def4xw.png" 
                alt="SPN Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className={cn(
              "font-serif text-xl sm:text-2xl leading-tight font-black tracking-tight",
              isScrolled ? "text-indigo-950" : "text-slate-900"
            )}>
              SPN COLLEGE
            </h1>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold transition-colors",
                isScrolled ? "text-indigo-950 hover:text-indigo-600" : "text-slate-600 hover:text-indigo-600"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/918887999145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-indigo-200"
            >
              प्रवेश प्रारंभ
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2",
            isScrolled ? "text-indigo-950" : "text-slate-900"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-indigo-950 border-b border-slate-50 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <a 
                href="https://wa.me/918887999145" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-center"
              >
                प्रवेश प्रारंभ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
