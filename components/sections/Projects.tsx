"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects } from "@/lib/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
      className={cn(project.featured ? "md:col-span-2" : "")}
    >
      <SpotlightCard className="group h-full overflow-hidden">
        <div className="flex gap-4 p-5 sm:gap-5 sm:p-6">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] sm:h-16 sm:w-16">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-contain p-1.5"
              sizes="64px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {project.title}
              </h3>
              {project.featured && (
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-300">
                  Flagship
                </span>
              )}
            </div>

            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <span className="font-mono text-xs font-medium text-white">
                    {m.value}
                  </span>
                  <span className="ml-1.5 text-[11px] text-zinc-600">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 8).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-violet-400 transition-colors hover:text-violet-300 sm:text-sm"
                  >
                    {link.label}
                    <ArrowUpRight size={12} aria-hidden />
                  </a>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-300 sm:text-sm"
              aria-expanded={expanded}
            >
              {expanded ? "Less detail" : "Architecture & detail"}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform",
                  expanded && "rotate-180",
                )}
                aria-hidden
              />
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.p
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-2 overflow-hidden text-xs leading-relaxed text-zinc-500 sm:text-sm"
                >
                  {project.longDescription}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" wide>
      <SectionHeader
        eyebrow="Projects"
        title="Production-grade systems"
        description="Products shipped to real users and real production environments — with architecture decisions that matter."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {other.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {other.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + featured.length}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
