"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type Props = { title: string; subtitle?: string };

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-red-500" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
