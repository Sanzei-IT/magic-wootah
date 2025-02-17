import React from 'react';
import { motion } from 'framer-motion';
import { Star, Droplets, Award, Shield } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Water background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Magic Water
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Rasakan Keajaiban Murni & Temukan kesegaran air paling murni yang diperkaya dengan mineral alami.
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Beli Sekarang
          </motion.a>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center p-6"
            >
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Murni & Alami</h3>
              <p className="text-gray-600">Diperoleh dari air paling murni yang diperkaya dengan mineral alami.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center p-6"
            >
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Minuman Terkini & Terviral pada tahun ini.</h3>
              <p className="text-gray-600">Minuman yang bisa bikin badan menyegarkan serta menambah kekuatan untukmu saat meminumnya.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-center p-6"
            >
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Aman</h3>
              <p className="text-gray-600">Melalui proses kontrol kualitas yang sangat baik untuk memastikan standar keamanan pada produk kami yaitu "Magic Water".</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan Kami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Cari tahu kenapa banyak orang menyukai Magic Water dan bagaimana ini mengubah hidup mereka.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Firuman Wahyudi",
                role: "Suka Anime & Membaca Manga/Komik",
                content: "Magic Water ini kayak potion di anime favoritku, sekali minum langsung seger dan full energi! Nggak nyangka air yang terlihat biasa ini tapi saat aku meminumnya kayak terbawa kedunia isekai^_^",
                rating: 5
              },
              {
                name: "Sanzei Soft",
                role: "Full-Stack Developer",
                content: "Sebagai programmer, saya butuh asupan yang bisa bikin tetap fokus tanpa efek samping. Magic Water ini solusi terbaik! No caffeine, no sugar, just pure magic water!",
                rating: 5
              },
              {
                name: "Renie Antika Cahyani",
                role: "Anak Tari",
                content: "Setiap latihan tari, aku pasti minum Magic Water. Rasanya sejuk dan bikin tubuh langsung segar, pas banget buat aku yang suka nari!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;