"use client";

import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CurrentlyWorkingOn() {
  return (
    <section className="section-padding px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Currently Working On" subtitle="Projects and ideas I'm actively building right now" />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-6">
          {personalInfo.currentlyWorkingOn.map((item, i) => (
            <motion.div key={item.title} variants={fadeInUp} custom={i} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300 }} className="glass glow flex items-start gap-5 rounded-2xl p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                <FiCode className="text-xl text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span key={t} className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
