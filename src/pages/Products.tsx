import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Star } from 'lucide-react';

const product = {
  name: 'Magic Water',
  price: 'Rp3.000',
  image: 'https://files.catbox.moe/cpenvb.jpg',
  description: 'Nikmati kesegaran air alami yang sempurna! Magic Water, sumber hidrasi terbaik yang diproses dengan teknologi canggih untuk menjaga kesegaran dan keseimbangan mineral yang ideal. Dapatkan energi tambahan dan rasa segar yang membuatmu lebih kuat, fokus, dan siap menghadapi tantangan! Dengan Magic Water, setiap tegukan memberi kesegaran yang optimal dan mendukung kesehatan tubuhmu sepanjang hari.',
  features: [
    'Terbuat dari air berkualitas tinggi dengan campuran gula alami yang premium dan perasan pisang',
    'Keseimbangan rasa yang sempurna untuk hidrasi yang maksimal',
    'Desain cup yang menambah keren dan menambah +100 Aura anda ketika memegangnya',
    'pH seimbang untuk penyerapan terbaik oleh tubuh',
    'Capek??? Hilang habis minum ini membuang rasa capek dan mengembalikan kekuatan pada tubuh anda'
  ],
  size: ''
};

const Products = () => {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in purchasing Magic Water Premium Crystal (${product.size}) for ${product.price}`;
    const whatsappUrl = 'https://api.whatsapp.com/send/?phone=6282132829913&text=Halo+Kak+Saya+Mau+Order+Minuman+Magic+Waternya&type=phone_number&app_absent=0'
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Minuman Premium</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati magic water premium kami, dirancang khusus untuk mereka yang mengutamakan kualitas terbaik dalam setiap tegukan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                Edisi Terbatas!
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
              </div>
              
              <p className="text-gray-600 mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Keunggulan Premium</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Star className="w-5 h-5 text-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col space-y-4">
                <span className="text-sm text-gray-500">{product.size}</span>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle size={24} />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;