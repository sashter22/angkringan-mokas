"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="about"
      className="py-24 px-6 md:px-12 bg-zinc-900 scroll-mt-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Sisi Kiri: Foto */}
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-3xl border-4 border-zinc-800 shadow-2xl">
            <Image
              src="/img/angkringan.jpeg"
              alt="Suasana Angkringan Mokas"
              fill
              className="object-cover contrast-110 saturate-110 brightness-90 hover:scale-110 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              EST. 2015
            </div>
          </div>
        </motion.div>

        {/* Sisi Kanan: Teks */}
        <motion.div
          className="w-full md:w-1/2 text-white"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className="mb-2">
            <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase">
              Cita Rasa yang Terjaga
            </span>
          </div>
          <h2 className="text-4xl font-black mb-6 italic tracking-tighter">
            SOLUSI <span className="text-yellow-500">KONCO</span> NONGKRONG
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
            <p className="text-justify">
              Berawal dari tempat kumpul sederhana pada tahun 2015,{" "}
              <span className="text-white font-bold">Angkringan Mokas</span>{" "}
              telah menjadi saksi ribuan cerita dan tawa di setiap harinya. Kami
              hadir bagi Anda yang mengutamakan kenyamanan dengan harga yang
              tetap terjangkau.
            </p>

            <p className="text-justify italic text-white/90 border-l-2 border-yellow-500/50 pl-4">
              Mulai dari Nasi Jotos hingga aneka hidangan sundukan, setiap menu
              kami sajikan dengan cita rasa otentik yang terjaga konsistensinya
              selama lebih dari satu dekade. Angkringan Mokas adalah pilihan
              tepat untuk melengkapi momen diskusi dan kebersamaan Anda.
            </p>

            <motion.div className="pt-4" whileHover={{ x: 10 }}>
              <div className="inline-block border-l-4 border-yellow-500 pl-4 py-2 bg-zinc-800/50 rounded-r-lg">
                <p className="text-sm italic text-yellow-500">
                  "Makan kenyang, hati senang, dompet tenang."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
