"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { personal } from "@/lib/data";
import { useLang } from "@/lib/lang-context";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="w-full max-w-3xl mx-auto px-6 sm:px-8 pt-28 pb-14 sm:pt-32 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {/* Two-column: copy left, avatar right */}
        <div className="flex items-start justify-between gap-12">
          {/* ── Left column ── */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Identity row */}
            <div className="flex items-center gap-2.5">
              <span
                className="text-[11px] font-mono tracking-[0.12em] uppercase"
                style={{ color: "var(--text-tertiary)" }}
              >
                {personal.name}
              </span>
              <span style={{ color: "var(--border-hover)", fontSize: "10px" }}>
                ·
              </span>
              <span
                className="text-[11px] font-mono tracking-[0.12em] uppercase"
                style={{ color: "var(--text-tertiary)" }}
              >
                {h.role}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[1.75rem] sm:text-[2rem] font-normal leading-[1.22] tracking-[-0.022em] max-w-[460px]"
              style={{ color: "var(--text-primary)" }}
            >
              {h.tagline}
            </h1>

            {/* Description */}
            <p
              className="text-[0.9375rem] leading-[1.75] max-w-[380px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {h.description}
            </p>

            {/* Meta row */}
            <div className="flex items-center gap-3">
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--text-tertiary)" }}
              >
                {h.location}
              </span>
              <span style={{ color: "var(--border-hover)", fontSize: "10px" }}>
                ·
              </span>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--accent)" }}
              >
                {h.availability}
              </span>
            </div>
          </div>

          {/* ── Right column: profile image ── */}
          <div className="hidden sm:flex shrink-0 flex-col items-end gap-2 mt-0.5">
            <div
              style={{
                width: "104px",
                height: "104px",
                borderRadius: "4px",
                border: "1px solid var(--border-hover)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/perfil.jpeg"
                alt={`${personal.name} — profile`}
                fill
                className="object-cover object-center"
                sizes="104px"
                priority
              />
            </div>
            <span
              className="text-[12px] font-mono tracking-[0.1em] uppercase"
              style={{ color: "var(--text-tertiary)" }}
            >
              carlos irusta
            </span>
          </div>
        </div>

        {/* ── CTA row ── */}
        <div
          className="mt-9 pt-5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.12em] uppercase transition-colors duration-150"
            style={{ color: "var(--text-tertiary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-tertiary)")
            }
          >
            {h.cta}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 1v8M5 9L2 6M5 9l3-3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
