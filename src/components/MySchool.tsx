import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const schoolImages = [
  'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1775151797/8f1c32e4-9609-4f6d-843e-841448c065ca_oznkpt.jpg',
  'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792162/7a222083-5e77-4837-8dd8-60e73f4ca53e_wqv5pu.jpg',
  'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792162/a588e52d-83a3-43cd-9314-e61514d6d5c7_bij1cs.jpg'
];

export default function MySchool() {
  const { t } = useLanguage();

  return (
    <section id="myschool" className="py-24 px-6 bg-slate-50">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight"
          >
            {t('myschool.title')}
          </motion.h2>
          <p className="text-slate-600 text-lg">{t('myschool.desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schoolImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src={img}
                alt={`School ${idx + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
