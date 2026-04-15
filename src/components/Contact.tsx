"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiPhone } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  /** Extra detail from the server (e.g. FormSubmit message) */
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setErrorDetail(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = (await res.json()) as { success?: boolean; message?: string };
      } catch {
        setStatus("error");
        setErrorDetail("Could not read the server response. Try again later.");
        return;
      }

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      setStatus("error");
      if (data.message) setErrorDetail(data.message);
    } catch {
      setStatus("error");
      setErrorDetail("Network error. Check your connection and try again.");
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-0 focus:ring-transparent focus:border-white/15";

  return (
    <section id="contact" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind or want to collaborate? Let's talk." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-12 lg:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-8">
            <p className="leading-relaxed text-gray-300">
              I&apos;m always excited to hear about new projects and opportunities. Whether you have a question, a proposal, or just want to say hello, feel free to reach out!
            </p>
            <div className="space-y-4">
              <motion.a href={`mailto:${personalInfo.email}`} whileHover={{ x: 6 }} className="group flex items-center gap-4 text-white hover:text-red-400">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 group-hover:bg-red-500/20 group-hover:shadow-lg group-hover:shadow-red-500/20"><FiMail size={20} /></span>
                <span className="text-sm">{personalInfo.email}</span>
              </motion.a>
              <motion.a href={`tel:${personalInfo.phone}`} whileHover={{ x: 6 }} className="group flex items-center gap-4 text-white hover:text-red-400">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 group-hover:bg-red-500/20 group-hover:shadow-lg group-hover:shadow-red-500/20"><FiPhone size={20} /></span>
                <span className="text-sm">{personalInfo.phone}</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.form variants={fadeInUp} custom={1} onSubmit={handleSubmit} noValidate className="glass glow space-y-5 rounded-2xl p-6 sm:p-8">
            <div>
              <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`${inputBase} ${errors.name ? "border-red-500/60" : "border-white/8 focus:border-red-500/50"}`} />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${inputBase} ${errors.email ? "border-red-500/60" : "border-white/8 focus:border-red-500/50"}`} />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
            <div>
              <textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputBase} resize-none ${errors.message ? "border-red-500/60" : "border-white/8 focus:border-red-500/50"}`} />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              {status === "sending" ? "Sending..." : (<>Send Message <FiSend /></>)}
            </Button>
            {status === "success" && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm text-green-400">Message sent successfully! I&apos;ll get back to you soon.</motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm text-red-400">
                <span className="block">
                  Something went wrong sending the message. Try again, or email me directly above.
                </span>
                {errorDetail && (
                  <span className="mt-2 block text-xs text-red-300/90">{errorDetail}</span>
                )}
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
