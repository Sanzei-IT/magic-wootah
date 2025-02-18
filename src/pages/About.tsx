import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-blue-600 text-white"
      >
        <div className="absolute inset-0">
          <img
            src="https://files.catbox.moe/7x8vo2.jpg"
            alt="Water background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-center items-center mb-8"
          >
            <Sparkles className="w-16 h-16 text-white opacity-80" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tentang Magic Water
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Temukan kisah di balik air paling yang paling berbeda dengan air lainnya dan paling menyegarkan di dunia.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Tentang Kami</h2>
              <p className="text-gray-600 mb-4">
                Kami adalah sekelompok siswa dari SMKN 1 BANYUANYAR yang awalnya hanya iseng mencoba membuat minuman unik. Dari sekadar ide santai, kami mulai bereksperimen dengan berbagai cara untuk menciptakan air minum yang lebih segar dan berkualitas. Hasilnya adalah Magic Water, air minum yang tidak hanya menyegarkan tetapi juga memiliki keseimbangan mineral yang sempurna.
              </p>
              <p className="text-gray-600 mb-4">
                Magic Water dibuat dengan konsep sederhana: menghadirkan kesegaran alami yang bisa dinikmati siapa saja. Kami memilih bahan-bahan terbaik dan memastikan setiap tetesnya memberikan manfaat bagi tubuh. Dengan kemasan yang elegan dan kualitas yang terjamin, kami ingin Magic Water menjadi pilihan utama bagi mereka yang mencari kesegaran sejati.
              </p>
              <p className="text-gray-600">
                Meskipun ini berawal dari ide sederhana, kami bangga bisa menghadirkan Magic Water untuk kalian semua. Kami berharap kalian menyukai rasa dan manfaatnya seperti kami menikmati proses pembuatannya. Terima kasih telah mendukung kami!
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Natural spring"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai inti ini membimbing segala sesuatu yang kami lakukan di Magic Water.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Berkualitas Tinggi', description: 'Berkomitmen untuk memberikan kualitas terbaik di setiap tetesnya ' },
              { icon: Shield, title: 'Kemurnian', description: 'Standar yang tak tergoyahkan dalam permunian air dan keseimbangan mineral.' },
              { icon: Heart, title: 'Keberlanjutan', description: 'Bisa menambahkan aura agar menjadi orang yang sukses di masa depan.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;