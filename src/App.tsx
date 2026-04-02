import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leadership from './components/Leadership';
import Features from './components/Features';
import Achievements from './components/Achievements';
import MySchool from './components/MySchool';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import DigitalServices from './components/DigitalServices';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <AnimatePresence>
          {loading && <Loader />}
        </AnimatePresence>

        {!loading && (
          <main className="animate-in fade-in duration-1000">
            <Navbar />
            <Hero />
            <Leadership />
            <Features />
            <DigitalServices />
            <Facilities />
            <Achievements />
            <MySchool />
            <Gallery />
            <Testimonials />
            <Footer />
            <WhatsAppButton />
          </main>
        )}
      </div>
    </LanguageProvider>
  );
}
