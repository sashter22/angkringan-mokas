"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      // (fade-in-up)
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 border-t border-white/5 bg-zinc-950 text-center scroll-mt-20"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Ikon WA */}
        <motion.a
          href="https://wa.me/6287778281833"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }} // Efek "mendem" saat diklik
          className="text-[#25D366] transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={40} />
        </motion.a>

        {/* Teks Minimalis dengan stagger delay tipis */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-1"
        >
          <h3 className="text-white font-black text-lg tracking-[0.2em] uppercase italic">
            ANGKRINGAN <span className="text-yellow-500">MOKAS</span> TAKERAN
          </h3>
          <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase">
            © 2026 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
