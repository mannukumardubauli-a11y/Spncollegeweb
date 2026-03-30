import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-emerald-950 text-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-2xl md:text-4xl font-serif mb-2 font-bold tracking-tighter">श्री प्रताप नारायण इंटर कॉलेज</h1>
        <p className="text-emerald-300 tracking-widest text-sm md:text-base">EDUCATION IS POWER</p>
      </motion.div>
      
      <div className="relative w-24 h-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-4 border-emerald-300/10 border-b-emerald-300 rounded-full"
        />
      </div>
    </motion.div>
  );
}
