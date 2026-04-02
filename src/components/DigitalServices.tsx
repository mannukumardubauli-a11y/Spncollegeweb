import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Receipt, BookOpen, BarChart3, Smartphone, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const portalImages = [
  "https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774840137/81dadf3d-b0bb-4634-ab57-adde6cf24030_pwmzoz.jpg",
  "https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774840136/bdc10abf-44a5-4312-a316-e1a4cc6d812b_g8n9vb.jpg",
  "https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774840136/81f7431f-51b7-42e3-9e94-4229233fe648_zurpjp.jpg",
  "https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774840136/1a1afe82-5f25-4b83-89b6-4022e2640b9e_keik3q.jpg",
  "https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774840136/7b897f6d-bc15-4496-8b7b-165cc40d1f89_wpplvn.jpg"
];

const services = [
  {
    title: 'digital.s1.title',
    desc: 'digital.s1.desc',
    icon: CalendarCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'digital.s2.title',
    desc: 'digital.s2.desc',
    icon: Receipt,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    title: 'digital.s3.title',
    desc: 'digital.s3.desc',
    icon: BookOpen,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    title: 'digital.s4.title',
    desc: 'digital.s4.desc',
    icon: BarChart3,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    title: 'digital.s5.title',
    desc: 'digital.s5.desc',
    icon: Smartphone,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    title: 'digital.s6.title',
    desc: 'digital.s6.desc',
    icon: ShieldCheck,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  }
];

export default function DigitalServices() {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portalImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portal" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-emerald-600 font-bold text-lg mb-6 block"
              >
                {t('digital.label')}
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-8 leading-[1.2]">
                {language === 'hi' ? (
                  <>हमारा <span className="text-emerald-600">स्कूल ऐप</span></>
                ) : (
                  <>Our <span className="text-emerald-600">School App</span></>
                )}
              </h2>
              <p className="text-xl text-emerald-800/70 leading-relaxed max-w-2xl">
                {t('digital.desc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-[32px] border border-slate-100 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group flex gap-5"
                >
                  <div className={`shrink-0 w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
                    <service.icon className={service.color} size={28} />
                  </div>
                  <div>
                    <h3 className="font-black text-emerald-950 text-lg mb-2 leading-tight">{t(service.title)}</h3>
                    <p className="text-sm text-emerald-800/60 leading-relaxed">{t(service.desc)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full lg:w-2/5 relative flex justify-center items-center mt-12 lg:mt-0"
          >
            {/* Mobile Phone Frame */}
            <div className="relative z-10 bg-emerald-900 rounded-[3.5rem] p-3 sm:p-4 shadow-[0_50px_100px_-20px_rgba(6,78,59,0.3)] border-[8px] sm:border-[10px] border-emerald-950 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto transform hover:rotate-2 transition-transform duration-500">
              {/* Speaker/Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-7 bg-emerald-950 rounded-b-2xl sm:rounded-b-3xl z-30 flex items-center justify-center gap-2">
                <div className="w-6 sm:w-8 h-1 bg-emerald-800 rounded-full" />
                <div className="w-1.5 sm:h-2 h-1.5 sm:w-2 bg-emerald-800 rounded-full" />
              </div>

              <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={portalImages[currentImageIndex]} 
                    alt={`Portal Slide ${currentImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </AnimatePresence>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent pointer-events-none" />
                
                {/* Dots Indicator */}
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
                  {portalImages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-emerald-600 w-3 sm:w-4' : 'bg-emerald-200'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Side Buttons (Visual only) */}
              <div className="absolute -left-[10px] sm:-left-[12px] top-20 sm:top-24 w-[2px] sm:w-[3px] h-10 sm:h-12 bg-emerald-800 rounded-l-md" />
              <div className="absolute -left-[10px] sm:-left-[12px] top-36 sm:top-40 w-[2px] sm:w-[3px] h-14 sm:h-16 bg-emerald-800 rounded-l-md" />
              <div className="absolute -right-[10px] sm:-right-[12px] top-28 sm:top-32 w-[2px] sm:w-[3px] h-16 sm:h-20 bg-emerald-800 rounded-r-md" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-emerald-200/30 rounded-full -z-10 blur-[100px] opacity-50" />
            <motion.div 
              animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-48 h-48 bg-blue-200/40 rounded-full -z-10 blur-3xl" 
            />
            <motion.div 
              animate={{ x: [0, 20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-20 -left-20 w-56 h-56 bg-emerald-200/40 rounded-full -z-10 blur-3xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
