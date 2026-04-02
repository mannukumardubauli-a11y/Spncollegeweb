import { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components below the fold
const Leadership = lazy(() => import('./components/Leadership'));
const Management = lazy(() => import('./components/Management'));
const Features = lazy(() => import('./components/Features'));
const Achievements = lazy(() => import('./components/Achievements'));
const MySchool = lazy(() => import('./components/MySchool'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const DigitalServices = lazy(() => import('./components/DigitalServices'));
const Facilities = lazy(() => import('./components/Facilities'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for faster initial feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
            <Suspense fallback={<div className="h-20" />}>
              <Leadership />
              <Management />
              <Features />
              <DigitalServices />
              <Facilities />
              <Achievements />
              <MySchool />
              <Gallery />
              <Testimonials />
              <Footer />
              <WhatsAppButton />
            </Suspense>
          </main>
        )}
      </div>
    </LanguageProvider>
  );
}
