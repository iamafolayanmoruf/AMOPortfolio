"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Get to know who I am and what drives me" />
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 lg:col-span-3"
          >
            {personalInfo.bio.map((paragraph, i) => (
              <motion.p key={i} variants={fadeInUp} custom={i} className="leading-relaxed text-gray-300">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 lg:col-span-2"
          >
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass glow rounded-2xl p-5 text-center"
              >
                <p className="text-3xl font-bold text-red-500">{stat.value}{stat.suffix}</p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
