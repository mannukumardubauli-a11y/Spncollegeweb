import { motion } from 'framer-motion';
import { Laptop, Shield, Droplets, Bus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const facilities = [
  {
    title: 'facilities.f1.title',
    desc: 'facilities.f1.desc',
    icon: Laptop,
    img: 'https://picsum.photos/seed/computer-lab/800/600'
  },
  {
    title: 'facilities.f2.title',
    desc: 'facilities.f2.desc',
    icon: Shield,
    img: 'https://picsum.photos/seed/cctv/800/600'
  },
  {
    title: 'facilities.f3.title',
    desc: 'facilities.f3.desc',
    icon: Droplets,
    img: 'https://picsum.photos/seed/water/800/600'
  },
  {
    title: 'facilities.f4.title',
    desc: 'facilities.f4.desc',
    icon: Bus,
    img: 'https://picsum.photos/seed/school-bus/800/600'
  }
];

export default function Facilities() {
  const { t } = useLanguage();
  
  return (
    <section id="facilities" className="py-24 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-emerald-950 mb-6 leading-tight"
          >
            {t('facilities.title')}
          </motion.h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] bg-white border border-slate-100 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-emerald-950 leading-tight">{t(item.title)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
