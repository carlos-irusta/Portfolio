"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personal } from "@/lib/data";
import { useLang } from "@/lib/lang-context";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { lang, t, setLang } = useLang();

  const navItems = [
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.stack,    href: "#stack" },
    { label: t.nav.contact,  href: "#contact" },
  ];

  // Hide on scroll down, show on scroll up
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

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = ["projects", "stack", "contact"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
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
          transition={{ duration: 0.2 }}
          className="fixed top-0 inset-x-0 z-50"
          style={{ background: "var(--bg-base)" }}
        >
          {/* Bottom rule — visible once scrolled */}
          <div
            className="absolute bottom-0 inset-x-0 h-px transition-opacity duration-300"
            style={{ background: "var(--border)", opacity: scrolled ? 1 : 0 }}
          />

          <div className="max-w-3xl mx-auto px-6 sm:px-8 h-12 flex items-center justify-between">
            {/* Identity */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-[13px] font-mono tracking-tight transition-colors duration-150"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {personal.name.toLowerCase()}.dev
            </a>

            {/* Right side: nav links + lang switcher */}
            <div className="flex items-center gap-7">
              <nav className="flex items-center gap-7">
                {navItems.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="relative text-[11px] font-mono tracking-[0.12em] uppercase transition-colors duration-200"
                      style={{
                        color: isActive ? "var(--text-label)" : "var(--text-tertiary)",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = isActive ? "var(--text-label)" : "var(--text-tertiary)")}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute -bottom-[1px] inset-x-0 h-px"
                          style={{ background: "var(--accent)", opacity: 0.5 }}
                        />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Language switcher — minimal, integrated */}
              <span
                className="flex items-center gap-1 text-[10px] font-mono"
                style={{ color: "var(--text-tertiary)" }}
                aria-label="Language switcher"
              >
                <button
                  onClick={() => setLang("en")}
                  className="transition-colors duration-150 cursor-pointer"
                  style={{ color: lang === "en" ? "var(--text-secondary)" : "var(--text-tertiary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = lang === "en" ? "var(--text-secondary)" : "var(--text-tertiary)")}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <span style={{ opacity: 0.3 }}>/</span>
                <button
                  onClick={() => setLang("es")}
                  className="transition-colors duration-150 cursor-pointer"
                  style={{ color: lang === "es" ? "var(--text-secondary)" : "var(--text-tertiary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = lang === "es" ? "var(--text-secondary)" : "var(--text-tertiary)")}
                  aria-label="Cambiar a español"
                >
                  ES
                </button>
              </span>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
