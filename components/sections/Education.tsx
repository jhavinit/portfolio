"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { education, awards } from "@/lib/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="education" className="bg-surface-raised/30">
      <div className="grid gap-20 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Education"
            title="Academic foundation"
            description="Strong CS fundamentals paired with continuous learning at BITS Pilani."
          />

          <ul className="space-y-4">
            {education.map((item, i) => (
              <motion.li
                key={item.school}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <SpotlightCard className="flex gap-4 p-5">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                    <Image
                      src={item.logo}
                      alt=""
                      fill
                      className="object-contain p-1.5"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{item.school}</h3>
                    <p className="text-sm text-violet-400/80">{item.degree}</p>
                    <p className="mt-1 font-mono text-xs text-zinc-500">
                      {item.period}
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">{item.detail}</p>
                  </div>
                </SpotlightCard>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeader
            eyebrow="Recognition"
            title="Awards & credentials"
            description="Competition results, research, and certifications that reflect depth beyond the job title."
          />

          <ul className="space-y-4">
            {awards.map((item, i) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <SpotlightCard className="flex gap-4 p-5">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {item.description}
                    </p>
                    {"year" in item && item.year && (
                      <p className="mt-1 font-mono text-xs text-zinc-600">
                        {item.year}
                      </p>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300"
                      >
                        View
                        <ArrowUpRight size={14} aria-hidden />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
