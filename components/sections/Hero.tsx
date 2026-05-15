"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  heroContent,
  siteConfig,
  socialLinks,
} from "@/lib/data/portfolio";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 pb-20 pt-28 sm:px-8 lg:px-12">
      <motion.div
        className="container-wide"
        variants={reduceMotion ? undefined : stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-violet-400/90 sm:text-sm"
        >
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {heroContent.headline}{" "}
          <span className="text-gradient-accent">{heroContent.headlineAccent}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mt-8"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" variant="primary" magnetic>
            View flagship work
            <ArrowUpRight size={16} aria-hidden />
          </Button>
          <Button href={siteConfig.linkedInUrl} variant="secondary" external magnetic>
            Connect on LinkedIn
          </Button>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-12 flex flex-wrap gap-6 border-t border-white/[0.06] pt-8"
          aria-label="Social profiles"
        >
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
              >
                {link.name}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-12 sm:grid-cols-4"
        >
          {heroContent.metrics.map((metric) => (
            <AnimatedCounter
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 transition-colors hover:text-zinc-400"
        aria-label="Scroll to about section"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
