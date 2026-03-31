import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const leaders = [
  {
    role: 'leadership.manager',
    name: 'श्री प्रताप नारायण सिंह',
    qualifications: '',
    image: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774839204/134b1d01-6d75-4e9b-99d7-3a9871133af2_acaqbh.jpg',
    message: 'leadership.message1'
  },
  {
    role: 'leadership.vicePrincipal',
    name: 'उप-प्रधानाचार्य',
    qualifications: '',
    image: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774979909/af2fc987-1c1b-4a41-ba00-da0a8165c75a_bzll4w.jpg',
    message: 'leadership.message2'
  },
  {
    role: 'leadership.clerk',
    name: 'लिपिक',
    qualifications: '',
    image: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774979906/1e25eff9-4d5c-4223-a595-6097bab459c5_kuxu0b.jpg',
    message: 'leadership.message2'
  }
];

export default function Leadership() {
  const { t } = useLanguage();
  return (
    <section id="leadership" className="py-20 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-6 block"
          >
            {t('leadership.label')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            {t('leadership.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col gap-8 items-center bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all group text-center"
            >
              <div className="w-48 h-64 shrink-0 overflow-hidden rounded-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div>
                <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
                  {t(leader.role)}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {leader.name}
                </h3>
                {leader.qualifications && (
                  <p className="text-indigo-600 font-bold text-sm mb-4">
                    {leader.qualifications}
                  </p>
                )}
                <p className="text-slate-600 italic leading-relaxed">
                  "{t(leader.message)}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
