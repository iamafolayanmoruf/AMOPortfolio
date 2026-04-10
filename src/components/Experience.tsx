"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { milestones } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="My Journey" subtitle="Key milestones that shaped my development career" />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-red-500/60 via-red-500/20 to-transparent md:left-1/2 md:-translate-x-px" />
          {milestones.map((milestone, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={milestone.id} variants={fadeInUp} custom={i} className={`relative mb-12 flex items-start gap-8 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 top-1 z-10 md:left-1/2 md:-translate-x-1/2">
                  <motion.div whileInView={{ scale: [0, 1.3, 1] }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/50">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </motion.div>
                </div>
                <div className={`ml-12 w-full md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }} className="glass glow rounded-2xl p-6">
                    <span className="text-sm font-bold text-red-500">{milestone.year}</span>
                    <h3 className="mt-1 text-lg font-bold text-white">{milestone.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{milestone.description}</p>
                  </motion.div>
                </div>
                <div className="hidden w-[45%] md:block" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
