"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skillCategories, topTechStack } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-6 pt-24 pb-10 md:pt-32 md:pb-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & Tech Stack" subtitle="Technologies I work with to bring ideas to life" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-10"
        >
          {skillCategories.map((category, ci) => (
            <motion.div key={category.title} variants={fadeInUp} custom={ci} className="text-center">
              <h3 className="mb-4 text-lg font-semibold text-red-500">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.12, y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="glass group flex cursor-default items-center gap-2.5 rounded-xl px-4 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
                    >
                      <Icon className="text-xl" style={{ color: skill.color }} />
                      <span className="text-sm font-medium text-white/80 group-hover:text-white">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-12"
        >
          <h3 className="mb-4 text-center text-lg font-semibold text-white">Tech I Use Most</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topTechStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="rounded-full border border-red-500/25 bg-red-500/5 px-5 py-2 text-sm font-medium text-red-400 hover:bg-red-500/15 hover:text-red-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
