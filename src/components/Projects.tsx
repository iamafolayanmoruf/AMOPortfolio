"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { projects, projectCategories } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered =
    activeFilter === "all" || activeFilter === "fullstack"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="px-6 pt-8 pb-24 md:pt-10 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="A selection of projects I've built and worked on" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {projectCategories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.value
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "border border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                variants={fadeInUp}
                custom={i}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  {project.image && !project.image.includes("placeholder") ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl font-bold text-white/[0.03]">
                      {project.name.split(" ").map((w) => w[0]).join("")}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.a href={project.liveLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className="rounded-full bg-red-600 p-3 text-white shadow-lg shadow-red-600/30" aria-label={`Live demo of ${project.name}`}>
                      <FiExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-red-400 underline decoration-red-400/30 underline-offset-2 hover:text-red-300">
                    View Live Project &rarr;
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
