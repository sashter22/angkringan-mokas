"use client";
import { motion } from "framer-motion";

export default function Location() {
  const lat = "-7.681319";
  const lng = "111.478856";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <motion.section
      id="location"
      className="py-24 bg-zinc-950 text-white scroll-mt-20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Info Lokasi: Animasi meluncur dari kiri */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-black mb-6 italic text-yellow-500 tracking-tighter">
              LOKASI KAMI
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-xl font-bold text-white uppercase tracking-widest">
                Alamat:
              </p>
              <p className="text-gray-400 leading-relaxed mx-auto md:mx-0 max-w-[300px] md:max-w-none">
                Mbodre, Jomblang, Kec. Takeran, <br />
                Kabupaten Magetan, Jawa Timur 63383
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-500/80 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Buka Setiap Hari Jam: 07.00 – 01.00
              </div>
            </div>

            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full md:w-auto bg-yellow-500 text-black px-10 py-4 rounded-full font-black hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 text-sm tracking-tighter"
            >
              PETUNJUK JALAN (GOOGLE MAPS)
            </motion.a>
          </motion.div>

          {/* Peta Interaktif: Animasi meluncur dari kanan */}
          <motion.div
            className="w-full md:w-1/2 h-[350px] md:h-[450px] rounded-3xl overflow-hidden border-4 border-zinc-900 shadow-2xl relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe
              src={`https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) contrast(1.2) invert(0.9)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
