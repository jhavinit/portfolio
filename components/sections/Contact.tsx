"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const linkedIn = socialLinks.find((l) => l.name === "LinkedIn")!;

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something serious"
        description="Open to senior engineering roles, high-impact product teams, and technically challenging systems work. Reach out on LinkedIn."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <SpotlightCard className="flex flex-col justify-center p-8 sm:p-10">
          <p className="text-sm leading-relaxed text-zinc-400">
            Prefer a direct conversation about engineering, product work, or new
            opportunities? Connect on LinkedIn — I respond to thoughtful messages
            from engineers, founders, and hiring teams.
          </p>
          <Button
            href={linkedIn.href}
            variant="primary"
            external
            magnetic
            className="mt-8 w-fit"
          >
            <Linkedin size={18} aria-hidden />
            Connect on LinkedIn
            <ArrowUpRight size={16} aria-hidden />
          </Button>
        </SpotlightCard>

        <motion.div
          className="grid gap-3 sm:grid-cols-2"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
              aria-label={link.label}
            >
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                {link.name}
              </span>
              <ArrowUpRight
                size={16}
                className="text-zinc-600 transition-colors group-hover:text-violet-400"
                aria-hidden
              />
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
