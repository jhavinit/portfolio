"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/lib/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title={aboutContent.title}
        description={aboutContent.paragraphs[0]}
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.p
          className="text-base leading-relaxed text-zinc-400 sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {aboutContent.paragraphs[1]}
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-1">
          {aboutContent.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <SpotlightCard className="p-6">
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
