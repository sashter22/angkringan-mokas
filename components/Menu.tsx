"use client";
import { motion, Variants } from "framer-motion";

export default function Menu() {
  const menuCategories = [
    {
      title: "Aneka Nasi",
      items: [
        { name: "Nasi Jotos", price: "4k" },
        { name: "Nasi Rica", price: "5k" },
        { name: "Nasi Sambel Teri", price: "4k" },
        { name: "Nasi Pindang", price: "5k" },
        { name: "Nasi Bakar", price: "5k" },
        { name: "Nasi Telur", price: "5k" },
        { name: "Nasi Geprek", price: "5k" },
      ],
    },
    {
      title: "Sundukan",
      items: [
        { name: "Tusukan Ati Ampela", price: "2k" },
        { name: "Tusukan Usus", price: "2k" },
        { name: "Tusukan Telur Puyuh", price: "3k" },
        { name: "Tusukan Kulit", price: "2k" },
        { name: "Tusukan Bakso", price: "3k" },
        { name: "Tusukan Tahu Bakso", price: "3k" },
        { name: "Sosis Tempura", price: "2k" },
        { name: "Aneka Gorengan", price: "1k" },
      ],
    },
    {
      title: "Wedangan",
      items: [
        { name: "Kopi Hitam", price: "4k" },
        { name: "Kopi Susu", price: "5k" },
        { name: "Susu Jahe", price: "5k" },
        { name: "Teh Tarik", price: "5k" },
        { name: "Joshua", price: "5k" },
        { name: "Kukubima Susu", price: "5k" },
        { name: "Good Day", price: "5k" },
        { name: "Chocolatos", price: "5k" },
        { name: "Drink Beng-Beng", price: "5k" },
        { name: "Nutrisari", price: "3k" },
      ],
    },
  ];

  // Variasi animasi (Pakai type Variants biar gak merah-merah lagi)
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="menu" className="py-24 bg-black text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* JUDUL REVISI: Garis pendek & Center */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl font-black italic text-yellow-500 uppercase tracking-tighter">
            DAFTAR MENU
          </h2>
          {/* Garis Bawah Pendek Custom */}
          <div className="w-16 h-1.5 bg-yellow-500 mt-2 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={containerVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Judul Kategori */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-yellow-500"></div>
                <h3 className="text-xl font-bold uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>

              {/* List Menu */}
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVars}
                    className="flex justify-between items-end group border-b border-white/5 pb-1 hover:border-yellow-500/30 transition-colors"
                  >
                    <span className="text-gray-400 italic group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="text-yellow-500 font-bold font-mono">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
