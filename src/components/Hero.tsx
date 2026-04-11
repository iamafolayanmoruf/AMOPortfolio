"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { personalInfo } from "@/data/personal";
import Button from "@/components/ui/Button";

const roles = ["Software Developer", "Frontend Engineer", "Mobile App Builder", "Full-Stack Developer"];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Currently Available for Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-white">Hi, I&apos;m</span>{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 h-10 text-xl font-semibold text-red-500 sm:text-2xl lg:text-3xl"
          >
            {typed}
            <span className="ml-0.5 animate-pulse text-red-400">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0"
          >
            {personalInfo.tagline}. I create clean, responsive, and interactive
            digital experiences that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Button href="#projects">View Projects <FiArrowRight /></Button>
            <Button href="#contact" variant="outline">Contact Me</Button>
            <Button href={personalInfo.cvLink} variant="ghost" external><FiDownload /> Download CV</Button>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 100 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="pulse-ring absolute -inset-6 rounded-full bg-gradient-to-tr from-red-600/30 via-red-500/20 to-transparent blur-2xl" />
            <div className="gradient-border relative h-72 w-72 overflow-hidden rounded-full bg-black sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 400px"
                className="object-cover scale-[1.05]"
                style={{ objectPosition: "50% 38%" }}
                priority
              />
              {/* Blend light photo edges into page black */}
              <div
                className="pointer-events-none absolute inset-0 z-[1] rounded-full bg-[radial-gradient(ellipse_85%_90%_at_50%_42%,transparent_35%,rgba(0,0,0,0.35)_65%,rgba(0,0,0,0.92)_100%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 z-[2] rounded-full shadow-[inset_0_0_90px_rgba(0,0,0,0.85)] ring-1 ring-inset ring-white/[0.07]"
                aria-hidden
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-6 w-4 rounded-full border border-gray-600 p-0.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-red-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
