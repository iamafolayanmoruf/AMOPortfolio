"use client";

import { motion } from "framer-motion";
import { buttonTap } from "@/lib/animations";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black";

  const variants = {
    primary:
      "bg-red-600 text-white shadow-lg shadow-red-600/30 hover:bg-red-500 hover:shadow-red-500/40",
    outline:
      "border border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:text-red-300",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.06 }}
        whileTap={buttonTap}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={buttonTap}
      onClick={onClick}
      type={type}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
