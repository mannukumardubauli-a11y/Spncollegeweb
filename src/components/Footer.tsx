import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                <img 
                  src="https://res.cloudinary.com/dabboo5yx/image/upload/v1774838961/app_logo.png_def4xw.png" 
                  alt="SPN Logo" 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-xl font-serif leading-tight font-bold">{t('footer.collegeName')}</h2>
            </div>
            <p className="text-emerald-300 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/10 rounded-lg hover:bg-emerald-500 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-8 border-b border-white/10 pb-2">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4 text-emerald-300">
              {[
                { name: t('footer.home'), href: '#home' },
                { name: t('footer.facilities'), href: '#facilities' },
                { name: t('footer.achievements'), href: '#achievements' },
                { name: t('footer.gallery'), href: '#gallery' },
                { name: t('footer.testimonials'), href: '#testimonials' },
                { name: t('footer.contact'), href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-8 border-b border-white/10 pb-2">{t('footer.contactDetails')}</h3>
            <ul className="space-y-6 text-emerald-300">
              <li className="flex gap-4">
                <MapPin className="text-emerald-500 shrink-0" size={24} />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-emerald-500 shrink-0" size={24} />
                <a href="https://wa.me/918887999145" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 88879 99145
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-emerald-500 shrink-0" size={24} />
                <span>info@spnic.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-8 border-b border-white/10 pb-2">{t('footer.newsletter')}</h3>
            <p className="text-emerald-300 mb-6">{t('footer.newsletterDesc')}</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')} 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-emerald-500 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
