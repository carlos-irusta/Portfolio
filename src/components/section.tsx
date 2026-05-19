"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export function Section({ id, children, label, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`w-full max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-16 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {label && (
          <p
            className="text-[10px] font-mono uppercase tracking-[0.16em] mb-8"
            style={{ color: "var(--text-tertiary)" }}
          >
            {label}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  );
}
