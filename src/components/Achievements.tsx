import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Calendar, Users, CheckCircle2, Trophy } from 'lucide-react';

const stats = [
  { 
    label: 'Years of Excellence', 
    value: 30, 
    suffix: ' Years', 
    icon: Calendar,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  { 
    label: 'Happy Students', 
    value: 10000, 
    suffix: '+', 
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  { 
    label: 'Success Rate', 
    value: 98, 
    suffix: '%', 
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  { 
    label: 'Total Awards', 
    value: 200, 
    suffix: '+', 
    icon: Trophy,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2 block"
            >
              Our Achievements
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900"
            >
              Pride Moments & Stats
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-md text-sm md:text-base"
          >
            A testament to our continuous efforts in education and student success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 group transition-all hover:shadow-md"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 font-medium text-xs sm:text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
