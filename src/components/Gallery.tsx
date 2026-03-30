import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Search, X } from 'lucide-react';
import { useState } from 'react';

const images = [
  { id: 1, category: 'स्कूल परिसर', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792162/7a222083-5e77-4837-8dd8-60e73f4ca53e_wqv5pu.jpg' },
  { id: 2, category: 'सांस्कृतिक कार्यक्रम', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792162/1d635fe3-ab32-473e-85e8-756744a6c6e4_gr8uo5.jpg' },
  { id: 3, category: 'खेलकूद', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792162/f080951b-e7c4-47dc-87db-87e50088cffb_lqopcn.jpg' },
  { id: 4, category: 'विज्ञान प्रदर्शनी', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792162/a588e52d-83a3-43cd-9314-e61514d6d5c7_bij1cs.jpg' },
  { id: 5, category: 'पुरस्कार समारोह', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792161/efee70b5-6792-4640-a3f2-ba673b938dd6_qpbcz4.jpg' },
  { id: 6, category: 'स्मार्ट क्लास', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792159/f4bbc0fb-813e-4f4c-ad25-57a274a58e04_roquii.jpg' },
  { id: 7, category: 'प्रयोगशाला', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792157/6584660a-a619-41d1-8f2a-01f2368e790b_pxx6cz.jpg' },
  { id: 8, category: 'पुस्तकालय', img: 'https://res.cloudinary.com/dabboo5yx/image/upload/v1774792160/b06e12ca-1302-46c8-98e6-5e2aa572f08e_ibq8ok.jpg' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-slate-900 mb-4"
          >
            Special Moments
          </motion.h2>
          <p className="text-slate-600 text-lg">स्कूल की कुछ खास और सुनहरी यादें।</p>
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
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm md:text-base">{item.category}</span>
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
                alt={selectedImage.category}
                className="w-full h-full object-contain bg-slate-900"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950/80 to-transparent">
                <h3 className="text-white text-xl md:text-2xl font-bold">{selectedImage.category}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
