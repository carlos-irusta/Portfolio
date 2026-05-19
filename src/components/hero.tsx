"use client";

import { motion } from "motion/react";
import { personal } from "@/lib/data";

export function Hero() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 sm:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="flex items-start justify-between gap-8">

          {/* Left: all copy */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* Identity row */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "var(--text-tertiary)" }}>
                {personal.name}
              </span>
              <span style={{ color: "var(--border-hover)" }}>·</span>
              <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: "var(--text-tertiary)" }}>
                {personal.role}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[1.75rem] sm:text-[2.1rem] font-light leading-[1.15] tracking-[-0.03em]"
              style={{ color: "var(--text-primary)" }}
            >
              {personal.tagline}
            </h1>

            {/* Description */}
            <p
              className="text-sm leading-[1.8] max-w-[420px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {personal.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono" style={{ color: "var(--text-tertiary)" }}>
                {personal.location}
              </span>
              <span style={{ color: "var(--border-hover)" }}>·</span>
              <span className="text-[11px] font-mono" style={{ color: "var(--accent)" }}>
                {personal.availability}
              </span>
            </div>
          </div>

          {/* Right: avatar placeholder */}
          <div
            className="hidden sm:block w-14 h-14 shrink-0 rounded-sm mt-0.5"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* CTA separator row */}
        <div
          className="mt-10 pt-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 text-[11px] font-mono tracking-widest uppercase transition-colors duration-150"
            style={{ color: "var(--text-tertiary)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-tertiary)")}
          >
            View work
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M5 1v8M5 9L2 6M5 9l3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
