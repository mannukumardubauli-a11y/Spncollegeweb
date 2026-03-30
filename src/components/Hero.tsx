import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24 lg:pt-32">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-5%] w-[50%] h-[60%] bg-pink-400/20 rounded-full blur-[100px]" 
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[40%] h-[50%] bg-indigo-500/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Top Centered Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6 lg:mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-indigo-100 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
            <img 
              src="https://res.cloudinary.com/dabboo5yx/image/upload/v1774838961/app_logo.png_def4xw.png" 
              alt="Logo" 
              className="w-6 h-6 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-indigo-900 font-bold text-base sm:text-lg tracking-wide">प्रवेश प्रारंभ 2026-27</span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content (Text) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 mb-4 leading-[1.1]">
              श्री प्रताप नारायण <br />
              <span className="text-indigo-600">इंटर कॉलेज</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-6 lg:mb-10 max-w-xl leading-relaxed">
              अच्छी शिक्षा और अच्छे संस्कार। आधुनिक तकनीक और पारंपरिक मूल्यों का संगम।
            </p>
            
            {/* Desktop Buttons */}
            <div className="hidden lg:flex flex-wrap items-center gap-6">
              <a 
                href="https://wa.me/918887999145" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-indigo-200 flex items-center gap-3 group"
              >
                संपर्क करें
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-2 flex justify-center lg:justify-end w-full"
          >
            {/* Abstract Blobs behind image */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[120%] h-[120%] opacity-40"
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#818CF8" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.8,-0.7C84.6,14.2,78.6,28.5,70.2,41.2C61.8,53.9,51,65.1,38.1,72.4C25.2,79.7,10.2,83.1,-4.3,80.6C-18.8,78.1,-32.8,69.7,-44.8,59.8C-56.8,49.9,-66.8,38.5,-73.4,25.3C-80,12.1,-83.2,-2.9,-80.7,-17.3C-78.2,-31.7,-70,-45.5,-58.6,-53.1C-47.2,-60.7,-32.6,-62.1,-19.3,-69.3C-6,-76.5,6,-89.5,19.3,-89.5C32.6,-89.5,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
            </div>

            <div className="relative w-full max-w-[400px] lg:max-w-none lg:h-[600px] aspect-[4/5] overflow-hidden rounded-[3rem] lg:rounded-[4rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://res.cloudinary.com/dabboo5yx/image/upload/v1774838066/hero.png_asol8j.png" 
                alt="School Hero"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
            </div>
          </motion.div>

          {/* Mobile Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex lg:hidden order-3 w-full justify-center mt-4"
          >
            <a 
              href="https://wa.me/918887999145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-indigo-200 flex items-center gap-3 w-full justify-center"
            >
              संपर्क करें
              <ArrowRight size={20} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
