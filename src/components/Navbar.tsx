import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.leadership'), href: '#leadership' },
    { name: t('nav.schoolApp'), href: '#portal' },
    { name: t('nav.achievements'), href: '#achievements' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

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
          
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full border font-bold transition-all",
                isScrolled 
                  ? "border-indigo-100 text-indigo-950 hover:bg-indigo-50" 
                  : "border-slate-200 text-slate-700 hover:bg-white/20"
              )}
            >
              <Globe size={18} className="text-indigo-600" />
              <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>

            <a 
              href="https://wa.me/918887999145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-indigo-200"
            >
              {t('nav.admission')}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-bold transition-all text-sm",
              isScrolled 
                ? "border-indigo-100 text-indigo-950" 
                : "border-slate-200 text-slate-900 bg-white/50"
            )}
          >
            <Globe size={16} className="text-indigo-600" />
            <span>{language === 'hi' ? 'EN' : 'HI'}</span>
          </button>
          <button
            className={cn(
              "p-2",
              isScrolled ? "text-indigo-950" : "text-slate-900"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
                {t('nav.admission')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
