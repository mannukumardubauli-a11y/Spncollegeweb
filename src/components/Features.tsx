import { motion } from 'framer-motion';
import { GraduationCap, Laptop, CheckCircle2, Microscope, Monitor, Trophy, BookOpen, Zap, ShieldCheck, Gift, Smartphone } from 'lucide-react';

const features = [
  { 
    title: 'L.K.G. से इण्टरमीडिएट', 
    desc: 'कुशल एवं प्रशिक्षित अध्यापकों द्वारा गुणवत्तापूर्ण शिक्षण कार्य।', 
    icon: GraduationCap, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'स्मार्ट एवं प्रोजेक्टर क्लास', 
    desc: 'आधुनिक तकनीक के माध्यम से विषयों को समझने की बेहतर व्यवस्था।', 
    icon: Laptop, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'मासिक परीक्षा व्यवस्था', 
    desc: 'छात्रों की प्रगति की निगरानी के लिए प्रत्येक माह के अंत में परीक्षा।', 
    icon: CheckCircle2, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'विज्ञान प्रयोगशाला', 
    desc: 'विज्ञान वर्ग के छात्रों के लिए प्रयोगात्मक ज्ञान हेतु सुसज्जित लैब।', 
    icon: Microscope, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'कम्प्यूटर शिक्षण', 
    desc: 'आज की आधुनिकता को ध्यान में रखते हुए विशेष कम्प्यूटर शिक्षा।', 
    icon: Monitor, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'छात्रवृत्ति की व्यवस्था', 
    desc: 'योग्य और मेधावी छात्र/छात्राओं के लिए विशेष छात्रवृत्ति सुविधा।', 
    icon: Trophy, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'प्रतियोगी परीक्षाओं की तैयारी', 
    desc: 'सैनिक, नवोदय एवं अन्य प्रतियोगी परीक्षाओं की विशेष तैयारी।', 
    icon: BookOpen, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'CCTV कैमरा सुरक्षा', 
    desc: 'पूरे विद्यालय परिसर में CCTV कैमरों द्वारा 24/7 निगरानी।', 
    icon: ShieldCheck, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'प्रथम 100 प्रवेश निःशुल्क', 
    desc: 'विद्यालय में प्रथम 100 छात्र/छात्राओं का प्रवेश पूर्णतः निःशुल्क।', 
    icon: Gift, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'स्कूल मोबाइल ऐप', 
    desc: 'अभिभावकों के लिए बच्चों की प्रगति देखने हेतु विशेष मोबाइल ऐप।', 
    icon: Smartphone, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
  { 
    title: 'सुविधाजनक वातावरण', 
    desc: 'शांत और अनुशासित वातावरण जो पढ़ाई के लिए सर्वोत्तम है।', 
    icon: Zap, 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50/50' 
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-[#f9fbfb]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-emerald-950 mb-4"
          >
            हमारी खास बातें
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
              className="p-6 sm:p-12 rounded-[32px] sm:rounded-[50px] bg-white border border-emerald-50/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.08)] group flex flex-col items-start text-left"
            >
              <div className={`w-12 h-12 sm:w-20 sm:h-20 ${item.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-10 group-hover:scale-110 transition-transform`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h3 className="text-base sm:text-3xl font-black text-emerald-950 mb-3 sm:mb-6 leading-tight">{item.title}</h3>
              <p className="text-emerald-800/40 text-[13px] sm:text-xl leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
