import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'राजेश कुमार',
    role: 'अभिभावक',
    text: 'मेरे बच्चे के व्यक्तित्व में बदलाव वाकई अद्भुत है। यहाँ की शिक्षण पद्धति बहुत प्रभावी है।',
    img: 'https://picsum.photos/seed/parent1/100/100'
  },
  {
    name: 'अंजलि सिंह',
    role: 'पूर्व छात्रा',
    text: 'इस स्कूल ने मुझे न केवल शिक्षा दी, बल्कि जीवन की चुनौतियों का सामना करने की शक्ति भी दी।',
    img: 'https://picsum.photos/seed/student1/100/100'
  },
  {
    name: 'संजय यादव',
    role: 'अभिभावक',
    text: 'अनुशासन और आधुनिक शिक्षा का एक आदर्श संतुलन। शिक्षकों का समर्पण वास्तव में सराहनीय है।',
    img: 'https://picsum.photos/seed/parent2/100/100'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex p-4 bg-emerald-600 text-white rounded-full mb-8 shadow-lg shadow-emerald-200"
        >
          <Quote size={32} />
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-serif text-emerald-950 mb-16">लोग हमारे बारे में क्या कहते हैं</h2>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 rounded-[3rem] shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-slate-100"
            >
              <p className="text-xl md:text-2xl text-emerald-800 italic mb-10 leading-relaxed">
                "{testimonials[index].text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-2xl border-4 border-white mb-4 shadow-md">
                  {testimonials[index].name.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-emerald-950">{testimonials[index].name}</h4>
                <span className="text-emerald-600 font-medium">{testimonials[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 p-4 glass rounded-full text-emerald-900 hover:bg-emerald-600 hover:text-white transition-all shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 p-4 glass rounded-full text-emerald-900 hover:bg-emerald-600 hover:text-white transition-all shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? 'w-8 bg-emerald-600' : 'bg-emerald-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
