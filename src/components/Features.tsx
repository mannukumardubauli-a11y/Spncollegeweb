import { motion } from 'framer-motion';
import { GraduationCap, Laptop, CheckCircle2, Microscope, Monitor, Trophy, BookOpen, ShieldCheck, Gift, Smartphone, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  { 
    title: 'features.f1.title', 
    desc: 'features.f1.desc', 
    icon: GraduationCap, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f2.title', 
    desc: 'features.f2.desc', 
    icon: Laptop, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f3.title', 
    desc: 'features.f3.desc', 
    icon: CheckCircle2, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f4.title', 
    desc: 'features.f4.desc', 
    icon: Microscope, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f5.title', 
    desc: 'features.f5.desc', 
    icon: Monitor, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f6.title', 
    desc: 'features.f6.desc', 
    icon: Trophy, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f7.title', 
    desc: 'features.f7.desc', 
    icon: BookOpen, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f8.title', 
    desc: 'features.f8.desc', 
    icon: ShieldCheck, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f9.title', 
    desc: 'features.f9.desc', 
    icon: Gift, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f10.title', 
    desc: 'features.f10.desc', 
    icon: Smartphone, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'features.f11.title', 
    desc: 'features.f11.desc', 
    icon: Zap, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
];

export default function Features() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-emerald-950 mb-6 leading-tight"
          >
            {t('features.label')}
          </motion.h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 sm:p-12 rounded-[32px] sm:rounded-[50px] bg-white border border-slate-100 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group flex flex-col items-start text-left"
            >
              <div className={`w-12 h-12 sm:w-20 sm:h-20 ${item.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-10 group-hover:scale-110 transition-transform`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h3 className="text-base sm:text-3xl font-black text-emerald-950 mb-3 sm:mb-6 leading-tight">{t(item.title)}</h3>
              <p className="text-emerald-800/40 text-[13px] sm:text-xl leading-relaxed font-medium">{t(item.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
