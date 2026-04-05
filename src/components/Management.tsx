import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Management() {
  const { t } = useLanguage();

  return (
    <section id="management" className="py-20 px-6 bg-slate-50">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-6 block"
          >
            {t('management.label')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            {t('management.title')}
          </motion.h2>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 items-center bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all group text-center max-w-sm w-full"
          >
            <div className="w-48 h-64 shrink-0 overflow-hidden rounded-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774838066/hero.png_asol8j.png"
                alt={t('management.raviSingh')}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div>
              <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
                {t('management.role')}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                {t('management.raviSingh')}
              </h3>
              <p className="text-indigo-600 font-bold text-sm mb-4">
                {t('management.raviQual')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
