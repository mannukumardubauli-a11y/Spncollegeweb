import { motion } from 'framer-motion';
import { Laptop, Shield, Droplets, Bus } from 'lucide-react';

const facilities = [
  {
    title: 'कंप्यूटर लैब',
    desc: 'आधुनिक कंप्यूटर और हाई-स्पीड इंटरनेट से लैस, जहाँ छात्र तकनीकी कौशल सीखते हैं।',
    icon: Laptop,
    img: 'https://picsum.photos/seed/computer-lab/800/600'
  },
  {
    title: 'CCTV निगरानी',
    desc: 'छात्रों की सुरक्षा हमारी प्राथमिकता है। पूरे परिसर की निगरानी आधुनिक कैमरों द्वारा की जाती है।',
    icon: Shield,
    img: 'https://picsum.photos/seed/cctv/800/600'
  },
  {
    title: 'RO पीने का पानी',
    desc: 'स्वच्छता को ध्यान में रखते हुए, शुद्ध और ठंडे RO पीने के पानी की उचित व्यवस्था है।',
    icon: Droplets,
    img: 'https://picsum.photos/seed/water/800/600'
  },
  {
    title: 'परिवहन सुविधा',
    desc: 'दूर-दराज के क्षेत्रों से आने वाले छात्रों के लिए सुरक्षित और आरामदायक बस सेवा उपलब्ध है।',
    icon: Bus,
    img: 'https://picsum.photos/seed/school-bus/800/600'
  }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-emerald-950 mb-4"
          >
            स्कूल की सुविधाएं
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
              <h3 className="text-base md:text-xl font-bold text-emerald-950 leading-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
