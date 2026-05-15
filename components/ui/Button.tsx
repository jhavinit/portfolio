"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  magnetic?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
  magnetic = false,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  const variants = {
    primary:
      "bg-white text-surface hover:bg-zinc-100 shadow-[0_0_40px_-8px_rgba(255,255,255,0.3)]",
    secondary:
      "glass glass-hover text-zinc-100 hover:text-white border-white/10",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
  };

  const content = (
    <motion.span
      className={cn(base, variants[variant], className)}
      whileHover={reduceMotion || !magnetic ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return <a href={href}>{content}</a>;
  }

  return <Link href={href}>{content}</Link>;
}
