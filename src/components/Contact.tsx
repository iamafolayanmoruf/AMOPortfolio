"use client";

import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const whatsappNumber = String(personalInfo.phone ?? "").replace(/[^\d]/g, "");

  return (
    <section id="contact" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind or want to collaborate? Let's talk." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-12 lg:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-8">
            <p className="leading-relaxed text-gray-300">
              I&apos;m always excited to hear about new projects and opportunities. Whether you have a question, a proposal, or just want to say hello, feel free to reach out!
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/20"
                aria-label="Gmail"
              >
                <FiMail size={20} />
              </motion.a>
              {whatsappNumber && (
                <motion.a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/20"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
