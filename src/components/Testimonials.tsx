"use client";

import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Testimonials" subtitle="What people say about working with me" />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-8 md:grid-cols-3">
          {personalInfo.testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeInUp} custom={i} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }} className="glass glow rounded-2xl p-6">
              <FiMessageCircle className="mb-4 text-2xl text-red-500" />
              <p className="mb-6 text-sm italic leading-relaxed text-gray-300">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-400">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
