import { motion } from 'framer-motion';

const leaders = [
  {
    role: 'प्रबंधक',
    name: 'श्री प्रताप नारायण सिंह',
    qualifications: '',
    image: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774839204/134b1d01-6d75-4e9b-99d7-3a9871133af2_acaqbh.jpg',
    message: 'शिक्षा वह शस्त्र है जिससे हम दुनिया बदल सकते हैं। हमारा लक्ष्य हर बच्चे को सुसंस्कृत और शिक्षित बनाना है।'
  },
  {
    role: 'प्रधानाचार्य',
    name: 'श्री अनिल कुमार सिंह',
    qualifications: 'M.A., B.Ed',
    image: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774839202/3aa67467-f9f8-4206-b58e-de13814f60cb_wjoux6.jpg',
    message: 'अनुशासन और कड़ी मेहनत सफलता की कुंजी है। हम अपने छात्रों के सर्वांगीण विकास के लिए प्रतिबद्ध हैं।'
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2 block"
          >
            हमारा नेतृत्व
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900"
          >
            मार्गदर्शक और प्रेरणास्रोत
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all group"
            >
              <div className="w-48 h-64 shrink-0 overflow-hidden rounded-3xl shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="text-center md:text-left">
                <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
                  {leader.role}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  {leader.name}
                </h3>
                {leader.qualifications && (
                  <p className="text-indigo-600 font-bold text-sm mb-4">
                    {leader.qualifications}
                  </p>
                )}
                <p className="text-slate-600 italic leading-relaxed">
                  "{leader.message}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
