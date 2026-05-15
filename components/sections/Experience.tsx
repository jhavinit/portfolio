"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/lib/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="experience" className="bg-surface-raised/30">
      <SectionHeader
        eyebrow="Experience"
        title="Impact at scale"
        description="Production systems, client deployments, and measurable outcomes — not bullet-point theater."
      />

      <div className="relative">
        <div
          className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent md:block"
          aria-hidden
        />

        <ul className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.li
              key={exp.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="relative md:pl-12"
            >
              <div
                className={cn(
                  "absolute left-0 top-8 hidden h-2.5 w-2.5 rounded-full border-2 border-violet-500 bg-surface md:block",
                )}
                aria-hidden
              />

              <SpotlightCard className="overflow-hidden">
                <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="56px"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-violet-400/90">{exp.company}</p>
                      </div>
                      <time className="font-mono text-xs text-zinc-500 sm:text-sm">
                        {exp.period}
                      </time>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {exp.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h.slice(0, 40)}
                          className="flex gap-2 text-sm text-zinc-500"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/60" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
