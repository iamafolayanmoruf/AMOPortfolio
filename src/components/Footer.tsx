"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const whatsappNumber = String(personalInfo.phone ?? "").replace(/[^\d]/g, "");

  const socials = [
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Gmail" },
    ...(whatsappNumber ? [{ icon: FaWhatsapp, href: `https://wa.me/${whatsappNumber}`, label: "WhatsApp" } as const] : []),
  ];

  return (
    <footer className="border-t border-white/5 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">{personalInfo.name}</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a key={s.label} href={s.href} target={s.label === "WhatsApp" ? "_blank" : undefined} rel={s.label === "WhatsApp" ? "noreferrer" : undefined} whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.95 }} className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:bg-red-500/15 hover:text-red-400" aria-label={s.label}>
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>
        <motion.button onClick={scrollToTop} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/30" aria-label="Back to top">
          <FiArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
