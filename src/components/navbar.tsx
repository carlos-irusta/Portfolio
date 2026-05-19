"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, personal } from "@/lib/data";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 inset-x-0 z-50"
          style={{ background: "var(--bg-base)" }}
        >
          <div
            className="absolute bottom-0 inset-x-0 h-px transition-opacity duration-300"
            style={{
              background: "var(--border)",
              opacity: scrolled ? 1 : 0,
            }}
          />

          <div className="max-w-3xl mx-auto px-6 sm:px-8 h-11 flex items-center justify-between">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-xs font-mono transition-colors duration-150"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {personal.name.toLowerCase()}.dev
            </a>

            <nav className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-[11px] font-mono tracking-widest uppercase transition-colors duration-150"
                  style={{ color: "var(--text-tertiary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-tertiary)")}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
