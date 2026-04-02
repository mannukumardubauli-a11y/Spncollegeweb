import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Search, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const images = [
  { id: 1, category: 'gallery.cat1', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792162/7a222083-5e77-4837-8dd8-60e73f4ca53e_wqv5pu.jpg' },
  { id: 2, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792162/1d635fe3-ab32-473e-85e8-756744a6c6e4_gr8uo5.jpg' },
  { id: 3, category: 'gallery.cat3', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792162/f080951b-e7c4-47dc-87db-87e50088cffb_lqopcn.jpg' },
  { id: 4, category: 'gallery.cat4', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792162/a588e52d-83a3-43cd-9314-e61514d6d5c7_bij1cs.jpg' },
  { id: 5, category: 'gallery.cat5', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792161/efee70b5-6792-4640-a3f2-ba673b938dd6_qpbcz4.jpg' },
  { id: 6, category: 'gallery.cat6', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792159/f4bbc0fb-813e-4f4c-ad25-57a274a58e04_roquii.jpg' },
  { id: 7, category: 'gallery.cat7', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792157/6584660a-a619-41d1-8f2a-01f2368e790b_pxx6cz.jpg' },
  { id: 8, category: 'gallery.cat8', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774792160/b06e12ca-1302-46c8-98e6-5e2aa572f08e_ibq8ok.jpg' },
  { id: 9, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979913/f73f6162-a638-4122-8407-c4ec6cc70411_kffy32.jpg' },
  { id: 10, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979912/f178077d-cb94-4e45-88d6-451c8025f10c_g7l4d0.jpg' },
  { id: 11, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979911/b7b2fd7a-facd-439d-bf88-f272a632e2a1_h0cl1j.jpg' },
  { id: 12, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979911/c040771f-64e0-4567-af5a-d688178947f6_fflh32.jpg' },
  { id: 13, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979909/6024f316-c570-48ed-9cc4-5427327213de_afbuco.jpg' },
  { id: 14, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979909/8497e7ed-fb39-4757-a343-7addc8311084_ezleeg.jpg' },
  { id: 15, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979906/2fac0504-f9cf-41fe-abf6-77a8f3237f53_cador5.jpg' },
  { id: 16, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979906/00bb6a3a-a40e-46d1-8c9b-4fc1e21b2f09_nscxfn.jpg' },
  { id: 17, category: 'gallery.cat2', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/q_auto/f_auto/v1774979908/7ed17867-e241-4290-a046-25127878af5c_as929f.jpg' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight"
          >
            {t('gallery.title')}
          </motion.h2>
          <p className="text-slate-600 text-lg">{t('gallery.desc')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <img
                src={item.img}
                alt={t(item.category)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Search size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white hover:text-indigo-400 transition-colors z-[70]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full aspect-video md:aspect-auto max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.img}
                alt={t(selectedImage.category)}
                className="w-full h-full object-contain bg-slate-900"
                referrerPolicy="no-referrer"
              />
              {/* No category label here */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
