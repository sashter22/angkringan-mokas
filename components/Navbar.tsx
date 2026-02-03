"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Tambah AnimatePresence

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Location", href: "#location" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    // 1. Navbar muncul meluncur dari atas saat page load
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Sisi Kiri: Logo */}
        <div className="flex-1">
          <div className="text-xl font-black italic inline-block">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              ANGKRINGAN
            </span>
            <span className="text-white ml-2 uppercase">Mokas</span>
          </div>
        </div>

        {/* Tengah: Navigasi (Desktop Only) */}
        <nav className="hidden md:flex justify-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-500 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Sisi Kanan: Desktop Button & Mobile Hamburger */}
        <div className="flex-1 flex justify-end">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden md:block border border-white/40 px-6 py-2 rounded-full text-[10px] font-black tracking-widest hover:bg-white hover:text-black transition-all duration-500 uppercase"
          >
            CONTACT US
          </motion.a>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay dengan Animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl md:hidden z-50"
          >
            <nav className="flex flex-col justify-center h-full px-12 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }} // Muncul satu per satu
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold tracking-[0.2em] text-white uppercase hover:text-yellow-500 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
