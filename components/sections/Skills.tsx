"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/lib/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const category = skillCategories[active];

  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="Stack depth, not buzzwords"
        description="Technologies I use to ship reliable systems — categorized by how I actually apply them in production."
      />

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <ul className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {skillCategories.map((cat, i) => (
            <li key={cat.name}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm transition-all",
                  active === i
                    ? "bg-white/10 text-white"
                    : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300",
                )}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>

        <motion.div
          key={category.name}
          initial={reduceMotion ? false : { opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="mb-6 font-mono text-sm text-violet-400/90">
            {category.name}
          </h3>
          <ul className="flex flex-wrap gap-3">
            {category.skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
              >
                <span className="inline-block rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-violet-500/20 hover:bg-violet-500/5 hover:text-white">
                  {skill}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
